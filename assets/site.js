// Shared helpers for the Model 2 development site: data loading, header, number formats,
// and a small SVG chart (median line, 90% band, truth, observations, status shading).

const M2 = {};

M2.load = async (path) => {
  const r = await fetch(`data/${path}`);
  if (!r.ok) throw new Error(`data/${path}: ${r.status}`);
  return r.json();
};

M2.param = (k) => new URLSearchParams(location.search).get(k);

M2.esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

M2.PAGES = [["index.html", "Overview"], ["sector.html", "Sectors"], ["entity.html", "Operations"],
            ["evidence.html", "Evidence"], ["accuracy.html", "Accuracy"]];

M2.header = (meta, page) => {
  const nav = M2.PAGES.map(([h, l]) => `<a href="${h}" class="${h === page ? "on" : ""}">${l}</a>`).join("");
  document.body.insertAdjacentHTML("afterbegin", `
    <header class="top"><div class="in"><span class="brand">Model 2 · firm states</span><nav>${nav}</nav>
    <span class="run" title="${M2.esc(meta.workspace)}">as of ${meta.as_of} · ${M2.esc(meta.param_version)} · ${meta.n_members} members</span></div></header>
    ${meta.synthetic ? `<div class="banner"><div class="in"><b>Synthetic world.</b> Every observation here is simulated from a known truth, shown in <span style="color:var(--truth)">orange</span>. Development site.</div></div>` : ""}`);
  document.title = `${M2.PAGES.find((p) => p[0] === page)?.[1] ?? "Model 2"} · Model 2 (dev)`;
};

M2.fmt = (v, unit) => {
  if (v == null || !isFinite(v)) return "–";
  if (unit === "share" || unit === "fraction") return (100 * v).toFixed(1) + "%";
  const a = Math.abs(v);
  if (a >= 1e9) return (v / 1e9).toFixed(2) + "B";
  if (a >= 1e6) return (v / 1e6).toFixed(2) + "M";
  if (a >= 1e4) return (v / 1e3).toFixed(1) + "k";
  if (a >= 100) return v.toFixed(0);
  if (a >= 1) return v.toFixed(2);
  if (a === 0) return "0";
  return v.toPrecision(3);
};
M2.pct = (v, d = 1) => (v == null || !isFinite(v) ? "–" : (100 * v).toFixed(d) + "%");

M2.SHORT_VAR = {
  capacity: "Capacity", output: "Output", utilization: "Utilization", backlog: "Order book", shipments: "Shipments",
  price: "Price", unit_cost: "Unit cost", lead_time: "Lead time (months)", new_orders: "New orders",
  backlog_overdue: "Overdue orders", phantom_backlog: "Phantom orders", input_inventory: "Input inventory",
  finished_stock: "Finished stock", lost_demand: "Lost demand", load_factor: "Load factor",
  capacity_in_use: "Capacity in use", capacity_announced: "Capacity announced",
  capacity_under_construction: "Under construction",
};
M2.isShare = (v) => v === "utilization" || v === "load_factor";

// Observation values from the noise scale back to reported units.
M2.natural = (noise, y) => {
  if (y == null) return null;
  if (noise === "lognormal") return Math.exp(y);
  if (noise === "logit") return 1 / (1 + Math.exp(-y));
  return y;
};

M2.monthIdx = (m) => +m.slice(0, 4) * 12 + (+m.slice(5, 7) - 1);
M2.idxMonth = (i) => `${Math.floor(i / 12)}-${String((i % 12) + 1).padStart(2, "0")}`;

function niceTicks(lo, hi, n = 5) {
  if (!(hi > lo)) { hi = lo + 1; }
  const span = hi - lo, step0 = span / n, mag = 10 ** Math.floor(Math.log10(step0));
  const step = [1, 2, 2.5, 5, 10].map((k) => k * mag).find((s) => s >= step0);
  const out = [];
  for (let v = Math.ceil(lo / step) * step; v <= hi + 1e-9 * span; v += step) out.push(+v.toPrecision(12));
  return out;
}

let tipEl;
function tip(html, ev) {
  if (!tipEl) { tipEl = document.createElement("div"); tipEl.className = "tip"; document.body.appendChild(tipEl); }
  if (!html) { tipEl.hidden = true; return; }
  tipEl.hidden = false; tipEl.innerHTML = html;
  const w = tipEl.offsetWidth, x = ev.clientX + 14 + w > innerWidth ? ev.clientX - w - 14 : ev.clientX + 14;
  tipEl.style.left = x + "px"; tipEl.style.top = Math.max(4, ev.clientY - 10) + "px";
}

/* M2.chart(el, opts)
   opts.bands:  [{month[], q05[], q50[], q95[], color, label, fill}]   member quantiles
   opts.truth:  {month[], value[], color, label}, or a list of them   truth lines (dashed)
   opts.points: [{month, y, lo, hi, label}]                            observations, with optional range
   opts.status: {month[], status[]}                                    shade nowcast and forecast months
   opts.yLabel: y-axis title, with units
   opts.unit, opts.height, opts.yZero, opts.xFrom */
M2.chart = (el, o) => {
  const W = 560, H = o.height || 220, L = o.yLabel ? 66 : 52, R = 10, T = 8, B = 22;
  const css = getComputedStyle(document.documentElement);
  const months = new Set(), truths = o.truth ? [].concat(o.truth) : [];
  (o.bands || []).forEach((b) => b.month.forEach((m) => months.add(m)));
  (o.points || []).forEach((p) => months.add(p.month));
  truths.forEach((t) => t.month.forEach((m, i) => t.value[i] != null && months.add(m)));
  let ms = [...months].filter((m) => !o.xFrom || m >= o.xFrom).sort();
  if (!ms.length) { el.innerHTML = `<p class="muted">no data</p>`; return; }
  const x0 = M2.monthIdx(ms[0]), x1 = Math.max(M2.monthIdx(ms[ms.length - 1]), x0 + 1);
  const ys = [];
  const inX = (m) => !o.xFrom || m >= o.xFrom;
  (o.bands || []).forEach((b) => b.month.forEach((m, i) => { if (inX(m)) ys.push(b.q05[i], b.q95[i], b.q50[i]); }));
  truths.forEach((t) => t.month.forEach((m, i) => inX(m) && ys.push(t.value[i])));
  (o.points || []).forEach((p) => { if (inX(p.month)) ys.push(p.y, p.lo, p.hi); });
  const fin = ys.filter((v) => v != null && isFinite(v));
  let lo = Math.min(...fin), hi = Math.max(...fin);
  if (o.yZero && lo > 0) lo = 0;
  const pad = (hi - lo) * 0.06 || Math.abs(hi) * 0.05 || 1;
  lo -= pad; hi += pad;
  if (o.yZero && lo < 0 && Math.min(...fin) >= 0) lo = 0;
  const X = (m) => L + ((M2.monthIdx(m) - x0) / (x1 - x0)) * (W - L - R);
  const Y = (v) => T + (1 - (v - lo) / (hi - lo)) * (H - T - B);
  const fmt = (v) => M2.fmt(v, o.unit);
  let s = "";
  // status shading
  if (o.status) {
    const runs = [];
    o.status.month.forEach((m, i) => {
      const st = o.status.status[i];
      if (st === "smoothed" || !inX(m)) return;
      const last = runs[runs.length - 1];
      if (last && last.st === st) last.m1 = m; else runs.push({ st, m0: m, m1: m });
    });
    runs.forEach((r) => {
      const a = X(r.m0) - 0.5 * (W - L - R) / (x1 - x0), b = X(r.m1) + 0.5 * (W - L - R) / (x1 - x0);
      s += `<rect x="${a}" y="${T}" width="${Math.max(1, b - a)}" height="${H - T - B}" fill="var(--${r.st})"/>`;
      if (b - a > 6 * r.st.length) s += `<text x="${a + 3}" y="${T + 10}">${r.st}</text>`;
    });
  }
  niceTicks(lo, hi, 4).forEach((v) => {
    s += `<line class="gridline" x1="${L}" x2="${W - R}" y1="${Y(v)}" y2="${Y(v)}"/>`;
    s += `<text x="${L - 4}" y="${Y(v) + 3}" text-anchor="end">${fmt(v)}</text>`;
  });
  const y0 = Math.floor(x0 / 12), y1 = Math.floor(x1 / 12);
  const every = Math.max(1, Math.ceil((y1 - y0) / 8));
  for (let y = y0 + 1; y <= y1; y++) {
    if ((y - y0) % every) continue;
    const xx = X(`${y}-01`);
    s += `<line class="gridline" x1="${xx}" x2="${xx}" y1="${T}" y2="${H - B}"/><text x="${xx}" y="${H - 6}" text-anchor="middle">${y}</text>`;
  }
  if (o.yLabel) s += `<text class="ylab" transform="rotate(-90)" x="${-(T + (H - T - B) / 2)}" y="11" text-anchor="middle">${M2.esc(o.yLabel)}</text>`;
  (o.bands || []).forEach((b) => {
    const idx = b.month.map((m, i) => i).filter((i) => inX(b.month[i]) && b.q05[i] != null);
    if (!idx.length) return;
    const col = b.color || "var(--accent)";
    if (b.fill !== false) {
      const up = idx.map((i) => `${X(b.month[i])},${Y(b.q95[i])}`), dn = idx.slice().reverse().map((i) => `${X(b.month[i])},${Y(b.q05[i])}`);
      s += `<polygon points="${up.concat(dn).join(" ")}" fill="${b.bandColor || "var(--band)"}" stroke="none"/>`;
    }
    s += `<polyline points="${idx.map((i) => `${X(b.month[i])},${Y(b.q50[i])}`).join(" ")}" fill="none" stroke="${col}" stroke-width="1.6"/>`;
  });
  truths.forEach((t) => {
    const pts = t.month.map((m, i) => [m, t.value[i]]).filter(([m, v]) => v != null && inX(m));
    s += `<polyline points="${pts.map(([m, v]) => `${X(m)},${Y(v)}`).join(" ")}" fill="none" stroke="${t.color || "var(--truth)"}" stroke-width="1.3" stroke-dasharray="4 2"/>`;
  });
  (o.points || []).forEach((p) => {
    if (!inX(p.month) || p.y == null) return;
    if (p.lo != null) s += `<line x1="${X(p.month)}" x2="${X(p.month)}" y1="${Y(p.lo)}" y2="${Y(p.hi)}" stroke="var(--muted)" stroke-width="1"/>`;
    s += `<circle cx="${X(p.month)}" cy="${Y(p.y)}" r="2.6" fill="${p.out ? "var(--bad)" : "var(--obs)"}"/>`;
  });
  s += `<line class="cursor" x1="0" x2="0" y1="${T}" y2="${H - B}" stroke="var(--muted)" stroke-width="0.7" visibility="hidden"/>`;
  el.innerHTML = `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img">${s}<rect x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}" fill="transparent" class="hit"/></svg>`;
  const svg = el.querySelector("svg"), cur = svg.querySelector(".cursor");
  svg.querySelector(".hit").addEventListener("mousemove", (ev) => {
    const pt = svg.createSVGPoint(); pt.x = ev.clientX; pt.y = ev.clientY;
    const p = pt.matrixTransform(svg.getScreenCTM().inverse());
    const mi = Math.round(x0 + ((p.x - L) / (W - L - R)) * (x1 - x0)), m = M2.idxMonth(mi);
    cur.setAttribute("x1", X(m)); cur.setAttribute("x2", X(m)); cur.setAttribute("visibility", "visible");
    let h = `<b>${m}</b>`;
    (o.bands || []).forEach((b) => {
      const i = b.month.indexOf(m);
      if (i >= 0) h += `<br>${b.label || "estimate"}: ${fmt(b.q50[i])} <span class="muted">[${fmt(b.q05[i])} – ${fmt(b.q95[i])}]</span>`;
    });
    truths.forEach((t) => { const i = t.month.indexOf(m); if (i >= 0 && t.value[i] != null) h += `<br><span style="color:${t.color || "var(--truth)"}">${t.label || "truth"}: ${fmt(t.value[i])}</span>`; });
    (o.points || []).filter((q) => q.month === m).forEach((q) => { h += `<br>${q.label || "observed: " + fmt(q.y)}`; });
    tip(h, ev);
  });
  svg.querySelector(".hit").addEventListener("mouseleave", () => { tip(null); cur.setAttribute("visibility", "hidden"); });
};

M2.legend = (items) => `<div class="legend">${items.map(([c, l, dash]) =>
  `<span><i style="background:${dash ? "transparent" : c};${dash ? `border-top:2px dashed ${c};height:0` : ""}"></i>${l}</span>`).join("")}</div>`;

M2.fail = (e) => {
  document.querySelector("main").innerHTML = `<p class="bad">Could not load site data: ${M2.esc(e.message)}.</p>
    <p>Build it with <span class="mono">python scripts/build_site_data.py WORKSPACE</span> and serve <span class="mono">site/</span> over HTTP (see site/README.md).</p>`;
};

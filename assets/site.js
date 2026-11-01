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
    ${meta.synthetic ? `<div class="banner"><div class="in"><b>Synthetic world.</b> A simulation generates every observation here from a known truth, shown in <span style="color:var(--truth)">orange</span>. Development site.</div></div>` : ""}`);
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
  price: "Price", unit_cost: "Unit cost", lead_time: "Lead time", new_orders: "New orders",
  backlog_overdue: "Overdue orders", phantom_backlog: "Phantom orders", input_inventory: "Input inventory",
  finished_stock: "Finished inventory", lost_demand: "Lost demand", load_factor: "Load factor",
  capacity_in_use: "Capacity in use", capacity_announced: "Capacity announced",
  capacity_under_construction: "Capacity under construction",
};
// Display names of the run statuses (the data says "smoothed" for months with observations).
M2.STATUS = { smoothed: "history", nowcast: "nowcast", forecast: "forecast" };
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
    <p>Try a hard reload (Shift-reload) in case the browser kept an old copy of the site's files. If the error stays, the
    data files are missing or out of date: rebuild them with <span class="mono">python scripts/build_site_data.py WORKSPACE</span>
    and redeploy with <span class="mono">scripts/deploy_site.sh</span> (site/README.md).</p>`;
};

/* Plain-language definitions for the "i" buttons on sector charts. The default wording fits
   make-to-order industries (steel); a template's entry replaces it where the meaning differs. */
M2.EXPLAIN = {
  capacity: "The most the sector could produce in a month with the plants and equipment it has.",
  output: "What the sector actually produced in the month.",
  utilization: "Output divided by capacity: how hard the existing plants are running. 100% would be every plant flat out.",
  shipments: "Product delivered to customers in the month. It can differ from output when goods go into or come out of stock.",
  backlog: "Orders customers have placed but not yet received, at the end of the month. A growing order book means demand is outrunning deliveries.",
  new_orders: "Orders received in the month, minus orders cancelled.",
  price: "Average selling price per unit, weighted by how much each operation shipped.",
  unit_cost: "Average cost of producing one unit, weighted the same way as price. Price minus unit cost is the margin.",
  lead_time: "Months a customer ordering today is quoted to wait for delivery. Lead time lengthens when the order book is long relative to output.",
  backlog_overdue: "Orders in the order book already past their promised delivery date.",
  phantom_backlog: "Orders customers place beyond what they need (for example ordering from two mills when lead times are long) and later cancel. They inflate the order book without being real demand.",
  input_inventory: "Raw materials on hand at the end of the month (for steel: scrap, iron ore, pig iron), in input units.",
  finished_stock: "Finished goods produced but not yet shipped, at the end of the month.",
  lost_demand: "Customers turned away because there was no room. A seat that flies empty cannot be sold later, so unmet demand is lost rather than queued.",
  load_factor: "Share of the capacity flown that was sold: passenger-miles divided by seat-miles.",
  capacity_in_use: "Capacity that is leased and in service at the end of the month.",
  capacity_announced: "New capacity announced in the month (press releases, planning filings). Announced projects may still be dropped.",
  capacity_under_construction: "Capacity being built at the end of the month, not yet in service.",
};
M2.EXPLAIN_TEMPLATE = {
  perishable_service: {
    capacity: "Seat-miles the airlines' fleets could fly in a month.",
    output: "Seat-miles actually flown in the month (available seat-miles): one seat flown one mile is one seat-mile.",
    utilization: "Seat-miles flown divided by the seat-miles the fleet could fly: how much of the fleet is in the air.",
    shipments: "Passenger-miles sold in the month (revenue passenger-miles): one paying passenger flown one mile.",
    backlog: "Tickets already sold for future flights, in passenger-miles, at the end of the month.",
    new_orders: "Tickets sold in the month, minus cancellations, in passenger-miles.",
    price: "Average fare per passenger-mile (the airline 'yield').",
    unit_cost: "Average cost of flying one seat-mile, weighted as the fare.",
    lead_time: "Months between buying a ticket and the flight, on average.",
  },
  contracted_capacity: {
    capacity: "Total IT power the data centers have built, in megawatts (MW). It is a stock, not a monthly flow.",
    output: "Capacity leased to tenants and in service, in MW.",
    utilization: "Leased capacity divided by built capacity (occupancy).",
    shipments: "MW of leases that started in the month (lease starts).",
    backlog: "MW of leases signed but not yet started, at the end of the month. Data-center operators report it as 'signed not commenced'.",
    new_orders: "MW of new leases signed in the month, net of cancellations.",
    price: "Average monthly rent per MW leased.",
    unit_cost: "Average monthly cost of running one MW, weighted as rent.",
    lead_time: "Months between signing a lease and the tenant moving in: the pre-leasing horizon plus any wait for free capacity.",
  },
};
M2.explain = (v, template) => (M2.EXPLAIN_TEMPLATE[template] || {})[v] || M2.EXPLAIN[v] || "";
// An "i" button; its text shows on hover, or on tap (click toggles). The card is the positioning box.
M2.info = (text) => text ? `<span class="infowrap"><button type="button" class="info" aria-label="What is this?">i</button><span class="infotip" role="tooltip">${M2.esc(text)}</span></span>` : "";
document.addEventListener("click", (ev) => {
  const b = ev.target.closest(".info");
  document.querySelectorAll(".infowrap.open").forEach((w) => { if (!b || w !== b.parentElement) w.classList.remove("open"); });
  if (b) b.parentElement.classList.toggle("open");
});

/* Plain definitions of each free parameter, "Name: definition (equation)". */
M2.PARAM = {
  alpha: "Normal utilization: utilization in a month of normal demand, logit scale (L3).",
  beta: "Demand response: how far utilization rises with demand pressure (L3).",
  betaO: "Order response: elasticity of new orders to real demand (L6).",
  c0: "Starting unit cost: unit cost in the first month, log scale.",
  delta: "Capacity drift: monthly change in capacity outside announced projects (L1).",
  ell: "Normal order-book cover: months of output the order book holds in a normal month (L8–L9).",
  emis_a: "Emissions level: log emissions at the reference output.",
  emis_b: "Emissions slope: percent change in emissions per percent change in output.",
  export_share: "Export share: share of shipments exported.",
  k0: "Starting capacity: capacity in the first month, log scale.",
  lf_norm: "Normal load factor: share of seat-miles sold in a normal month (L17).",
  list_gap: "List-price gap: log list price minus log transaction price.",
  lt_bias: "Lead-time bias: quoted lead time over the model's lead time, log scale.",
  m0: "Starting markup: markup in the first month, log scale.",
  mu: "Normal markup: price over unit cost in a normal month, log scale (L5).",
  o: "Order level: new orders relative to the level that keeps the order book steady, log scale (L6).",
  oA: "Announcement rate: capacity announced per unit of capacity, relative to replacement, log scale (L19).",
  u_norm: "Normal occupancy: share of capacity leased in a normal month (L18).",
  z0: "Starting utilization: utilization in the first month relative to normal, logit scale.",
};

/* Observation types: chart title, y-axis title ({u}: the sector's physical unit, {cap}: its
   capacity unit; flows sum over each observation's period), plain definition, the model
   quantity it informs, and its real-world source. */
M2.OBS = {
  revenue: ["Revenue", "Revenue (USD per period)", "Company revenue over the period, from filings.", "Price × shipments over the company's operations (price × capacity in use for data centers)", "SEC EDGAR 10-Q and 10-K, segment notes"],
  production: ["Production", "Production ({u} per period)", "Volume produced over the period.", "Output", "Trade associations, EIA, company reports"],
  stated_capacity: ["Stated capacity", "Stated capacity ({cap})", "Capacity as the company or an industry report states it.", "Capacity", "Trade press, industry reports, EIA-860"],
  export_volume: ["Exports", "Exports ({u} per period)", "Volume exported over the period.", "Shipments × the operation's export share", "Customs and trade data"],
  emissions: ["Emissions", "log emissions", "Greenhouse-gas emissions reported for the year, on a log scale.", "Output, through the operation's emissions level and slope", "EPA GHGRP (annual)"],
  satellite_binary: ["Satellite activity flag", "Probability of activity seen (%)", "Whether a satellite image shows the site active (for example a plume or heat).", "Utilization, through a fixed curve per sensor", "Sentinel-2 and Landsat, per-site pipeline"],
  satellite_index: ["Satellite activity index", "Activity index", "Activity index measured from satellite data (heat, emissions).", "Utilization, through a fixed line per sensor", "VIIRS thermal, Sentinel-5P"],
  price: ["Price", "Price (USD/{u})", "Transaction price per unit.", "Price (unit cost + markup)", "Trade press, company releases (airline yield)"],
  list_price: ["List price", "List price (USD/{u})", "Published list price per unit.", "Price plus the operation's list-price gap", "Price surveys, mill price sheets"],
  raw_inventory: ["Input inventory", "Input inventory (input units)", "Raw materials on hand at the end of the period.", "Input inventory", "Balance-sheet notes"],
  finished_inventory: ["Finished inventory", "Finished inventory ({u})", "Finished goods on hand at the end of the period.", "Finished inventory", "Balance-sheet notes"],
  backlog: ["Order book", "Order book (USD)", "Dollar value of orders not yet delivered (remaining performance obligations).", "Order book × price", "SEC EDGAR 10-Q remaining performance obligations"],
  signed_not_commenced: ["Signed not commenced", "Signed not commenced (USD/year)", "Annual rent of leases signed but not yet started.", "Order book × price, as annual rent (data centers)", "REIT supplements (SEC EDGAR 8-K)"],
  rent_churn: ["Rent churn", "Rent churn (fraction of rent per period)", "Share of rent lost to leases ending without renewal over the period.", "Lease term (turnover time, L18)", "REIT supplements (for example Equinix MRR churn)"],
  book_to_bill: ["Book-to-bill", "Book-to-bill (ratio)", "New orders divided by shipments over the period.", "New orders net of cancellations, relative to shipments", "Company releases, trade associations"],
  lead_time: ["Quoted lead time", "Lead time (months)", "Lead time quoted by a survey or trade source.", "Lead time, plus the source's bias", "Lead-time surveys, trade press"],
  traffic: ["Traffic", "Traffic ({u} per period)", "Volume sold over the period (revenue passenger-miles for airlines).", "Shipments", "BTS T-100"],
  capacity_offered: ["Capacity offered", "Capacity offered ({u} per period)", "Volume offered over the period (available seat-miles for airlines).", "Output", "BTS T-100"],
  load_factor: ["Load factor", "Load factor (%)", "Share of the volume offered that was sold.", "Shipments ÷ output", "BTS T-100"],
  occupancy: ["Occupancy", "Occupancy (%)", "Share of capacity leased.", "Utilization (share leased)", "Industry reports, broker surveys, REIT leased %"],
  vacancy: ["Vacancy", "Vacancy (%)", "Share of capacity not leased.", "1 − utilization", "Broker surveys"],
  capacity_announced: ["Capacity announced", "Capacity announced ({u} per period)", "New capacity announced over the period.", "Announcements, the start of the construction pipeline (L19)", "Press releases, planning and interconnection filings"],
  under_construction: ["Capacity under construction", "Capacity under construction ({u})", "Capacity being built at the end of the period.", "Capacity under construction", "Filings, construction spending, satellite"],
  employment: ["Employment", "Employment (workers)", "Workers employed by a group of establishments (Census County Business Patterns).", "Labor per unit × output, hence the scale of representative operations (L29)", "Census County Business Patterns"],
  census_shipments: ["Census shipments", "Census shipments (USD per period)", "Value shipped by a group of establishments (Economic Census, every 5 years).", "Price × shipments of a representative operation", "Economic Census"],
};

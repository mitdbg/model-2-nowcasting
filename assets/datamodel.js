// Data model explorer: draws a descriptive-datamodel/1 file (docs/datamodel.json) as a schema
// map, tables grouped and coloured by family, joins as crow's-foot lines, with a sidebar that
// shows the selected table's columns and joins. Self-contained: DataModel.render(element, model).
// Styles in datamodel.css; colours from its --dm-* variables.

const DataModel = (() => {
  const NS = "http://www.w3.org/2000/svg";
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const el = (tag, attrs = {}, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    if (parent) parent.appendChild(e);
    return e;
  };
  const BH = 28, GY = 10, HD = 34, PAD = 16, GAP = 16;

  // Families sit side by side, `slots` to a row, in the file's order; a family with more than
  // 12 tables takes a whole row. Tables fill each family's grid in the file's order.
  function layout(model, slots) {
    const W = slots === 3 ? 1140 : 760, half = (W - 32 - (slots - 1) * GAP) / slots;
    const regions = [], boxes = new Map();
    let y = 16, row = [];
    const close = () => {
      if (!row.length) return;
      const h = Math.max(...row.map((g) => g.h));
      row.forEach((g) => { g.h = h; });
      y += h + GAP; row = [];
    };
    for (const f of model.families) {
      const n = model.tables.filter((t) => t.family === f.id).length;
      const full = n > 12, nc = full ? 2 * slots : 2;
      const h = HD + Math.max(1, Math.ceil(n / nc)) * (BH + GY) + 6;
      if (full) close();
      const g = { f, nc, h, y, x: 16 + (full ? 0 : row.length * (half + GAP)), w: full ? W - 32 : half };
      regions.push(g);
      if (full) { y += h + GAP; } else { row.push(g); if (row.length === slots) close(); }
    }
    close();
    for (const g of regions) {
      const cw = (g.w - 2 * PAD - (g.nc - 1) * GAP) / g.nc;
      model.tables.filter((t) => t.family === g.f.id).forEach((t, i) => {
        boxes.set(t.id, { x: g.x + PAD + (i % g.nc) * (cw + GAP), y: g.y + HD + Math.floor(i / g.nc) * (BH + GY), w: cw, h: BH });
      });
    }
    return { W, H: y - GAP + 16, regions, boxes };
  }

  // Where a line leaves box p towards box o, and the outward direction there.
  const end = (p, o) => {
    const cx = p.x + p.w / 2, cy = p.y + p.h / 2, dx = o.x + o.w / 2 - cx, dy = o.y + o.h / 2 - cy;
    return Math.abs(dx) * p.h > Math.abs(dy) * p.w
      ? { x: dx > 0 ? p.x + p.w : p.x, y: cy, dx: Math.sign(dx), dy: 0 }
      : { x: cx, y: dy > 0 ? p.y + p.h : p.y, dx: 0, dy: Math.sign(dy) };
  };
  // The join's curve, a crow's foot at the referencing ("many") end and a bar at the "one" end.
  const joinPath = (a, b) => {
    const p = end(a, b), s = end(b, a), k = 40, m = 10, w = 5;
    return `M${p.x} ${p.y}C${p.x + p.dx * k} ${p.y + p.dy * k} ${s.x + s.dx * k} ${s.y + s.dy * k} ${s.x} ${s.y}`
      + `M${p.x - p.dy * w} ${p.y + p.dx * w}L${p.x + p.dx * m} ${p.y + p.dy * m}L${p.x + p.dy * w} ${p.y - p.dx * w}`
      + `M${s.x + s.dx * 6 - s.dy * w} ${s.y + s.dy * 6 + s.dx * w}L${s.x + s.dx * 6 + s.dy * w} ${s.y + s.dy * 6 - s.dx * w}`;
  };

  function render(root, model, opts = {}) {
    const famIdx = new Map(model.families.map((f, i) => [f.id, f.color >= 1 && f.color <= 8 ? f.color : i % 8 + 1]));
    const hue = (fid) => `var(--dm-${famIdx.get(fid)})`;
    const tables = new Map(model.tables.map((t) => [t.id, t]));
    const levels = new Map((model.enforcement_levels || []).map((l) => [l.id, l]));
    const rels = model.relationships.map((r) => ({ from: r.from.table, cols: r.from.columns || "", to: r.to.table,
      level: levels.get(r.enforcement)?.label || r.enforcement || "", note: r.note || "" }));
    let sel = opts.selected && tables.has(opts.selected) ? opts.selected : "", query = "", others = true, view = null, L = null;

    root.classList.add("dm");
    root.innerHTML = `
      <div class="dm-tools">
        <input type="search" class="dm-q" placeholder="Find a table or column" aria-label="Find a table or column">
        <button type="button" data-z="all">Show all</button><button type="button" data-z="in">Zoom in</button>
        <button type="button" data-z="out">Zoom out</button><button type="button" data-z="sel" hidden>Zoom to selection</button>
        <label><input type="checkbox" class="dm-others" checked> Other joins</label>
      </div>
      <div class="dm-legend">
        <span><svg width="30" height="16"><rect x="1" y="2" width="28" height="12" rx="3" fill="var(--dm-1)" fill-opacity="0.2" stroke="var(--dm-1)"/></svg>Box: a table (a set of rows)</span>
        <span><svg width="30" height="16"><rect x="1" y="1" width="28" height="14" rx="4" fill="var(--dm-1)" fill-opacity="0.06" stroke="var(--dm-1)" stroke-opacity="0.5"/></svg>Shaded area: a family of related tables</span>
        <span><svg width="56" height="16"><path d="M2 3L12 8L2 13M2 8H54M48 3V13" stroke="currentColor" stroke-width="1.25" fill="none"/></svg>Line: a join. Each row at the forked end points to one row at the barred end.</span>
      </div>
      <div class="dm-body"><aside class="dm-side"></aside><div class="dm-map"><svg role="img" aria-label="Tables grouped by family, with their joins"></svg></div></div>`;
    const svg = root.querySelector(".dm-map svg"), side = root.querySelector(".dm-side"), zsel = root.querySelector('[data-z="sel"]');

    const setView = (v) => { view = v; const c = v || { x: 0, y: 0, w: L.W, h: L.H }; svg.setAttribute("viewBox", `${c.x} ${c.y} ${c.w} ${c.h}`); };
    const fit = (b) => {
      let w = b.w + 48, h = b.h + 48;
      if (w / h > L.W / L.H) h = w * L.H / L.W; else w = h * L.W / L.H;
      w = Math.min(w, L.W); h = Math.min(h, L.H);
      setView({ x: b.x + b.w / 2 - w / 2, y: b.y + b.h / 2 - h / 2, w, h });
    };
    const zoom = (k, cx, cy) => {
      const v = view || { x: 0, y: 0, w: L.W, h: L.H };
      const w = Math.min(L.W, v.w * k), h = Math.min(L.H, v.h * k);
      cx ??= v.x + v.w / 2; cy ??= v.y + v.h / 2;
      setView({ x: cx - (cx - v.x) * w / v.w, y: cy - (cy - v.y) * h / v.h, w, h });
    };
    const neighbours = () => new Set(sel ? [sel, ...rels.filter((r) => r.from === sel || r.to === sel).flatMap((r) => [r.from, r.to])] : []);
    const hits = () => {
      const q = query.trim().toLowerCase();
      return q ? new Set(model.tables.filter((t) => (t.name || t.id).toLowerCase().includes(q)
        || (t.columns || []).some((c) => c.name.toLowerCase().includes(q))).map((t) => t.id)) : null;
    };

    function draw() {
      const slots = root.clientWidth >= 1000 ? 3 : 2;
      if (L && L.slots === slots) return;
      L = { ...layout(model, slots), slots };
      svg.innerHTML = "";
      svg.style.aspectRatio = `${L.W} / ${L.H}`;
      setView(null);
      el("rect", { x: -L.W, y: -L.H, width: 3 * L.W, height: 3 * L.H, fill: "transparent", class: "dm-bg" }, svg);
      for (const g of L.regions) {
        const gr = el("g", { class: "dm-family", "data-f": g.f.id }, svg);
        el("rect", { x: g.x, y: g.y, width: g.w, height: g.h, rx: 10, fill: hue(g.f.id), "fill-opacity": 0.06, stroke: hue(g.f.id), "stroke-opacity": 0.5 }, gr);
        const t = el("text", { x: g.x + PAD, y: g.y + 22, class: "dm-fname" }, gr);
        t.textContent = g.f.name;
        el("title", {}, t).textContent = g.f.description || "";
      }
      const joins = el("g", { class: "dm-joins" }, svg);
      rels.forEach((r, i) => {
        const a = L.boxes.get(r.from), b = L.boxes.get(r.to);
        if (!a || !b) return;
        const p = el("path", { d: joinPath(a, b), "data-i": i }, joins);
        el("title", {}, p).textContent = `${r.from} (${r.cols}) → ${r.to}${r.level ? ": " + r.level : ""}${r.note ? ". " + r.note : ""}`;
      });
      for (const t of model.tables) {
        const b = L.boxes.get(t.id), gr = el("g", { class: "dm-table", "data-t": t.id }, svg);
        el("rect", { x: b.x, y: b.y, width: b.w, height: b.h, rx: 6, fill: hue(t.family), stroke: hue(t.family) }, gr);
        const name = t.name || t.id, n = Math.floor((b.w - 10) / 6);
        const tx = el("text", { x: b.x + b.w / 2, y: b.y + b.h / 2 + 4, "text-anchor": "middle" }, gr);
        tx.textContent = name.length > n ? name.slice(0, n - 1) + "…" : name;
        el("title", {}, gr).textContent = `${name}: ${t.description || ""}`;
      }
      update();
    }

    function update() {
      const nb = neighbours(), hit = hits();
      svg.querySelectorAll(".dm-table").forEach((g) => {
        const id = g.dataset.t;
        g.classList.toggle("on", id === sel);
        g.classList.toggle("found", !!hit && hit.has(id));
        g.classList.toggle("dim", (sel && !nb.has(id)) || (!!hit && !hit.has(id)));
      });
      svg.querySelectorAll(".dm-joins path").forEach((p) => {
        const r = rels[+p.dataset.i], on = sel && (r.from === sel || r.to === sel);
        p.classList.toggle("on", !!on);
        p.classList.toggle("off", !on && (!others || !!sel));
        p.style.display = !on && !others ? "none" : "";
      });
      zsel.hidden = !sel;
      side.innerHTML = sel ? detail(tables.get(sel)) : overview();
    }

    const overview = () => `<p class="dm-help">Click a table to see its columns and joins here. Click a family name to zoom to it; drag the map to move it, and pinch or Ctrl-scroll to zoom.</p>`
      + model.families.map((f) => `<div class="dm-fam"><i style="background:${hue(f.id)}"></i>
          <button type="button" class="dm-link dm-famlink" data-f="${esc(f.id)}">${esc(f.name)}</button>
          <span>${esc(f.description)}</span></div>`).join("");

    function detail(t) {
      const f = model.families.find((x) => x.id === t.family);
      const cols = t.columns || [], nkey = cols.filter((c) => c.key).length;
      const link = (id, label) => `<button type="button" class="dm-link" data-t="${esc(id)}">${esc(label ?? id)}</button>`;
      const mine = rels.filter((r) => r.from === t.id || r.to === t.id);
      return `<div class="dm-detail" style="border-color:${hue(t.family)}">
        <div class="dm-head"><b>${esc(t.name || t.id)}</b><span class="muted">${esc(f?.name)}</span>
          <button type="button" class="dm-close" data-t="">Close</button></div>
        <p>${esc(t.description)}</p>
        <p class="dm-kv"><span class="muted">Key</span> <code>${esc(t.key)}</code></p>
        ${t.constraints ? `<p>${esc(t.constraints)}</p>` : ""}
        ${f?.note ? `<p class="muted">${esc(f.note)}</p>` : ""}
        ${t.unclear ? `<p class="note">${esc(t.unclear)}</p>` : ""}
        <h3>Columns</h3>
        <ul class="dm-cols">${cols.map((c) => `<li><div><code>${esc(c.name)}</code>
          ${c.key ? `<span class="dm-key" style="border-color:${hue(t.family)}">${nkey === 1 ? "key" : "part of key"}</span>` : ""}
          <span class="muted">${esc(c.type)}</span>${c.references ? " → " + link(c.references) : ""}</div>
          ${c.description ? `<div class="muted">${esc(c.description)}</div>` : ""}</li>`).join("")}</ul>
        <h3>Joins</h3>
        <ul class="dm-joinlist">${mine.map((r) => `<li>${r.from === t.id ? `(${esc(r.cols)}) → ${link(r.to)}` : `${link(r.from)} (${esc(r.cols)}) → here`}
          <div class="muted">${esc(r.level)}${r.note ? "; " + esc(r.note) : ""}</div></li>`).join("") || "<li class=\"muted\">none</li>"}</ul>
      </div>`;
    }

    const select = (id, toggle = false) => {
      sel = toggle && id === sel ? "" : id;
      update();
      opts.onSelect?.(sel);
    };

    // Events: clicks on tables, family names, sidebar links; drag to pan; Ctrl/pinch wheel to zoom.
    let drag = null, moved = false;
    const toUnits = (e) => {
      const r = svg.getBoundingClientRect(), v = view || { x: 0, y: 0, w: L.W, h: L.H };
      return { x: v.x + (e.clientX - r.left) * v.w / r.width, y: v.y + (e.clientY - r.top) * v.h / r.height, k: v.w / r.width };
    };
    svg.addEventListener("pointerdown", (e) => { moved = false; drag = { x: e.clientX, y: e.clientY, v: view || { x: 0, y: 0, w: L.W, h: L.H }, k: toUnits(e).k }; });
    svg.addEventListener("pointermove", (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!moved && Math.abs(dx) + Math.abs(dy) < 5) return;
      if (!moved) { moved = true; svg.setPointerCapture(e.pointerId); svg.classList.add("dragging"); }
      setView({ ...drag.v, x: drag.v.x - dx * drag.k, y: drag.v.y - dy * drag.k });
    });
    const stop = () => { drag = null; svg.classList.remove("dragging"); };
    svg.addEventListener("pointerup", stop);
    svg.addEventListener("pointercancel", stop);
    svg.addEventListener("wheel", (e) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const u = toUnits(e);
      zoom(Math.exp(e.deltaY * 0.01), u.x, u.y);
    }, { passive: false });
    svg.addEventListener("click", (e) => {
      if (moved) return;
      const t = e.target.closest(".dm-table"), f = e.target.closest(".dm-fname");
      if (t) select(t.dataset.t, true);
      else if (f) fit(L.regions.find((g) => g.f.id === f.parentNode.dataset.f));
      else if (sel) select("");
    });
    side.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      if (b.classList.contains("dm-famlink")) fit(L.regions.find((g) => g.f.id === b.dataset.f));
      else if (b.dataset.t !== undefined) select(b.dataset.t);
    });
    root.querySelector(".dm-tools").addEventListener("click", (e) => {
      const z = e.target.closest("button")?.dataset.z;
      if (z === "all") setView(null);
      else if (z === "in") zoom(0.7);
      else if (z === "out") zoom(1 / 0.7);
      else if (z === "sel" && sel) {
        const bs = [...neighbours()].map((id) => L.boxes.get(id)).filter(Boolean);
        const x = Math.min(...bs.map((b) => b.x)), y = Math.min(...bs.map((b) => b.y));
        fit({ x, y, w: Math.max(...bs.map((b) => b.x + b.w)) - x, h: Math.max(...bs.map((b) => b.y + b.h)) - y });
      }
    });
    root.querySelector(".dm-q").addEventListener("input", (e) => { query = e.target.value; update(); });
    root.querySelector(".dm-others").addEventListener("change", (e) => { others = e.target.checked; update(); });
    new ResizeObserver(() => draw()).observe(root);
    draw();
    return { select };
  }

  return { render };
})();

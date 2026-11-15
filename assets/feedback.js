/* Feedback on anything on the site. Every chart, equation, table row, page title and section heading carries a
   small ✎; clicking it opens a box for a note, sent with exactly what it is about: the forecast, the page, the kind
   of thing, its id, and the row's cells or the section it sits in. Elements can say what they are with
   data-fb='{"kind": ..., "id": ..., "label": ..., "context": {...}}'; M2.chart takes the same as opts.fb.
   The notes go to the hosted Model 2 server (POST /feedback), the same place as the MCP tool send_feedback.
   Senders sign in with Google; the server then gives this browser a key, kept here, that goes with each note.
   M2.fb (sign-in, keys, the server's routes) is shared with the AI Access page, which makes keys for agents. */
(() => {
  if (M2.fb) return;   // loaded once, whether by site.js or by a page itself
  const URL_ = window.M2_FEEDBACK_URL || "https://mikecafarella--model2-mcp.us-east.modal.run/feedback";

  // ---------- who is sending: Google sign-in, and the key the server gives this browser ----------
  M2.fb = (() => {
    let mem = null, cfg = null, gis = null, waiting = null;
    const api = async (path, body) => {
      const r = await fetch(URL_ + path, body === undefined ? {} : { method: "POST", headers: { "Content-Type": "text/plain" }, body: JSON.stringify(body) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) { const e = new Error(j.error || `the feedback server answered ${r.status}`); e.status = r.status; throw e; }
      return j;
    };
    const session = () => {
      let s = mem;
      try { s = JSON.parse(localStorage.getItem("m2.fb") || "null") || mem; } catch (e) { /* storage blocked: this page only */ }
      return s && (!s.expires_utc || new Date(s.expires_utc) > new Date()) ? s : null;
    };
    const keep = (s) => { mem = s; try { s ? localStorage.setItem("m2.fb", JSON.stringify(s)) : localStorage.removeItem("m2.fb"); } catch (e) { /* ignore */ } };
    const config = async () => (cfg ||= api("/config").catch(() => ({ google_client_id: null })));
    const loadGis = () => (gis ||= new Promise((ok, bad) => {
      const sc = document.createElement("script");
      sc.src = "https://accounts.google.com/gsi/client"; sc.async = true;
      sc.onload = ok; sc.onerror = () => { gis = null; bad(new Error("Google sign-in could not load")); };
      document.head.appendChild(sc);
    }));
    let inited = false;
    // draws Google's button into `el`; resolves with the session once the person has signed in
    async function signIn(el) {
      const c = await config();
      if (!c.google_client_id) throw new Error("Feedback sign-in is not set up yet.");
      await loadGis();
      if (!inited) {
        google.accounts.id.initialize({ client_id: c.google_client_id, auto_select: true, callback: async (resp) => {
          const w = waiting; waiting = null;
          try {
            const k = await api("/signin", { credential: resp.credential, kind: "browser" });
            keep({ key: k.key, email: k.email, name: k.name, expires_utc: k.expires_utc });
            w?.ok(session());
          } catch (e) { w?.bad(e); }
        } });
        inited = true;
      }
      const theme = matchMedia("(prefers-color-scheme: dark)").matches ? "filled_black" : "outline";
      google.accounts.id.renderButton(el, { type: "standard", theme, size: "medium", text: "signin_with", shape: "rectangular" });
      return new Promise((ok, bad) => { waiting = { ok, bad }; });
    }
    async function signOut() {
      const s = session();
      keep(null);
      try { google.accounts.id.disableAutoSelect(); } catch (e) { /* not loaded */ }
      if (s) await api("/keys", { key: s.key, action: "signout" }).catch(() => {});
    }
    return { api, session, keep, config, signIn, signOut };
  })();
  const KIND_LABEL = { page: "this page", section: "section", text: "text", table: "table", row: "row", chart: "chart",
    sector: "sector", series: "series", official_statistic: "official statistic", entity: "entity", state: "hidden state",
    observation: "observations", grouping: "grouping", parameter: "parameter", equation: "equation", problem: "problem",
    fix: "fix", test: "test" };
  // what carries a ✎: charts (they say what they show), equations, table rows, the page title, section headings
  const OBJ = "[data-fb], .card:has(svg.chart), .eqcard, tr, h1, h2";
  const SKIP = ".fb-pop, .keys, .infotip, .tip";
  const txt = (el) => {   // an element's text as read, without the hidden explanations of its ⓘ marks
    if (!el) return "";
    const c = el.cloneNode(true);
    c.querySelectorAll(".infowrap, .infotip, .info, .def, .fb-hp, .fb-pen, .fb-cell, svg").forEach((x) => x.remove());
    return c.textContent;
  };
  const clip = (s, n) => { s = (s || "").replace(/\s+/g, " ").trim(); return s.length > n ? s.slice(0, n - 1) + "…" : s; };
  const page = () => location.pathname.split("/").pop() + location.search;

  function sectionOf(el) {   // the nearest h2 above the element
    const hs = [...document.querySelectorAll("main h2")];
    let best = null;
    for (const h of hs) if (h.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING || h.contains(el)) best = h;
    return best ? clip(txt(best), 120) : null;
  }

  function linked(el) {   // what the element's links point at: an entity, a sector, a fix
    const out = {};
    el.querySelectorAll("a[href]").forEach((a) => {
      const u = new URL(a.getAttribute("href"), location.href), p = u.pathname.split("/").pop();
      if (p === "entity.html" && u.searchParams.get("e")) out.entity ??= u.searchParams.get("e");
      if (p === "sector.html" && u.searchParams.get("s")) out.sector ??= u.searchParams.get("s");
      if (u.hash.startsWith("#fix-")) out.fix ??= u.hash.slice(5);
    });
    return out;
  }

  // what the note is about, as the server stores it
  function describe(el) {
    let fb = {};
    try { fb = el.dataset.fb ? JSON.parse(el.dataset.fb) : {}; } catch (e) { /* ignore */ }
    const ctx = { ...(fb.context || {}) }, sec = sectionOf(el);
    if (sec) ctx.section = sec;
    let kind = fb.kind, id = fb.id, label = fb.label;
    const head = el.querySelector?.("h3, h4");
    if (!kind && el.matches(".eqcard")) {
      kind = "equation"; id = clip(txt(el.querySelector(".tag")), 40) || null;
      label = clip([...head.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join(""), 160);
      ctx.equation = clip(txt(el.querySelector(".eq")), 600);
    } else if (!kind && el.matches(".card")) {
      kind = el.querySelector("svg.chart") ? "chart" : "section"; label = clip(txt(head), 160);
    } else if (!kind && el.matches("tr")) {
      const own = (tr) => [...(tr?.children || [])].filter((c) => !c.matches(".fb-cell"));
      const heads = own([...el.closest("table").querySelectorAll("tr")].find((r) => !r.querySelector("td"))).map((c) => clip(txt(c), 40));
      const cells = own(el).map((c) => clip(txt(c), 120));
      ctx.row = Object.fromEntries(cells.map((c, i) => [heads[i] || `col${i + 1}`, c]));
      const l = linked(el);
      if (l.entity) { kind = "entity"; id = l.entity; }
      else if (l.fix) { kind = "fix"; id = l.fix; }
      else if (l.sector) { kind = "sector"; id = l.sector; }
      else kind = "row";
      label = cells.slice(0, 2).filter(Boolean).join(" · ");
    } else if (!kind && el.matches("h1, h2, h3, h4")) {
      kind = el.matches("h1") ? "page" : "section"; label = clip(txt(el), 160);
    } else if (!kind) {
      kind = el.matches("figure") ? "chart" : "text"; label = clip(txt(el), 160);
    }
    if (!label) label = clip(txt(head) || txt(el), 160);
    if (!ctx.row) ctx.text = clip(txt(el), 300);
    const q = new URLSearchParams(location.search);
    if (q.get("s")) ctx.page_sector = q.get("s");
    if (q.get("e")) ctx.page_entity = q.get("e");
    return { kind, id: id ?? null, label, ctx };
  }

  // ---------- a ✎ on every object, kept up as pages draw and redraw their charts and tables ----------
  const pen = (el) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "fb-pen"; b.textContent = "✎";
    b.title = "Feedback on this"; b.setAttribute("aria-label", "Send feedback on this");
    b.addEventListener("click", (ev) => { ev.preventDefault(); ev.stopPropagation(); open(el); });
    return b;
  };
  const span = (tr) => [...tr.children].reduce((n, c) => n + (c.matches(".fb-cell") ? 0 : c.colSpan || 1), 0);
  function mark(el) {
    el.dataset.fbp = "";
    if (el.matches("tr")) {   // a column of its own at the end of the table; header rows get an empty cell
      const head = [...el.closest("table").querySelectorAll("tr")].find((r) => !r.querySelector("td"));
      const data = !!el.querySelector("td");
      if (data && head && span(el) < span(head)) return;   // a row spanning the table (a note, an opened detail): none
      const c = document.createElement(data ? "td" : "th");
      c.className = "fb-cell";
      if (data) c.appendChild(pen(el));
      el.appendChild(c);
    } else if (el.matches("h1, h2")) {
      el.appendChild(pen(el));
    } else {   // a chart or an equation: beside its heading, else at its top right
      const h = el.querySelector("h3, h4");
      if (h) h.appendChild(pen(el));
      else { el.classList.add("fb-box"); el.appendChild(pen(el)).classList.add("fb-corner"); }
    }
  }
  function scan() {
    document.querySelectorAll("main :is(" + OBJ + "):not([data-fbp])").forEach((el) => {
      if (el.closest(SKIP) || el.parentElement.closest("[data-fb], .eqcard, .card:has(svg.chart)") && !el.matches("tr")) return;
      if (el.matches("h1, h2") && !el.textContent.trim()) return;
      mark(el);
    });
  }
  let queued = false;
  new MutationObserver(() => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; scan(); }); } })
    .observe(document.querySelector("main") || document.body, { childList: true, subtree: true });

  // ---------- the box ----------
  let pop = null;
  let cur = null;
  function close() { pop?.remove(); pop = null; cur?.classList.remove("fb-hl"); cur = null; }

  async function open(el) {
    close();
    const d = describe(el);
    if (el.matches("h1")) { d.kind = "page"; d.label = clip(txt(el) || document.title, 160); }
    cur = el; el.classList.add("fb-hl");
    pop = document.createElement("div");
    pop.className = "fb-pop"; pop.setAttribute("role", "dialog"); pop.setAttribute("aria-label", "Send feedback");
    document.body.appendChild(pop);
    const r = el.getBoundingClientRect(), w = Math.min(380, innerWidth - 24);
    pop.style.width = `${w}px`;
    pop.style.left = `${scrollX + Math.max(12, Math.min(r.right - w, innerWidth - w - 12))}px`;
    pop.style.top = `${scrollY + Math.min(r.top + 28, innerHeight - 330) }px`;
    if (pop.getBoundingClientRect().top < 60) pop.style.top = `${scrollY + 60}px`;
    const about = `<div class="fb-about"><span class="fb-k">Feedback on ${M2.esc(KIND_LABEL[d.kind] || d.kind)}${d.id ? ` <code>${M2.esc(d.id)}</code>` : ""}</span>
        <span class="fb-l">${M2.esc(d.label || "")}</span></div>`;
    let draft = "";

    async function askSignIn(why) {
      const box = pop;
      box.innerHTML = `${about}
        <p class="fb-why">${why ? `<span class="fb-msg">${M2.esc(why)}</span> ` : ""}Sign in with Google to send feedback. Your note is sent with your
          Google name and email, so the team knows who wrote it.</p>
        <div class="fb-gsi"></div>
        <div class="fb-actions"><span class="fb-msg" role="status"></span><button type="button" class="fb-cancel">Cancel</button></div>`;
      box.querySelector(".fb-cancel").addEventListener("click", close);
      try {
        await M2.fb.signIn(box.querySelector(".fb-gsi"));
        if (pop === box) form();
      } catch (e) {
        if (pop === box) box.querySelector(".fb-actions .fb-msg").textContent = e.message;
      }
    }

    function form() {
      const me = M2.fb.session();
      pop.innerHTML = `${about}
        <form>
          <textarea name="note" rows="5" maxlength="4000" required placeholder="What should the Model 2 team know about this?"></textarea>
          <input name="website" tabindex="-1" autocomplete="off" aria-hidden="true" class="fb-hp">
          <div class="fb-actions"><span class="fb-msg" role="status"></span><button type="button" class="fb-cancel">Cancel</button><button type="submit">Send</button></div>
        </form>
        <p class="fb-note">From ${M2.esc(me.name || me.email)} <span class="fb-email">(${M2.esc(me.email)})</span> · <button type="button" class="fb-out">Sign out</button><br>
          Sent with the page, the forecast and what you clicked on. Notes are read by the Model 2 team.</p>`;
      const f = pop.querySelector("form"), msg = pop.querySelector(".fb-msg");
      f.note.value = draft;
      f.note.focus();
      f.note.addEventListener("input", () => { draft = f.note.value; });
      pop.querySelector(".fb-cancel").addEventListener("click", close);
      pop.querySelector(".fb-out").addEventListener("click", async () => { await M2.fb.signOut(); askSignIn(); });
      f.addEventListener("submit", async (ev) => {
        ev.preventDefault();
        const send = f.querySelector("[type=submit]");
        send.disabled = true; msg.textContent = "Sending…";
        let forecast = null, world = null;
        try {
          const sid = await M2.currentSet(), s = (await M2.sets()).sets.find((x) => x.id === sid);
          forecast = s?.forecast || sid; world = s?.world_catalog_id || null;
        } catch (e) { /* send without it */ }
        const body = { key: M2.fb.session()?.key, note: f.note.value, website: f.website.value, channel: "site",
          forecast_id: forecast, target_kind: d.kind, target_id: d.id, target_month: null,
          target_label: d.label, page: page(), context: { ...d.ctx, world, title: document.title } };
        try {
          await M2.fb.api("", body);
          pop.innerHTML = `<p class="fb-done">Thank you. Your note was sent.</p>`;
          setTimeout(close, 1800);
        } catch (e) {
          if (e.status === 401) { M2.fb.keep(null); askSignIn("Please sign in again."); return; }
          msg.textContent = `Not sent: ${e.message}`; send.disabled = false;
        }
      });
    }

    M2.fb.session() ? form() : askSignIn();
  }
  document.addEventListener("pointerdown", (ev) => { if (pop && !pop.contains(ev.target) && !ev.target.closest?.(".fb-pen")) close(); });
  document.addEventListener("keydown", (ev) => { if (ev.key === "Escape" && pop) close(); });
  scan();
})();

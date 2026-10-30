/* ====== EDIT THESE: your details ====== */
const CONTACT_EMAIL = "osekaaowolabi@gmail.com";
const CV_URL = "https://github.com/Oseka/Owolabi-Praise-Bukolami-CV/raw/main/OWOLABI_PRAISE_BUKOLAMI_CV.pdf";
const SOCIALS = [
  ["Email: osekaaowolabi@gmail.com", "mailto:osekaaowolabi@gmail.com"],
  ["LinkedIn", "https://www.linkedin.com/in/praise-owolabi-aa95802b1"]
];   // empty links are hidden; add more here later if you want them shown
const PROJECTS = [
  { title: "Career Navigation Assistant", kind: "Final-year project", task: "Final-year project", emoji: "🧭", g: ["#0f766e", "#6c5ce7"], image: "",
    desc: "A career guidance platform that helps Computer Science students explore technology careers across nine areas, with transparent, rule-based recommendations, skills-gap insight and learning roadmaps.",
    tags: ["React", "Flask", "Python", "MySQL", "REST APIs", "Git & GitHub"],
    live: "", repo: "https://github.com/Oseka/Career-Navigation-Assistant-CNA-", repo2: "https://github.com/Oseka/career-navigation-assistant-final-year-project",
    challenge: "Students often struggle to move from 'which technology career suits me?' to a clear, explainable answer and a plan to get there.",
    approach: "Worked documentation-first: requirements, architecture, database design and assessment and recommendation methodology are written down in the repository, then built in planned increments. Recommendations come from a deterministic, weighted, rule-based model that can explain every result, not from a black box.",
    highlights: ["Assesses interests across nine areas: software development, AI/ML, data, cloud, cybersecurity, networking, databases, UI/UX and quality assurance", "Explanations of why each career is recommended", "Foundation complete: backend, frontend, database schema and seed content, with features following an increment plan", "Original final-year version also available on GitHub"] },
  { title: "Folio", kind: "Analytics dashboard", task: "Task 6", emoji: "📊", g: ["#6c5ce7", "#00b894"], image: "images/folio-1.jpg", shots: ["images/folio-1.jpg", "images/folio-2.jpg", "images/folio-3.jpg", "images/folio-4.jpg", "images/folio-5.jpg"],
    desc: "Turns any GitHub profile into a live analytics dashboard: languages, top repositories, growth over time, recent activity and head-to-head comparisons.",
    tags: ["React", "Vite", "Recharts", "REST APIs", "State management", "Responsive design", "Git & GitHub"],
    live: "https://oseka.github.io/folio/", repo: "https://github.com/Oseka/folio",
    challenge: "Make a dashboard that stays fast and readable with very different data, from brand new accounts to profiles with hundreds of thousands of stars.",
    approach: "Split the UI into reusable tiles, kept all app state in one reducer with Context, and moved fetching into a custom hook that cancels stale requests. Big numbers switch to a compact form and scale to fit.",
    highlights: ["Reducer-based state and a data hook", "Language donut that filters the repository explorer", "Light and dark themes", "Automatic deployment with GitHub Actions"] },
  { title: "Atmos Station", kind: "Weather observatory", task: "Task 4", emoji: "🌦️", g: ["#1b66c9", "#7cc4ff"], image: "images/atmos-1.jpg", shots: ["images/atmos-1.jpg", "images/atmos-2.jpg", "images/atmos-3.jpg", "images/atmos-4.jpg", "images/atmos-5.jpg"],
    desc: "A live weather dashboard where the sky, stars, rain, snow and lightning change to match the real conditions of the city you search.",
    tags: ["HTML", "CSS", "JavaScript", "REST APIs", "Canvas", "Local Storage", "Responsive design", "Git & GitHub"],
    live: "https://oseka.github.io/atmos-weather-station/", repo: "https://github.com/Oseka/atmos-weather-station",
    challenge: "Show weather data in a way that feels alive, while handling empty input, unknown cities, timeouts and offline use gracefully.",
    approach: "Used a free weather API with a geocoding step, wrote an async fetch layer with timeouts and clear error messages, and drew the weather effects on a canvas driven by the weather code.",
    highlights: ["Live suggestions with keyboard control", "7-day forecast and instrument gauges", "Climate cycles section on El Niño and other cycles", "Recent cities and units remembered"] },
  { title: "Nova Command", kind: "Mission-control to-do app", task: "Task 3", emoji: "🚀", g: ["#141c4a", "#ff3dac"], image: "images/nova-1.jpg", shots: ["images/nova-1.jpg", "images/nova-2.jpg", "images/nova-3.jpg"],
    desc: "A to-do app where every task is a mission to a fictional world, with crew, threat levels, live countdowns and a starfield that reacts to you.",
    tags: ["HTML", "CSS", "JavaScript", "Canvas", "Local Storage", "Responsive design", "Git & GitHub"],
    live: "https://oseka.github.io/nova-command-todo/", repo: "https://github.com/Oseka/nova-command-todo",
    challenge: "Make a simple idea (a task list) memorable without making it harder to use.",
    approach: "Kept the logic simple (add, advance, delete, filter, save) and put the creativity into the presentation: planets drawn in pure CSS, a canvas starfield with mouse parallax and a particle burst when a mission lands.",
    highlights: ["Status flow from pad to orbit to landed", "Live T-minus countdowns", "Keyboard shortcuts", "Everything saved in local storage"] },
  { title: "Clay & Cane", kind: "E-commerce storefront", task: "Task 5", emoji: "🏺", g: ["#141c4a", "#e0a21b"], image: "images/shop-1.jpg", shots: ["images/shop-1.jpg", "images/shop-2.jpg", "images/shop-3.jpg"],
    desc: "A home-goods shop with search, category and price filters, sorting and a cart drawer that remembers what you added.",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage", "Responsive design", "Git & GitHub"],
    live: "https://oseka.github.io/clay-and-cane-store/", repo: "https://github.com/Oseka/clay-and-cane-store",
    challenge: "Build a storefront with a distinct identity instead of the usual white grid of cards.",
    approach: "Designed the page like a market wall: products stand on planks, prices hang from tags and the cart opens as a paper receipt. The product cards come from a single reusable render function.",
    highlights: ["Live search with combined filters", "Persistent cart with quantity controls", "Staggered shelf layout", "Fully responsive"] },
  { title: "Golden Fork", kind: "Restaurant website", task: "Personal project", emoji: "🍽️", g: ["#b45309", "#fbbf24"], image: "",
    desc: "A modern restaurant website with an interactive food and drinks menu, online ordering for dine-in and delivery, a contact page and table reservations.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive design", "Git & GitHub"],
    live: "", repo: "https://github.com/Oseka/golden-fork-website",
    challenge: "Give customers a smooth path from browsing the menu to ordering or reserving a table, on any device.",
    approach: "Built it with HTML, CSS and JavaScript as a fully responsive, multi-feature site: a stylish homepage, an interactive menu and an ordering flow that supports both dine-in and delivery.",
    highlights: ["Interactive food and drinks menu", "Dine-in and delivery ordering", "Contact page and reservation features", "Fully responsive design"] }
];
const MORE = [
  ["Owolabi-Praise-Bukolami-CV", "HTML", "One-page CV website"], ["career-navigation-assistant-final-year-project", "TypeScript", "Original final-year submission"],
  ["e-commerce-product", "CSS", "Frontend Mentor challenge"], ["Todo-list", "JavaScript", "Frontend Mentor challenge"], ["NACOS", "JavaScript", ""], ["Padre-Gino", "JavaScript", ""],
  ["calculator", "HTML", ""], ["mole-game", "JavaScript", ""], ["Gallery", "HTML", ""], ["Dogs", "CSS", ""], ["JS-class", "JavaScript", ""], ["Todo", "JavaScript", ""], ["Dojo-Blog", "JavaScript", ""], ["Blog", "", ""]
];
const TOOLKIT = [
  ["Languages", ["JavaScript", "Python", "HTML5", "CSS3", "SQL"]], ["Frontend", ["React", "Next.js", "Tailwind CSS", "SCSS", "Responsive design"]],
  ["Backend and data", ["Flask", "Prisma", "REST APIs", "MySQL"]], ["Tools", ["Git", "GitHub", "GitLab", "VS Code", "npm"]], ["Currently exploring", ["Cloud computing", "Artificial intelligence", "Distributed systems"]]
];
/* ====================================== */

const $ = id => document.getElementById(id);
const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
document.querySelector(".stats [data-count]").dataset.count = PROJECTS.length;
const allTags = [...new Set(PROJECTS.flatMap(p => p.tags))];
const counts = Object.fromEntries(allTags.map(t => [t, PROJECTS.filter(p => p.tags.includes(t)).length]));
let active = "";

/* Theme */
const saved = (() => { try { return localStorage.getItem("pf-theme"); } catch { return null; } })();
const setTheme = t => { document.documentElement.dataset.theme = t; $("theme").textContent = t === "dark" ? "☀️" : "🌙"; $("theme").setAttribute("aria-label", `Switch to ${t === "dark" ? "light" : "dark"} theme`); try { localStorage.setItem("pf-theme", t); } catch {} };
setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
$("theme").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

/* Mobile menu + active link */
$("burger").addEventListener("click", () => { const o = $("menu").classList.toggle("open"); $("burger").setAttribute("aria-expanded", o); });
$("menu").addEventListener("click", e => { if (e.target.closest("a")) { $("menu").classList.remove("open"); $("burger").setAttribute("aria-expanded", "false"); } });
const links = [...document.querySelectorAll("#menu a")];
const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));

/* Scroll progress */
addEventListener("scroll", () => { const h = document.documentElement; $("progress").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%"; }, { passive: true });

/* Rotating role */
const roles = [["a", "software developer"], ["a", "front-end developer"], ["a", "React builder"], ["an", "API explorer"], ["a", "cloud and AI enthusiast"]];
if (!still) { let i = 0; setInterval(() => { i = (i + 1) % roles.length; $("art").textContent = roles[i][0]; $("role").textContent = roles[i][1]; }, 2200); }

/* Badge tilt */
const wrap = $("badgeWrap"), badge = $("badge");
if (!still) {
  wrap.addEventListener("pointermove", e => { if (e.pointerType === "touch") return; const r = wrap.getBoundingClientRect(); badge.style.setProperty("--ry", ((e.clientX - r.left) / r.width - .5) * 22 + "deg"); badge.style.setProperty("--rx", -((e.clientY - r.top) / r.height - .5) * 18 + "deg"); });
  wrap.addEventListener("pointerleave", () => { badge.style.setProperty("--rx", "0deg"); badge.style.setProperty("--ry", "0deg"); });
}

/* Marquee */
const words = allTags.map(t => t + " ✦ ").join("");
$("marqueeTrack").innerHTML = `<span>${esc(words)}</span><span>${esc(words)}</span>`;

/* Cursor ring */
const cur = $("cursor");
if (matchMedia("(pointer: fine)").matches && !still) {
  addEventListener("pointermove", e => { cur.classList.add("on"); cur.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; });
  document.addEventListener("pointerover", e => cur.classList.toggle("big", !!e.target.closest("a,button,.chip,.card")));
  document.addEventListener("pointerleave", () => cur.classList.remove("on"));
}

/* Reveal + counters */
const countUp = el => { const to = +el.dataset.count; if (still) { el.textContent = to; return; } const t0 = performance.now(); (function f(t) { const p = Math.min((t - t0) / 1100, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); })(t0); };
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); e.target.querySelectorAll("[data-count]").forEach(countUp); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* Projects */
function renderProjects() {
  const list = PROJECTS.filter(p => !active || p.tags.includes(active));
  $("stack").innerHTML = list.map((p, i) => `
    <article class="card" style="--i:${i};--g1:${p.g[0]};--g2:${p.g[1]}">
      <div class="cover">${p.image ? `<img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" loading="lazy">` : `<span class="emoji" aria-hidden="true">${p.emoji}</span>`}<span class="task">${esc(p.task)}</span></div>
      <div class="body">
        <p class="kind">${esc(p.kind)}</p><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
        <div class="tags">${p.tags.slice(0, 5).map(t => `<span>${esc(t)}</span>`).join("")}</div>
        <div class="links">${p.live ? `<a class="btn primary" href="${esc(p.live)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>` : ""}<a class="btn${p.live ? "" : " primary"}" href="${esc(p.repo)}" target="_blank" rel="noopener noreferrer">Code</a><button class="btn" data-case="${PROJECTS.indexOf(p)}">Case study</button></div>
      </div>
    </article>`).join("");
  $("filterNote").textContent = active ? `Showing ${list.length} project${list.length === 1 ? "" : "s"} that use ${active}.` : "";
}
function renderFilters() {
  $("filters").innerHTML = ["", ...allTags.slice(0, 10)].map(t => `<button class="chip" data-f="${esc(t)}" aria-pressed="${t === active}">${t ? esc(t) : "All"}</button>`).join("");
  $("skillGrid").innerHTML = allTags.map(t => `<button class="chip" data-s="${esc(t)}" aria-pressed="${t === active}">${esc(t)}<small>${counts[t]}</small></button>`).join("");
}
function setFilter(t, scroll) { active = active === t ? "" : t; renderFilters(); renderProjects(); if (scroll) $("work").scrollIntoView({ behavior: still ? "auto" : "smooth" }); }
$("filters").addEventListener("click", e => { const b = e.target.closest("[data-f]"); if (b) { active = ""; setFilter(b.dataset.f === "" ? "" : b.dataset.f, false); } });
$("skillGrid").addEventListener("click", e => { const b = e.target.closest("[data-s]"); if (b) setFilter(b.dataset.s, true); });
renderFilters(); renderProjects();

/* Case study modal */
const modal = $("modal");
$("stack").addEventListener("click", e => {
  const b = e.target.closest("[data-case]"); if (!b) return; const p = PROJECTS[+b.dataset.case];
  $("mBody").innerHTML = `<p class="kind">${esc(p.task)} · ${esc(p.kind)}</p><h3 id="mTitle">${esc(p.title)}</h3><p>${esc(p.desc)}</p>
    <h4>The challenge</h4><p>${esc(p.challenge)}</p><h4>My approach</h4><p>${esc(p.approach)}</p>
    <h4>Highlights</h4><ul>${p.highlights.map(h => `<li>${esc(h)}</li>`).join("")}</ul>
    ${p.shots ? `<h4>Screenshots</h4><div class="shots">${p.shots.map((s, i) => `<a href="${esc(s)}" target="_blank" rel="noopener noreferrer"><img src="${esc(s)}" alt="${esc(p.title)} screenshot ${i + 1}" loading="lazy"></a>`).join("")}</div>` : ""}
    <div class="tags" style="margin:1rem 0">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>
    <div class="links">${p.live ? `<a class="btn primary" href="${esc(p.live)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>` : ""}<a class="btn${p.live ? "" : " primary"}" href="${esc(p.repo)}" target="_blank" rel="noopener noreferrer">Code</a>${p.repo2 ? `<a class="btn" href="${esc(p.repo2)}" target="_blank" rel="noopener noreferrer">Original version</a>` : ""}</div>`;
  modal.showModal();
});
$("mClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

/* More repositories, toolkit and CV */
$("more").innerHTML = MORE.map(m => `<a class="chip" href="https://github.com/Oseka/${esc(m[0])}" target="_blank" rel="noopener noreferrer" title="${esc(m[2] || m[0])}">${esc(m[0])}${m[1] ? `<small>${esc(m[1])}</small>` : ""}</a>`).join("") +
  `<a class="chip" href="https://github.com/Oseka?tab=repositories" target="_blank" rel="noopener noreferrer">All repositories ↗</a>`;
$("toolkit").innerHTML = TOOLKIT.map(g => `<p class="sub reveal in">${esc(g[0])}</p><div class="skill-grid">${g[1].map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>`).join("");
["cvBtn", "cvBtn2"].forEach(id => { const a = $(id); if (CV_URL) a.href = CV_URL; else a.hidden = true; });

/* Contact */
$("socials").innerHTML = SOCIALS.filter(s => s[1]).map(s => { const web = /^https?:/.test(s[1]); return `<li><a href="${esc(s[1])}"${web ? ' target="_blank" rel="noopener noreferrer"' : ""}>${esc(s[0])}${web ? " ↗" : ""}</a></li>`; }).join("");
const configured = !/example\.com$/i.test(CONTACT_EMAIL);
$("copyMail").addEventListener("click", async () => {
  const st = $("status");
  if (!configured) { st.className = "status bad"; st.textContent = "Add your email in app.js first."; return; }
  try { await navigator.clipboard.writeText(CONTACT_EMAIL); st.className = "status ok"; st.textContent = "Email copied to your clipboard."; } catch { st.className = "status"; st.textContent = CONTACT_EMAIL; }
});
const f = { name: $("name"), email: $("email"), msg: $("msg") };
const rules = {
  name: v => v.trim().length >= 2 ? "" : "Please enter your name.",
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Enter a valid email address.",
  msg: v => v.trim().length >= 10 ? "" : "Write at least 10 characters."
};
const errId = { name: "eName", email: "eEmail", msg: "eMsg" };
function check(k) { const m = rules[k](f[k].value); $(errId[k]).textContent = m; f[k].setAttribute("aria-invalid", !!m); return !m; }
Object.keys(f).forEach(k => { f[k].addEventListener("blur", () => check(k)); f[k].addEventListener("input", () => { if (f[k].getAttribute("aria-invalid") === "true") check(k); if (k === "msg") $("count").textContent = `${f.msg.value.length} / 600`; }); });
$("form").addEventListener("submit", e => {
  e.preventDefault(); const st = $("status"); st.className = "status";
  const ok = Object.keys(f).map(check).every(Boolean);
  if (!ok) { st.className = "status bad"; st.textContent = "Please fix the highlighted fields."; return; }
  if (!configured) { st.className = "status bad"; st.textContent = "This form is not connected to an inbox yet. Add your email in app.js."; return; }
  const subject = encodeURIComponent("Portfolio message from " + f.name.value.trim());
  const body = encodeURIComponent(f.msg.value.trim() + "\n\n" + f.name.value.trim() + " (" + f.email.value.trim() + ")");
  location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  st.className = "status ok"; st.textContent = "Thanks! Your email app should open with the message ready to send.";
  $("form").reset(); $("count").textContent = "0 / 600";
});
$("year").textContent = new Date().getFullYear();

/* Profile photo: if images/profile.jpg is missing, quietly fall back to the initials */
const photo = $("photo");
if (photo) { const drop = () => photo.remove(); photo.addEventListener("error", drop); if (photo.complete && photo.naturalWidth === 0) drop(); }

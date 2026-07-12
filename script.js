/* ============================================================
   Jericho Guanga — portfolio
   mascot engine (crab · lion · bear) · terminal · particles
   ============================================================ */

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ============================================================
   1. THE MASCOTS — pixel-map SVG generators
   ============================================================ */

const MASCOTS = {
  crab: {
    emoji: "🦀",
    word: "crab",
    name: "snips",
    viewBox: "0 0 24 18",
    colors: {
      O: "#6b2413", B: "#e8603c", D: "#c24427", L: "#f5936b",
      W: "#fff6ec", P: "#221410", K: "#f9a179",
    },
    map: [
      "........OO....OO........",
      ".......OWWO..OWWO.......",
      ".......OWPO..OWPO.......",
      ".......OWWO..OWWO.......",
      "........OO....OO........",
      ".........O....O.........",
      ".OO......OOOOOO......OO.",
      "OBBBO...OBBBBBBO...OBBBO",
      "OBBBO..OBLLBBLLBO..OBBBO",
      ".OBBO.OBBBBBBBBBBO.OBBO.",
      "..OO..OBBBBBBBBBBO..OO..",
      "......OBKBBDDBBKBO......",
      ".......ODDDDDDDDO.......",
      "........OOOOOOOO........",
      ".......O..O..O..O.......",
      "......O...O..O...O......",
    ],
    group(x, y) {
      if (y <= 4) return "eyes";
      if (y >= 6 && y <= 10 && x <= 4) return "left";
      if (y >= 6 && y <= 10 && x >= 19) return "right";
      return "body";
    },
    lines: [
      "snip snip! 🦀",
      "i'm snips. i do the QA here.",
      "zero trust? i trust jericho.",
      "least privilege, most crab.",
      "found a flag once. kept it.",
      "stardew says hi.",
      "sudo make friends",
      "my shell is hardened.",
      "click the terminal, it's real!",
    ],
    hello: "hi, i'm snips! 🦀",
    rave: "CRAB RAVE!!",
    summonSay: "you rang? 🦀",
    summonLine: "snips scuttles over. he is doing his best.",
    tip: "tip: click the crab. it has opinions.",
  },

  lion: {
    emoji: "🦁",
    word: "lion",
    name: "leo",
    viewBox: "0 0 18 14",
    colors: {
      O: "#4a2c12", M: "#c9822e", D: "#a5641f", F: "#f2c14e",
      W: "#fff6ec", P: "#221410", K: "#8a4b2d",
    },
    map: [
      "...OO........OO...",
      "..OMMO......OMMO..",
      ".OMMMMMMMMMMMMMMO.",
      "OMMFFFFFFFFFFFFMMO",
      "OMFFFFFFFFFFFFFFMO",
      "OMFOWWOFFFFOWWOFMO",
      "OMFOWPOFFFFOWPOFMO",
      "OMFFFFFFFFFFFFFFMO",
      "OMFFFFFOKKOFFFFFMO",
      ".OMFFFFDKKDFFFFMO.",
      ".OMFFFDDDDDDFFFMO.",
      "..OMMFFFFFFFFMMO..",
      "...OMMMMMMMMMMO...",
      "....OOOOOOOOOO....",
    ],
    group(x, y) {
      if ((y === 5 || y === 6) && ((x >= 3 && x <= 6) || (x >= 11 && x <= 14))) return "eyes";
      if (y <= 1 && x < 9) return "left";
      if (y <= 1 && x >= 9) return "right";
      return "body";
    },
    lines: [
      "roar! 🦁",
      "i'm leo. i do the QA here.",
      "zero trust? i trust jericho.",
      "least privilege, maximum pride.",
      "found a flag once. kept it.",
      "stardew says hi.",
      "sudo make friends",
      "my mane is hardened.",
      "guardian of the pyramids (and prod).",
      "click the terminal, it's real!",
    ],
    hello: "hi, i'm leo! 🦁",
    rave: "LION RAVE!!",
    summonSay: "you rang? 🦁",
    summonLine: "leo pads over, mane first. very majestic.",
    tip: "tip: click the lion. it has opinions.",
  },

  bear: {
    emoji: "🐻",
    word: "bear",
    name: "bjorn",
    viewBox: "0 0 18 14",
    colors: {
      O: "#3a2415", B: "#8a5a2b", D: "#6e4520", L: "#a5713a",
      M: "#d9b98a", W: "#fff6ec", P: "#221410", N: "#221410",
      K: "#c9825e",
    },
    map: [
      "..OOO........OOO..",
      ".OBMBO......OBMBO.",
      ".OBBBBOOOOOOBBBBO.",
      "..OBBLLBBBBLLBBO..",
      ".OBBBBBBBBBBBBBBO.",
      "OBBOWWOBBBBOWWOBBO",
      "OBBOWPOBBBBOWPOBBO",
      "OBKBBBBBBBBBBBBKBO",
      "OBBBBMMMMMMMMBBBBO",
      ".OBBBMMONNOMMBBBO.",
      ".OBBBMMNNNNMMBBBO.",
      "..OBBBMMMMMMBBBO..",
      "...OBBBBBBBBBBO...",
      "....OOOOOOOOOO....",
    ],
    group(x, y) {
      if ((y === 5 || y === 6) && ((x >= 3 && x <= 6) || (x >= 11 && x <= 14))) return "eyes";
      if (y <= 2 && x <= 5) return "left";
      if (y <= 2 && x >= 12) return "right";
      return "body";
    },
    lines: [
      "rawr. 🐻",
      "i'm bjorn. i hibernate between deploys.",
      "zero trust? i trust jericho.",
      "least privilege, bear necessities.",
      "found a flag once. ate it. (kept a copy.)",
      "stardew says hi.",
      "sudo make friends",
      "my firewall is un-bear-able.",
      "click the terminal, it's real!",
    ],
    hello: "hi, i'm bjorn! 🐻",
    rave: "BEAR RAVE!!",
    summonSay: "you rang? 🐻",
    summonLine: "bjorn lumbers over. do not feed the bear credentials.",
    tip: "tip: click the bear. it has opinions.",
  },
};

const MASCOT_ORDER = ["bear", "lion", "crab"];
let currentMascot = "bear";

function buildMascotSVG(kind = currentMascot) {
  const m = MASCOTS[kind];
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", m.viewBox);
  svg.setAttribute("shape-rendering", "crispEdges");
  svg.setAttribute("aria-hidden", "true");

  const groups = {
    body: document.createElementNS(NS, "g"),
    eyes: document.createElementNS(NS, "g"),
    left: document.createElementNS(NS, "g"),
    right: document.createElementNS(NS, "g"),
  };
  groups.body.setAttribute("class", "crab-body");
  groups.eyes.setAttribute("class", "eyes");
  groups.left.setAttribute("class", "claw-left");
  groups.right.setAttribute("class", "claw-right");

  m.map.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      const color = m.colors[ch];
      if (!color) return;
      const rect = document.createElementNS(NS, "rect");
      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
      rect.setAttribute("width", 1.02);
      rect.setAttribute("height", 1.02);
      rect.setAttribute("fill", color);
      groups[m.group(x, y)].appendChild(rect);
    });
  });

  svg.append(groups.body, groups.left, groups.right, groups.eyes);
  return svg;
}

/* mount points */
const crabEl = document.getElementById("crab");
const navCrab = document.getElementById("navCrab");
const footerCrab = document.getElementById("footerCrab");
const mascotToggle = document.getElementById("mascotToggle");
const mascotWord = document.getElementById("mascotWord");
const footerEmoji = document.getElementById("footerEmoji");
const footerTip = document.getElementById("footerTip");

function mountMascots() {
  [crabEl, navCrab, footerCrab].forEach((el) => {
    el.innerHTML = "";
    el.appendChild(buildMascotSVG());
  });
}

function setMascot(kind, announce = false) {
  if (!MASCOTS[kind]) return;
  currentMascot = kind;
  const m = MASCOTS[kind];
  mountMascots();
  mascotToggle.textContent = m.emoji;
  mascotToggle.setAttribute("aria-label", `Switch mascot (current: ${m.word})`);
  if (mascotWord) mascotWord.textContent = m.word;
  if (footerEmoji) footerEmoji.textContent = m.emoji;
  if (footerTip) footerTip.textContent = m.tip;
  try { localStorage.setItem("mascot", kind); } catch (_) { /* private mode */ }
  if (announce) crabSay(m.hello, 3000);
}

/* ---------- mascot personality ---------- */
const bubble = document.getElementById("crabBubble");
let crabClicks = 0;
let bubbleTimer = null;

function crabSay(text, ms = 2600) {
  bubble.textContent = text;
  bubble.classList.add("show");
  clearTimeout(bubbleTimer);
  bubbleTimer = setTimeout(() => bubble.classList.remove("show"), ms);
}

crabEl.addEventListener("click", () => {
  const m = MASCOTS[currentMascot];
  crabClicks++;
  crabEl.classList.remove("hop", "excited");
  void crabEl.offsetWidth; // restart animation
  crabEl.classList.add("hop", "excited");

  if (crabClicks % 7 === 0) {
    crabSay(m.rave, 3200);
    mascotRain();
  } else {
    crabSay(m.lines[crabClicks % m.lines.length]);
  }
});

/* mascot rain easter egg */
function mascotRain() {
  if (reducedMotion) return;
  for (let i = 0; i < 22; i++) {
    const mini = document.createElement("div");
    mini.className = "mini-crab";
    mini.style.left = Math.random() * 100 + "vw";
    mini.style.animationDuration = 2.2 + Math.random() * 2.4 + "s";
    mini.style.animationDelay = Math.random() * 0.9 + "s";
    mini.appendChild(buildMascotSVG());
    document.body.appendChild(mini);
    setTimeout(() => mini.remove(), 6200);
  }
}

/* restore saved mascot, then say hello */
let savedMascot = null;
try { savedMascot = localStorage.getItem("mascot"); } catch (_) { /* private mode */ }
setMascot(MASCOTS[savedMascot] ? savedMascot : "bear");
setTimeout(() => crabSay(MASCOTS[currentMascot].hello, 3000), 1800);

/* cycle mascots from the navbar */
mascotToggle.addEventListener("click", () => {
  const next = MASCOT_ORDER[(MASCOT_ORDER.indexOf(currentMascot) + 1) % MASCOT_ORDER.length];
  setMascot(next, true);
});

/* ============================================================
   2. TERMINAL — boot sequence + interactive commands
   ============================================================ */

const term = document.getElementById("terminalBody");
const PROMPT = `<span class="t-prompt">jericho@sec</span><span class="t-out">:~$</span> `;

const BOOT_LINES = [
  { cmd: "whoami" },
  { out: 'Jericho "James" Guanga — cybersecurity @ Accenture PH', cls: "t-out" },
  { cmd: "cat status.txt" },
  { out: "[<span class='t-ok'>OK</span>] SC-300 · SC-900 · ISC2 CC · AZ-900 · OCI AI", cls: "t-out", html: true },
  { out: "[<span class='t-ok'>OK</span>] CTF 2025 — 1st place (K1RA, Mapúa)", cls: "t-out", html: true },
  { cmd: "./access --mode zero-trust" },
  { out: "verifying identity ... <span class='t-ok'>access granted.</span> welcome aboard.", cls: "t-out", html: true },
];

function summonMascot(kind) {
  if (kind !== currentMascot) setMascot(kind);
  const m = MASCOTS[kind];
  crabEl.classList.remove("hop");
  void crabEl.offsetWidth;
  crabEl.classList.add("hop");
  crabSay(m.summonSay);
  return `<span class="t-crabline">${m.summonLine}</span>`;
}

const COMMANDS = {
  help: () =>
    `available commands:
  <span class="t-ok">whoami</span>     — who is this guy
  <span class="t-ok">skills</span>     — tech stack
  <span class="t-ok">certs</span>      — certifications
  <span class="t-ok">projects</span>   — jump to projects
  <span class="t-ok">ctf</span>        — the flag story
  <span class="t-ok">contact</span>    — reach out
  <span class="t-ok">leo</span>        — summon the lion (also: <span class="t-ok">crab</span>, <span class="t-ok">bear</span>)
  <span class="t-ok">stardew</span>    — 🌱
  <span class="t-ok">clear</span>      — clean up`,
  whoami: () =>
    `Jericho "James" Guanga
cybersecurity intern @ Accenture Philippines (Cyber Mastery Program)
BS Information Technology — Mapúa University '26
IAM · Sentinel · Zero Trust · AI automation with Claude + MCP`,
  skills: () =>
    `[cloud]      Azure · Entra ID · M365 · RBAC · Conditional Access
[secops]     Sentinel · KQL · alert triage · incident response
[ai]         Claude · MCP servers · Graph API · Gemini
[dev]        Python · Java · JS · SQL · React · Supabase
[network]    VLANs · routing & switching`,
  certs: () =>
    `SC-300  Identity & Access Administrator ....... May 2026
SC-900  Security & Identity Fundamentals ..... May 2026
CC      ISC2 Certified in Cybersecurity ....... Jul 2025
OCI AI  Oracle AI Foundations ................. Sep 2025
AZ-900  Azure Fundamentals .................... May 2024`,
  ctf: () =>
    `> K1RA CTF 2025 — Mapúa University
> OSINT + Google dorking → web exploitation → initial flags
> extracted payload from VIDEO STEGANOGRAPHY (yes, really)
> decoded final flag with Kali → <span class="t-warn">🏆 1st place</span>`,
  contact: () =>
    `email    → <a href="mailto:jericho.rguanga@hotmail.com">jericho.rguanga@hotmail.com</a>
github   → <a href="https://github.com/newtonsuu" target="_blank" rel="noopener noreferrer">github.com/newtonsuu</a>
linkedin → <a href="https://www.linkedin.com/in/jerichoguanga/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jerichoguanga</a>
base     → Makati City, Philippines`,
  leo: () => summonMascot("lion"),
  lion: () => summonMascot("lion"),
  crab: () => summonMascot("crab"),
  snips: () => summonMascot("crab"),
  bear: () => summonMascot("bear"),
  bjorn: () => summonMascot("bear"),
  stardew: () =>
    `<span class="t-crabline">🌱 farming season paused for cert season.
current save: petting every animal on the farm.</span>`,
  projects: () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    return "navigating to ~/projects ...";
  },
  ls: () => "about/  experience/  skills/  projects/  certs/  contact/  flag.txt",
  "cat flag.txt": () => `flag{y0u_f0und_m3_h1r3_j3r1ch0}`,
  sudo: () =>
    `<span class="t-err">jericho is not in the sudoers file. this incident will be reported to ${MASCOTS[currentMascot].name}.</span>`,
  clear: "CLEAR",
  exit: () => "nice try. there is no escape from the portfolio.",
};

function termLine(html, cls = "") {
  const div = document.createElement("div");
  if (cls) div.className = cls;
  div.innerHTML = html;
  term.appendChild(div);
  term.scrollTop = term.scrollHeight;
  return div;
}

function typeText(el, text, speed = 28) {
  return new Promise((resolve) => {
    if (reducedMotion) { el.innerHTML += text; resolve(); return; }
    let i = 0;
    const tick = () => {
      el.innerHTML = el.dataset.prefix + text.slice(0, ++i);
      term.scrollTop = term.scrollHeight;
      if (i < text.length) setTimeout(tick, speed + Math.random() * 24);
      else resolve();
    };
    tick();
  });
}

async function bootTerminal() {
  for (const line of BOOT_LINES) {
    if (line.cmd) {
      const el = termLine(PROMPT);
      el.dataset.prefix = PROMPT;
      await typeText(el, line.cmd);
      await new Promise((r) => setTimeout(r, reducedMotion ? 0 : 220));
    } else {
      termLine(line.out, line.cls);
      await new Promise((r) => setTimeout(r, reducedMotion ? 0 : 260));
    }
  }
  spawnInput();
}

function escapeHTML(s) {
  return s.replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

const cmdHistory = [];
let historyIdx = -1;

function spawnInput() {
  const row = document.createElement("div");
  row.innerHTML = PROMPT;
  const input = document.createElement("input");
  input.className = "t-input";
  input.setAttribute("aria-label", "terminal input");
  input.setAttribute("autocomplete", "off");
  input.setAttribute("spellcheck", "false");
  row.appendChild(input);
  term.appendChild(row);
  term.scrollTop = term.scrollHeight;

  input.addEventListener("keydown", (e) => {
    /* ↑ / ↓ — command history */
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length && historyIdx < cmdHistory.length - 1) {
        historyIdx++;
        input.value = cmdHistory[cmdHistory.length - 1 - historyIdx];
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx > 0) {
        historyIdx--;
        input.value = cmdHistory[cmdHistory.length - 1 - historyIdx];
      } else {
        historyIdx = -1;
        input.value = "";
      }
      return;
    }
    if (e.key !== "Enter") return;
    const raw = input.value.trim();
    const cmd = raw.toLowerCase();
    row.innerHTML = PROMPT + `<span class="t-cmd">${escapeHTML(raw)}</span>`;

    if (cmd) {
      cmdHistory.push(raw);
      historyIdx = -1;
      const handler = COMMANDS[cmd] ?? COMMANDS[cmd.split(" ")[0]];
      if (handler === "CLEAR" || cmd === "clear") {
        term.innerHTML = "";
      } else if (handler) {
        termLine(typeof handler === "function" ? handler() : handler, "t-out");
      } else {
        termLine(
          `command not found: ${escapeHTML(cmd)} — try <span class="t-ok">help</span>`,
          "t-out"
        );
      }
    }
    spawnInput();
  });

  // focus when the terminal is clicked
  term.onclick = () => input.focus();
}

bootTerminal();

/* ============================================================
   3. PARTICLES — drifting pixel fireflies
   ============================================================ */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function initParticles() {
  const count = Math.min(70, Math.floor(window.innerWidth / 22));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() < 0.85 ? 2 : 3,
    vx: (Math.random() - 0.5) * 0.15,
    vy: -(0.08 + Math.random() * 0.22),
    alpha: 0.12 + Math.random() * 0.4,
    color: Math.random() < 0.75 ? "61, 245, 164" : Math.random() < 0.5 ? "90, 200, 245" : "242, 193, 78",
    tw: Math.random() * Math.PI * 2,
  }));
}
initParticles();

function drawParticles(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.y < -6) { p.y = canvas.height + 6; p.x = Math.random() * canvas.width; }
    if (p.x < -6) p.x = canvas.width + 6;
    if (p.x > canvas.width + 6) p.x = -6;
    const twinkle = 0.65 + 0.35 * Math.sin(t / 900 + p.tw);
    ctx.fillStyle = `rgba(${p.color}, ${p.alpha * twinkle})`;
    ctx.fillRect(Math.round(p.x), Math.round(p.y), p.size, p.size);
  }
  requestAnimationFrame(drawParticles);
}
if (!reducedMotion) requestAnimationFrame(drawParticles);

/* ============================================================
   4. SCROLL — reveals, navbar, mobile menu
   ============================================================ */

function revealEverything() {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // safety canary: if the observer never fires (throttled webview, odd
  // embedder), reveal everything rather than leave the page blank
  let ioAlive = false;
  const canary = new IntersectionObserver(() => {
    ioAlive = true;
    canary.disconnect();
  });
  canary.observe(document.documentElement);
  const assertAlive = () => {
    if (!ioAlive && document.visibilityState === "visible") revealEverything();
  };
  setTimeout(assertAlive, 1400);
  document.addEventListener("visibilitychange", () => setTimeout(assertAlive, 1400));
} else {
  revealEverything();
}

const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
}, { passive: true });

const burger = document.getElementById("navBurger");
const mobileMenu = document.getElementById("navMobile");
burger.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
});
function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  burger.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}
mobileMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", closeMobileMenu)
);
/* Esc closes the mobile menu; click outside does too */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
    closeMobileMenu();
    burger.focus();
  }
});
document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("open") &&
    !mobileMenu.contains(e.target) &&
    !burger.contains(e.target)
  ) {
    closeMobileMenu();
  }
});

/* ============================================================
   5. THEME — dark cyber ⇄ ancient egypt light mode
   ============================================================ */

const themeToggle = document.getElementById("themeToggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const light = theme === "light";
  themeToggle.textContent = light ? "☾" : "☀";
  themeToggle.setAttribute(
    "aria-label",
    light ? "Switch to dark mode" : "Switch to light mode"
  );
  if (themeMeta) themeMeta.setAttribute("content", light ? "#e9d9ae" : "#0a0e13");
  try { localStorage.setItem("theme", theme); } catch (_) { /* private mode */ }
}

let savedTheme = null;
try { savedTheme = localStorage.getItem("theme"); } catch (_) { /* private mode */ }
applyTheme(savedTheme === "light" ? "light" : "dark");

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  applyTheme(next);
  crabSay(next === "light" ? "welcome to the duat ☀️" : "back to the night hunt 🌙");
});

async function loadSection(file) {
  const content = document.getElementById("content");
  content.innerHTML = `<p class="muted">Loading...</p>`;

  try {
    const res = await fetch(file, { cache: "no-store" });
    if (!res.ok) throw new Error(`Missing file: ${file}`);
    const html = await res.text();
    content.innerHTML = html;
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (e) {
    content.innerHTML = `
      <h2>Section not found</h2>
      <p class="muted">${e.message}</p>
      <p class="muted">Create <b>${file}</b> inside <b>/sections</b> folder.</p>
    `;
  }
}

function setActive(btn) {
  document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

/* -------- Icon Rain (left & right slow) -------- */
function startIconRain() {
  const layer = document.getElementById("iconRain");
  if (!layer) return;

  // Simple, clean symbols (no big emojis)
  const icons = [
    "Σ", "λ", "π", "∑", "ƒ", "∆", "≡", "≋",
    "</>", "{ }", "SQL", "PY", "ETL", "BI", "API",
    "☁", "⋯", "→", "↗", "▦", "▥"
  ];

  // How many falling items (keep subtle)
  const COUNT = 26;

  // left band = 6% to 18%, right band = 82% to 94%
  function randX(side) {
    if (side === "left") return (6 + Math.random() * 12);     // %
    return (82 + Math.random() * 12);                          // %
  }

  function createOne(i) {
    const el = document.createElement("div");
    el.className = "rain-icon";
    el.textContent = icons[Math.floor(Math.random() * icons.length)];

    const side = (i % 2 === 0) ? "left" : "right";
    el.style.left = randX(side) + "vw";

    // sizes
    const size = 12 + Math.random() * 16; // px
    el.style.fontSize = size + "px";

    // slow speed (less speed like you asked)
    const duration = 14 + Math.random() * 20; // seconds (slow)
    el.style.animationDuration = duration + "s";

    // start at random point in the animation
    const delay = -(Math.random() * duration);
    el.style.animationDelay = delay + "s";

    // slightly different opacity (still subtle)
    el.style.opacity = (0.10 + Math.random() * 0.10).toFixed(2);

    layer.appendChild(el);
  }

  // clear old if reloaded
  layer.innerHTML = "";
  for (let i = 0; i < COUNT; i++) createOne(i);
}

document.addEventListener("DOMContentLoaded", () => {
  // First, create the icon rain
  startIconRain();

  // Then, handle tabs
  const tabs = document.querySelectorAll(".tab");
  
  // Check if we should load default content (only if content div is empty)
  const contentDiv = document.getElementById("content");
  if (!contentDiv.innerHTML.trim()) {
    const activeTab = document.querySelector(".tab.active");
    if (activeTab) {
      loadSection(activeTab.dataset.file);
    }
  }

  // Add click handlers to tabs
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      setActive(btn);
      loadSection(btn.dataset.file);
    });
  });

  // Rebuild on resize (keeps left/right bands consistent)
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(startIconRain, 250);
  });
});
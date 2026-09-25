/* =============================================
   ICON RAIN — light theme, colored symbols
============================================= */
function startIconRain() {
  const layer = document.getElementById('iconRain');
  if (!layer) return;

  // Symbols relevant to data/analytics/tech
  const icons = [
    'Σ', 'λ', 'π', '∑', 'ƒ', '∆', '≡', '∫',
    '{ }', '</>', 'SQL', 'ETL', 'PY', 'BI', 'ML',
    '→', '↗', '⋯', '▦', '#', '@', '∞', '≋'
  ];

  // Colors tuned per theme — brighter and more transparent on dark
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  const colors = isDark ? [
    'rgba(96,165,250,0.22)',  // blue
    'rgba(56,189,248,0.20)',  // sky
    'rgba(167,139,250,0.20)', // purple
    'rgba(148,163,184,0.16)', // slate
    'rgba(52,211,153,0.18)',  // emerald
    'rgba(251,191,36,0.18)',  // amber
  ] : [
    'rgba(37,99,235,0.28)',   // blue
    'rgba(8,145,178,0.28)',   // teal
    'rgba(124,58,237,0.24)',  // purple
    'rgba(100,116,139,0.22)', // slate
    'rgba(16,185,129,0.24)',  // emerald
    'rgba(245,158,11,0.24)',  // amber
  ];

  const COUNT = 70;

  function createOne() {
    const el = document.createElement('div');
    el.className = 'rain-icon';
    el.textContent = icons[Math.floor(Math.random() * icons.length)];

    // Spread across the FULL screen width
    el.style.left = (Math.random() * 100) + 'vw';

    const size = 13 + Math.random() * 16;
    el.style.fontSize = size + 'px';

    const color = colors[Math.floor(Math.random() * colors.length)];
    el.style.color = color;

    const duration = 16 + Math.random() * 22;
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = -(Math.random() * duration) + 's';

    layer.appendChild(el);
  }

  layer.innerHTML = '';
  for (let i = 0; i < COUNT; i++) createOne();
}

/* =============================================
   TAB / SECTION LOADER
============================================= */
async function loadSection(file, userInitiated = false) {
  const content = document.getElementById('content');
  const scrollY = window.scrollY;
  content.innerHTML = '<p class="muted" style="padding:1rem 0;">Loading...</p>';

  try {
    const res = await fetch(file, { cache: 'no-store' });
    if (!res.ok) throw new Error('File not found: ' + file);
    const html = await res.text();
    content.innerHTML = html;

    // Re-execute any inline scripts in loaded content
    content.querySelectorAll('script').forEach(old => {
      const s = document.createElement('script');
      s.textContent = old.textContent;
      old.parentNode.replaceChild(s, old);
    });

    // When the user clicks a tab, bring the new section into view.
    // (Restoring the old scroll position can land past shorter sections,
    //  which makes the page look blank.)
    requestAnimationFrame(() => {
      if (userInitiated) {
        const card = content.closest('.section-card') || content;
        const top = card.getBoundingClientRect().top + window.scrollY - 24;
        window.scrollTo({ top, behavior: 'smooth' });
      } else {
        window.scrollTo(0, scrollY);
      }
    });
  } catch (e) {
    content.innerHTML = `
      <h2>Section coming soon</h2>
      <p class="muted">${e.message}</p>
    `;
  }
}

function setActive(btn) {
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* =============================================
   INIT
============================================= */
/* =============================================
   THEME TOGGLE — dark by default, choice remembered
============================================= */
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;

  const paint = () => {
    const dark = root.getAttribute('data-theme') === 'dark';
    if (btn) {
      btn.textContent = dark ? '🌙' : '☀️';
      btn.setAttribute('aria-pressed', String(dark));
    }
  };

  paint();

  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    paint();
    startIconRain(); // regenerate rain so colors suit the new theme
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  startIconRain();

  // Rebuild rain on resize (keeps bands consistent)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(startIconRain, 300);
  });

  // Tab clicks
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      setActive(btn);
      loadSection(btn.dataset.file, true);
    });
  });

  // Load default active tab
  const active = document.querySelector('.tab.active');
  if (active) loadSection(active.dataset.file);
});

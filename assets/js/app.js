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

  // Soft muted colors that work on white — blue, teal, purple, slate
  const colors = [
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
async function loadSection(file) {
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

    requestAnimationFrame(() => window.scrollTo(0, scrollY));
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
document.addEventListener('DOMContentLoaded', () => {
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
      loadSection(btn.dataset.file);
    });
  });

  // Load default active tab
  const active = document.querySelector('.tab.active');
  if (active) loadSection(active.dataset.file);
});

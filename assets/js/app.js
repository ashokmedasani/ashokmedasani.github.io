<<<<<<< Updated upstream
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab-btn');
  const content = document.getElementById('content');
  const avatarImg = document.querySelector('.avatar-img');
  const avatarFallback = document.getElementById('avatarFallback');

  // Show fallback if image fails
  if (avatarImg) {
    avatarImg.addEventListener('error', function () {
      this.style.display = 'none';
      if (avatarFallback) avatarFallback.style.display = 'flex';
    });
    avatarImg.addEventListener('load', function () {
      if (avatarFallback) avatarFallback.style.display = 'none';
    });
  }

  function loadContent(filePath) {
    content.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Loading...</p></div>';
    fetch(filePath)
      .then(function (res) {
        if (!res.ok) throw new Error('Not found: ' + filePath);
        return res.text();
      })
      .then(function (html) {
        content.innerHTML = html;
        // Re-run any inline scripts in loaded content
        content.querySelectorAll('script').forEach(function (oldScript) {
          const newScript = document.createElement('script');
          newScript.textContent = oldScript.textContent;
          oldScript.parentNode.replaceChild(newScript, oldScript);
        });
      })
      .catch(function () {
        content.innerHTML = '<div style="padding:2rem;text-align:center;color:#94a3b8;"><p>Section coming soon.</p></div>';
      });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');
      loadContent(this.getAttribute('data-file'));
    });
  });

  // Load About by default
  const defaultTab = document.querySelector('.tab-btn.active');
  if (defaultTab) loadContent(defaultTab.getAttribute('data-file'));
=======
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
    'rgba(37,99,235,0.12)',   // blue
    'rgba(8,145,178,0.12)',   // teal
    'rgba(124,58,237,0.10)',  // purple
    'rgba(100,116,139,0.10)', // slate
    'rgba(16,185,129,0.10)',  // emerald
    'rgba(245,158,11,0.10)',  // amber
  ];

  const COUNT = 30;

  function randX(side) {
    if (side === 'left')  return 2 + Math.random() * 14;   // 2–16vw
    return 84 + Math.random() * 14;                          // 84–98vw
  }

  function createOne(i) {
    const el = document.createElement('div');
    el.className = 'rain-icon';
    el.textContent = icons[Math.floor(Math.random() * icons.length)];

    const side = (i % 2 === 0) ? 'left' : 'right';
    el.style.left = randX(side) + 'vw';

    const size = 11 + Math.random() * 14;
    el.style.fontSize = size + 'px';

    const color = colors[Math.floor(Math.random() * colors.length)];
    el.style.color = color;

    const duration = 16 + Math.random() * 22;
    el.style.animationDuration = duration + 's';
    el.style.animationDelay = -(Math.random() * duration) + 's';

    layer.appendChild(el);
  }

  layer.innerHTML = '';
  for (let i = 0; i < COUNT; i++) createOne(i);
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
>>>>>>> Stashed changes
});

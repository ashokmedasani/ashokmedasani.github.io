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
});

async function loadSection(file) {
  const content = document.getElementById("content");
  content.innerHTML = `<p class="muted">Loading...</p>`;

  try {
    const res = await fetch(file, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to load: ${file}`);
    const html = await res.text();
    content.innerHTML = html;
  } catch (e) {
    content.innerHTML = `
      <h2>Could not load section</h2>
      <p class="muted">${e.message}</p>
      <p class="muted">Make sure <b>${file}</b> exists in your repo.</p>
    `;
  }
}

function setActiveTab(clickedBtn) {
  document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
  clickedBtn.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      setActiveTab(btn);
      loadSection(btn.dataset.file);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Default load Summary
  loadSection("sections/summary.html");
});

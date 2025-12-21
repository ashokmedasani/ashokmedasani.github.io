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
      <p class="muted">Create <b>${file}</b> inside <b>/sections</b>.</p>
    `;
  }
}

function setActive(btn) {
  document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      setActive(btn);
      loadSection(btn.dataset.file);
    });
  });

  loadSection("sections/summary.html");
});

document.addEventListener("DOMContentLoaded", () => {
  // Top navigation sections
  const navButtons = document.querySelectorAll(".navbtn");
  const sections = document.querySelectorAll(".section");

  function showSection(name) {
    navButtons.forEach((b) => b.classList.toggle("active", b.dataset.section === name));
    sections.forEach((s) => s.classList.toggle("active", s.id === `sec-${name}`));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => showSection(btn.dataset.section));
  });

  // Skill sub-tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      tabPanels.forEach((p) => p.classList.remove("active"));
      const panel = document.getElementById(`tab-${tab}`);
      if (panel) panel.classList.add("active");
    });
  });
});

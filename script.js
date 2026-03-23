document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.getElementById("hero-title");

  setTimeout(() => {
    heroTitle.classList.add("reveal");
  }, 250);
});
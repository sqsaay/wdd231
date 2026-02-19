//Scrolling control for transitions
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fullscreen");
  let currentIndex = 0;
  let isScrolling = false;

  window.addEventListener("wheel", (event) => {
    if (isScrolling) return; // prevent rapid jumps
    isScrolling = true;

    if (event.deltaY > 0 && currentIndex < sections.length - 1) {
      // scroll down
      currentIndex++;
    } else if (event.deltaY < 0 && currentIndex > 0) {
      // scroll up
      currentIndex--;
    }

    sections[currentIndex].scrollIntoView({ behavior: "smooth" });

    // reset lock after animation
    setTimeout(() => { isScrolling = false; }, 1000);
  }, { passive: true });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fullscreen");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
});
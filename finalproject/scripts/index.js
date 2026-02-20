//Scrolling control for transitions
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fullscreen");
  let currentIndex = 0;
  let isScrolling = false;

  window.addEventListener("wheel", (event) => {
    if (isScrolling) return;
    isScrolling = true;

    if (event.deltaY > 0 && currentIndex < sections.length - 1) {
      currentIndex++;
    } else if (event.deltaY < 0 && currentIndex > 0) {
      currentIndex--;
    }

    sections[currentIndex].scrollIntoView({ behavior: "smooth" });

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

//Local storage modal
const modal = document.getElementById("welcomeModal");
const closeBtn = document.querySelector(".closeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

if (!localStorage.getItem("visitedBefore")) {
  welcomeMessage.textContent = "Welcome, glad to have you!";
  modal.style.display = "block";
  localStorage.setItem("visitedBefore", "true");
} else {
  welcomeMessage.textContent = "Thanks for being here again!";
  modal.style.display = "block";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

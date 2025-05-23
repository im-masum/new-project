const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
// const navLinkItems = document.querySelectorAll(".nav-links li");
// const navLink = document.querySelectorAll(".nav-links a");
// const nav = document.querySelector("nav");
// const header = document.querySelector("header");
// const headerHeight = header.offsetHeight;
const section = document.querySelectorAll("section");
const modeToggle = document.getElementById("modeToggle");


hamburger.classList.toggle("hide");
hamburger.classList.toggle("show");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("rotate");
});



modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  modeToggle.textContent = document.body.classList.contains("light")
    ? "🌙"
    : "☀️";
});

// ScrollReveal animations
ScrollReveal().reveal("#navbar", {
  delay: 200,
  distance: "50px",
  origin: "top",
  duration: 800,
});

ScrollReveal().reveal(".nav-links li", {
  delay: 500,
  interval: 150,
  distance: "20px",
  origin: "bottom",
});

ScrollReveal().reveal(".reveal-section", {
  delay: 200,
  distance: "50px",
  origin: "bottom",
  duration: 800,
  interval: 200,
});

// ScrollSpy
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// theme switcher

const colorBtns = document.querySelectorAll(".color-btn");

colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.remove("grey-theme", "green-theme", "blue-theme");

    const theme = btn.getAttribute("data-theme");
    if (theme === "grey") document.body.classList.add("grey-theme");
    if (theme === "green") document.body.classList.add("green-theme");
    if (theme === "blue") document.body.classList.add("blue-theme");
  
    // default = no class needed
  });
});

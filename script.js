const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav .links");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  let menu = document.querySelector(".menu-toggle");
  menu.classList.toggle("posFix");
});

let typed = new Typed(".auto-typed", {
  strings: ["Raihan", "a UI/UX Designer", "a Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

AOS.init();

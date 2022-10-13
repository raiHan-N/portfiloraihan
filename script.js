const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav .links");
let elem = document.querySelectorAll(".rounded")[0];
let elem1 = document.querySelectorAll(".rounded")[1];
let elem2 = document.querySelectorAll(".rounded")[2];
let elem3 = document.querySelectorAll(".rounded")[3];

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

window.addEventListener("mousemove", function (event) {
  // posisi mouse
  // console.log(event.clientY);
  // ukuran browser
  // console.log(window.innerWidth);

  const xPos = Math.round((event.clientX / window.innerWidth) * 50);
  const yPos = Math.round((event.clientY / window.innerHeight) * 50);

  elem1.style.top = "-" + yPos + "px";
  elem1.style.left = "-" + xPos + "px";

  elem2.style.bottom = "-" + yPos + "px";
  elem2.style.right = "-" + xPos + "px";

  elem3.style.bottom = yPos + "px";
  elem3.style.right = "-" + xPos + "px";
});

let btnTop = document.getElementById("btn-top");
window.addEventListener("scroll", function () {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    btnTop.style.display = "block";
    return;
  }

  btnTop.style.display = "none";
});

btnTop.addEventListener("click", function () {
  document.body.scrollTop = "0";
  document.documentElement.scrollTop = "0";
});

let toggleDarkmode = document.querySelector(".toggle-darkmode");
toggleDarkmode.addEventListener("click", function () {
  let body = document.body;
  let innerToggle = document.querySelector(".inner-toggle");

  innerToggle.classList.toggle("active");
  if (innerToggle.classList[1]) {
    innerToggle.children[0].innerText = "light_mode";
    elem.style.backgroundColor = "rgba(127, 176, 105, 0.56)";
    elem1.style.backgroundColor = "rgba(192, 176, 176, 0.58)";
    elem2.style.backgroundColor = "rgba(127, 176, 105, 0.75)";
    elem3.style.backgroundColor = "#996b3ade";
    innerToggle.style.color = "black";
  } else {
    innerToggle.children[0].innerText = "dark_mode";
    elem.style.backgroundColor = "rgba(127, 176, 105, 0.16)";
    elem1.style.backgroundColor = "rgba(192, 176, 176, 0.48)";
    elem2.style.backgroundColor = "rgba(127, 176, 105, 0.35)";
    elem3.style.backgroundColor = "#996b3a9c";
    innerToggle.style.color = "white";
  }
  body.classList.toggle("active");
});

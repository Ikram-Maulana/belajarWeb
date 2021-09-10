const hamburger = document.querySelector(".hamburger input");
const navbar = document.querySelector("header>nav>.menu ul");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("down");
})
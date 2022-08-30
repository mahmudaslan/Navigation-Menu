let toggle = document.querySelector(".toggle");
let close = document.querySelector("nav span");
let nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.add("open");
});
close.addEventListener("click", () => {
  nav.classList.remove("open");
});
document.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
});

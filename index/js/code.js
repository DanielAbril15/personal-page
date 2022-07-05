const iconBurger = document.querySelector("#icon__burger");
const menu = document.querySelector("#menu");

window.addEventListener("load", function () {
  const loader = this.document.querySelector(".loader");

  setTimeout(function () {
    loader.style.display = "none";
  }, 2000);
});

iconBurger.addEventListener("click", function () {
  menu.classList.toggle("show__menu");
});

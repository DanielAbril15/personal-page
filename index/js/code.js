const iconBurger = document.querySelector("#icon__burger");
const menu = document.querySelector("#menu");

window.addEventListener("load", function () {
  const loader = this.document.querySelector(".loader");

  setTimeout(function () {
    loader.style.display = "none";
  }, 700);
});

iconBurger.addEventListener("click", function () {
  menu.classList.toggle("show__menu");
});

const check = document.querySelector(".check");

check.addEventListener("click", language);

function language() {
  let id = check.checked;
  if (id === true) {
    location.href = "../../en/index.html";
  } else {
    location.href = "../../index.html";
  }
}

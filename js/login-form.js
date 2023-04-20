// import {switchElem} from './app.js'

const showHide = document.getElementById("show-hide");
let passwordInput = document.getElementById("password");

showHide.addEventListener("click", function () {
  showHide.classList.toggle("show");

  if (showHide.classList.contains("show")) {
    showHide.classList.remove("fa-eye-slash");
    showHide.classList.add("fa-eye");
    passwordInput.setAttribute("type", "text");
  } else {
    showHide.classList.add("fa-eye-slash");
    showHide.classList.remove("fa-eye");
    passwordInput.setAttribute("type", "password");
  }
});

// -------------- For Dark & Light Mood ----------
const switchElem = document.querySelector("#switch");
switchElem.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
document.addEventListener("DOMContentLoaded", function () {
  // fetch("../json/x.json").then  (res => res.json())
  // .then(res=> loadData(res))

  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
    console.log(theme);
  }
});

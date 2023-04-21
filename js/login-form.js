// import {switchElem} from './app.js'

const $ = document;

//----for  password  
const showHide = $.getElementById("show-hide");
let passwordInput = $.getElementById("password");

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
const switchElem = $.querySelector("#switch");
switchElem.addEventListener("click", function () {
  $.body.classList.toggle("dark");
  if ($.body.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
$.addEventListener("DOMContentLoaded", function () {
  // fetch("../json/x.json").then  (res => res.json())
  // .then(res=> loadData(res))

  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    $.body.classList.add("dark");
    console.log(theme);
  }
});



let menuBtn = $.getElementById("menu-btn");
let navbar = $.querySelector(".header .flex .navbar");
menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
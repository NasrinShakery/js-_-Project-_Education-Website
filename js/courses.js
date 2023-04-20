
const $ = document;
let mainSection = $.querySelector("#main")

document.addEventListener('DOMContentLoaded', function(){

  let theme = localStorage.getItem("theme")
  if (theme === "dark") {
    document.body.classList.add('dark')
    console.log(theme);
  }

  const urlParams = new URLSearchParams(window.location.search)
  const course = urlParams.get("course_title");
  console.log(course);
  mainSection.insertAdjacentHTML("afterbegin", 
    `
      <h1>آموزش ${course}</h1>
    `
  )




    
  
  });

// -------------- For Dark & Light Mood ----------
const switchElem = $.querySelector("#switch")
switchElem.addEventListener("click", function(){
  $.body.classList.toggle("dark");
  if ($.body.className.includes("dark")) {
    localStorage.setItem("theme", "dark")
  }else{
    localStorage.setItem("theme", "light")
  }
})
document.addEventListener('DOMContentLoaded', function(){
  // fetch("../json/x.json").then  (res => res.json())
  // .then(res=> loadData(res))
  
  

  

});
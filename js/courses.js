
document.addEventListener('DOMContentLoaded', function(){
    const urlParams = new URLSearchParams(window.location.search)
    const course = urlParams.get("course-title");
    console.log(course);




    
  
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
  
  let theme = localStorage.getItem("theme")
  if (theme === "dark") {
    document.body.classList.add('dark')
    console.log(theme);
  }

  

});
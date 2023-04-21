const $ = document;
let mainSection = $.querySelector("#main");
let courseWrapper = $.querySelector(".course-wrapper");

document.addEventListener("DOMContentLoaded", function () {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
    console.log(theme);
  }

  fetch("../json/x.json")
    .then((res) => res.json())
    .then((res) => {
      console.log(res.courses);
      let index = urlId() - 1;
      console.log(index);
      createLessonsBox(res.courses, index)
    });

  // const urlParams = new URLSearchParams(window.location.search);
  // const course = urlParams.get("course_title");
  // console.log(course);
  // console.log(urlParams.get("id"));
  // mainSection.insertAdjacentHTML(
  //   "afterbegin",
  //   `<h1>آموزش ${course}</h1>`
  // );
  // courseWrapper.insertAdjacentHTML(
  //   "beforeend",
  //   `<div class="course">
  //     <div id="imgBox">
  //       <img src="../images/grapy-man-studies-online-1.png" alt="" />
  //     </div>
  //     <h3 class="course-title"><a href=""> درس 1</a></h3>
  //     <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و</p>
  //   </div>`
  // );
});

function urlId(){
  const urlParams = new URLSearchParams(window.location.search);
  const course = urlParams.get("course_title");
  console.log(course);
  let courseID = urlParams.get("id");
  console.log(courseID);
  mainSection.insertAdjacentHTML(
    "afterbegin",
    `<h1>آموزش ${course}</h1>`
  );
  return courseID
}

function createLessonsBox(courses, indexOfLesson){
  // console.log(courses);
  // console.log(indexOfLesson);
  // console.log(courses[indexOfLesson]);
  // console.log(courses[indexOfLesson].lessons);
  let lessonsArray = courses[indexOfLesson].lessons;
  lessonsArray.forEach(lesson => {
    // console.log(lesson);
    // console.log(lesson.lesson_name);
    courseWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="course">
        <div id="imgBox">
          <img src="../images/grapy-man-studies-online-1.png" alt="" />
        </div>
        <h3 class="course-title"><a href="">${lesson.lesson_name}</a></h3>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و</p>
      </div>`
    );
  });
}

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
document.addEventListener("DOMContentLoaded", function () {
  // fetch("../json/x.json").then  (res => res.json())
  // .then(res=> loadData(res))
});



let menuBtn = $.getElementById("menu-btn");
let navbar = $.querySelector(".header .flex .navbar");
menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

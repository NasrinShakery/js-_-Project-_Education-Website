const $ = document;

let menuBtn = $.getElementById('menu-btn');
let navbar = $.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// swiper with link
// var swiper = new Swiper(".course-slider", {
//     pagination: {
//       el: ".swiper-pagination",
//     },
// });
var swiper = new Swiper(".course-slider", {
    // slidesPerView: 1,
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

//  

var swiper = new Swiper(".teachers-slider", {
    // slidesPerView: 1,
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".reviews-slider", {
    // slidesPerView: 1,
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  //------------------------------
  window.onload = ()=>{
    $.querySelectorAll('.swiper-pagination-bullet').forEach( item => {
        item.style.backgroundColor = 'white';
    }) 
    $.querySelectorAll('.swiper-pagination-bullet-active').forEach(item=>{
        item.style.backgroundColor = '#00E77F';
    })
  }
  //------------------------------
// khai báo nhiều hàm sử dụng cùng chức năng phải khai báo tổng
// window.onscroll = function () { 
//   stickyNav();
//   backTopBtn();
// }

// Sticky Nav
// dùng jquery có thể mix với js
$(window).scroll(function(){
  if (window.pageYOffset > 0){
    $("nav").addClass("stickyNav");
  } else {
    $("nav").removeClass("stickyNav");
  }
});

// var navBar = document.querySelector("nav")
// function stickyNav() {
//   if (window.pageYOffset > 0) {
//     navBar.classList.add("stickyNav")
//   } else {
//     navBar.classList.remove("stickyNav")
//   }
// }

// Back to top
$(window).scroll(function(){
  if (window.pageYOffset > 500){
    $(".top").addClass("backTopBtn");
  } else {
    $(".top").removeClass("backTopBtn");
  }
});

// var backTop = document.querySelector(".top")
// function backTopBtn() {
//   if (window.pageYOffset > 500) {
//     backTop.classList.add("backTopBtn")
//   } else {
//     backTop.classList.remove("backTopBtn")
//   }
// }

// Dropdown Btn Main

$("#dropbtn-main").click(function(){
  $(".dropdown-content-main").slideToggle();
});

// Dropdown Btn Hidden

$("#dropbtn-hidden").click(function(){
  $("#dropin").toggleClass();
  $("#dropout").toggleClass("show");
  $(".drop-content-hidden").slideToggle();
});


//

// Click Slide

let slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
})

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// select next slide button
let nextSlide = document.querySelector(".next");

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {

  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
let prevSlide = document.querySelector(".prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// Auto Slide


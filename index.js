window.onscroll = function() {
// Sticky Nav
  let navBar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navBar.classList.add("stickyNav");
  } else {
    navBar.classList.remove("stickyNav");
  }
  
// Backtotop
  let backTop = document.getElementsByClassName("top")[0];
  if (window.pageYOffset > 500) {
    backTop.classList.add("backTopBtn");
  } else {
    backTop.classList.remove("backTopBtn");
  }
}

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
nextSlide.onclick = function () {

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
};

// select next slide button
let prevSlide = document.querySelector(".prev");

// add event listener and navigation functionality
prevSlide.onclick = function () {
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
};

// Auto Slide

//

// dùng jquery có thể mix với js
$(document).ready(function(){

  //thêm/xóa class cho nav khi scroll
  // $(window).scroll(function(){
  //   if (window.pageYOffset > 0){
  //     $("nav").addClass("stickyNav");
  //   } else {
  //     $("nav").removeClass("stickyNav");
  //   }
  // });

  //thêm/xóa class cho nút backtotop
  // $(window).scroll(function(){
  //   if (window.pageYOffset > 500){
  //     $(".top").addClass("backTopBtn");
  //   } else {
  //     $(".top").removeClass("backTopBtn");
  //   }
  // });

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
});
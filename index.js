window.onscroll = function () {
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

//
let qouteblock = document.querySelectorAll(".customer__content");

// loop through slides and set each slides translateX
qouteblock.forEach((qoute, indx) => {
  qoute.style.transform = `translateX(${indx * 100}%)`;
})

// current slide counter
let curQoute = 0;
// maximum number of slides
let maxQoute = qouteblock.length - 1;

// select next slide button
let nextQoute = document.querySelector(".ctm__dot--2");

// add event listener and navigation functionality
nextQoute.onclick = function () {

  // check if current slide is the last and reset current slide
  if (curQoute === maxQoute) {
    curQoute = 0;
  } else {
    curQoute++;
  }

  //   move slide by -100%
  qouteblock.forEach((qoute, indx) => {
    qoute.style.transform = `translateX(${100 * (indx - curQoute)}%)`;
  });
};

// select next slide button
let prevQoute = document.querySelector(".ctm__dot--1");

// add event listener and navigation functionality
prevQoute.onclick = function () {
  // check if current slide is the first and reset current slide to last
  if (curQoute === 0) {
    curQoute = maxQoute;
  } else {
    curQoute--;
  }

  //   move slide by 100%
  qouteblock.forEach((qoute, indx) => {
    qoute.style.transform = `translateX(${100 * (indx - curQoute)}%)`;
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
  //JQ
  $("#dropbtn-main").click(function(){
    $(".dropdown-content-main").slideToggle();
  });
  //JS

  // Dropdown Btn Hidden
  //JQ
  $("#dropbtn-hidden").click(function(){
    $("#dropin").toggleClass();
    $("#dropout").toggleClass("show");
    $(".drop-content-hidden").slideToggle();
  });
  //JS


  //mở/đóng search dialog = JQ =
  // $(".search-btn").click(function(){
  //   $("#search-dialog").slideToggle();
  // });

  //đóng search dialog bằng nút trong dialog = JQ =
  // $("#dialog-closebtn").click(function(){
  //   $("#search-dialog").slideUp();
  // });

  //mở coplapse content
  //JQ
  $(".coplapse__btn").click(function(){
    $(this).toggleClass("coplapse__btn--gb");
    $(this).children(".coplapse__down").toggleClass("hide");
    $(this).children(".coplapse__up").toggleClass("show");
    $(this).next().slideToggle();
  });
});

//mở search dialog = JS =

let searchBtn = document.getElementsByClassName("search-btn");
//dùng loop để lấy tất cả các search-btn
for (let i = 0; i < searchBtn.length; i++) {
  searchBtn[i].onclick = function () {
    searchDialog.style.transform = "translateY(-100%)";
    searchDialog.style.display = "block";
    let showSearchDialog = function () {
      searchDialog.style.transform = "translateY(0%)";
    };
    setTimeout(showSearchDialog , 0)
  }
}

//đóng search dialog bằng nút trong dialog = JS =

let closeDialog = document.getElementById("dialog-closebtn");
let searchDialog = document.getElementById("search-dialog");

closeDialog.onclick = function () {
  if (window.innerWidth < 900) {
    searchDialog.style.transform = "translateY(-100%)";
  } else {
    searchDialog.style.transform = "translateX(100%)";
  }
  let resetTransform = function () {
    searchDialog.style.display = "none";
    if (searchDialog.style.display == "none") {
      searchDialog.style.transform = "translateY(0%)";
    }
  }
  setTimeout(resetTransform , 1000)
}
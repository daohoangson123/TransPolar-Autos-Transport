// ===JS===
window.onscroll = function () {
// StickyNav
  let navBar = document.getElementById("navbar");
  if (window.pageYOffset > 0 && (!navBar.classList.contains("dark-theme"))) { //kiểm tra navbar có đang ở darkmode ko
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

//Drop Menu Main/ Hidden



//Open Search dialog
let searchDialog = document.getElementById("search-dialog");

let searchBtn = document.getElementsByClassName("search-btn");
//dùng loop để lấy tất cả các search-btn
for (let i = 0; i < searchBtn.length; i++) {
  searchBtn[i].onclick = function () {
    searchDialog.style.transform = "translateY(-100%)"; // đưa về Y-100%
    searchDialog.style.display = "block"; // chuyển display
    let showSearchDialog = function () {
      searchDialog.style.transform = "translateY(0%)"; // trả về Y 0%
    };
    setTimeout(showSearchDialog , 0); // setTimeout để nhận transition
  }
}

//đóng search dialog bằng nút trong dialog = JS =

let closeDialog = document.getElementById("dialog-closebtn");

closeDialog.onclick = function () {
  if (window.innerWidth < 900) {
    searchDialog.style.transform = "translateY(-100%)"; // đưa về Y-100%
  } else {
    searchDialog.style.transform = "translateX(100%)"; // đưa về X 100%
  }
  let resetTransform = function () { // reset lại display và Y
    searchDialog.style.display = "none";
    if (searchDialog.style.display == "none") {
      searchDialog.style.transform = "translateY(0%)";
    }
  }
  setTimeout(resetTransform , 1000);
}

// Mở video dialog
let videoDialog = document.getElementById("video-dialog");
let openVideoDialog = document.getElementById("open-video");
let videoContent = document.getElementById("video-content");

if (openVideoDialog) {
  openVideoDialog.onclick = function () {
      videoDialog.style.display = "block";
      let showVideo = function () {
        videoContent.style.transform = "scale(1) translate(-50%, -50%)";
      };
      setTimeout(showVideo, 100);
  } 
}

let closeVideoDialog = document.getElementById("video-close");

if (closeVideoDialog) {
  closeVideoDialog.onclick = function () { // reset display
    videoContent.style.transform = "scale(0)";
    let resetDisplay = function () {
      videoDialog.style.display = "none";
    };
    setTimeout(resetDisplay, 500);
  }
}

//Copllapsible content

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
if (nextSlide) {
nextSlide.onclick = function () {
// check if current slide is the last and reset current slide
if (curSlide === maxSlide) {
  curSlide = 0;
} else {
  curSlide++;
}

// move slide by -100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
});
};
};


// select next slide button
let prevSlide = document.querySelector(".prev");

// add event listener and navigation functionality
if (prevSlide) {
prevSlide.onclick = function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  // move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
};
};

// Click Testimonial
let qouteblock = document.querySelectorAll(".customer__content");

// loop through slides and set each slides translateX
qouteblock.forEach((qoute, indx) => {
  qoute.style.transform = `translateX(${indx * 100}%)`;
})

// current slide counter
let curQoute = 0;
// maximum number of slides
let maxQoute = qouteblock.length - 1;


let nextQoute = document.querySelector(".ctm__dot--2");

if (nextQoute) {
nextQoute.onclick = function () {
  // check if current slide is the last and reset current slide
  if (curQoute === maxQoute) {
    curQoute = 0;
  } else {
    curQoute++;
  }

  // move slide by -100%
  qouteblock.forEach((qoute, indx) => {
    qoute.style.transform = `translateX(${100 * (indx - curQoute)}%)`;
  });
};
};

// select next slide button
let prevQoute = document.querySelector(".ctm__dot--1");

if (prevQoute) {
prevQoute.onclick = function () {
  // check if current slide is the first and reset current slide to last
  if (curQoute === 0) {
    curQoute = maxQoute;
  } else {
    curQoute--;
  }

  // move slide by 100%
  qouteblock.forEach((qoute, indx) => {
    qoute.style.transform = `translateX(${100 * (indx - curQoute)}%)`;
  });
};
};
// Auto Slide

//
let reveals = document.querySelectorAll(".reveal");

function reveal() {
  for (var i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("showcontent");
    }
    // else {
    //   reveals[i].classList.remove("showcontent");
    // }
  }
}

if (reveals) {
  window.addEventListener("scroll", reveal);
}

//

let counterUp = document.querySelectorAll(".abt-sect2__counter");

function counterRun() {
  for (var i = 0; i < counterUp.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = counterUp[0].getBoundingClientRect().top;
    let elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      counterUp[i].classList.add("counter");
    } else {
      counterUp[i].classList.remove("counter");
    }
  }
}

if (counterUp) {
  window.addEventListener("scroll", counterRun);
}

// ===JQ=== jquery có thể mix với js
$(document).ready(function(){

  //StickyNavbar
  // $(window).scroll(function(){
  //   if (window.pageYOffset > 0){
  //     $("nav").addClass("stickyNav");
  //   } else {
  //     $("nav").removeClass("stickyNav");
  //   }
  // });

  // backtotop
  // $(window).scroll(function(){
  //   if (window.pageYOffset > 500){
  //     $(".top").addClass("backTopBtn");
  //   } else {
  //     $(".top").removeClass("backTopBtn");
  //   }
  // });

  // Dropdown Menu Main = JQ =
  $("#dropbtn-main").click(function(){
    $(".dropdown-content-main").slideToggle();
  });

  // Dropdown Menu Hidden = JQ =
  $("#dropbtn-hidden").click(function(){
    $("#dropin").toggleClass();
    $("#dropout").toggleClass("show");
    $(".drop-content-hidden").slideToggle();
  });

  //mở/đóng search dialog = JQ =
  // $(".search-btn").click(function(){
  //   $("#search-dialog").slideToggle();
  // });

  //đóng search dialog bằng nút trong dialog = JQ =
  // $("#dialog-closebtn").click(function(){
  //   $("#search-dialog").slideUp();
  // });

  //Dark/Light Btn
  $(".dark-btn").click(function(){
    $(".fa-moon").toggleClass("hide");
    $(".fa-sun").toggleClass("show");
    $("body, #navbar, .dropdown-content a, #search, .search__div, .about__mid, #services, .ser-layout2__items .ser-l1-items__content a, .ser-layout2__body--layout, .services-button, .article, .abt-l2-sub__content--sect1 .abt-l2-sub__text a, .abt-sect4__text a, .about__sect5, .services__sect2").toggleClass("dark-theme");
    if ($("#navbar").hasClass("dark-theme")){
      $("#navbar").removeClass("stickyNav");
    } else if (window.pageYOffset > 0) {
      $("#navbar").addClass("stickyNav");
    }
  });

  //Copllapsible content
  $(".copllapse__btn").click(function(){
    $(this).toggleClass("copllapse__btn--gb");
    $(this).children(".copllapse__down").toggleClass("hide");
    $(this).children(".copllapse__up").toggleClass("show");
    $(this).next().slideToggle();
  });
});


var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  slidesPerView: 2,
  spaceBetween: 32,
  loop: true,
  breakpoints: {
    1050: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".myswiper", {
  cssMode: true,
  slidesPerView: 2,
  spaceBetween: 32,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  mousewheel: true,
  keyboard: true,
});

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});


// STICKY HEADER

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
let header = document.querySelector(".header-box");
let headerBox = document.querySelector(".header");

// Get the offset position of the navbar
let sticky = headerBox.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
      if(!headerBox.classList.contains("sticky") && !document.body.classList.contains("nav-open")){
        headerBox.classList.add("sticky");
}
  } else {
      if(headerBox.classList.contains("sticky") && !document.body.classList.contains("nav-open")){
        headerBox.classList.remove("sticky");
   }
  }
}

// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById(".header-box");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
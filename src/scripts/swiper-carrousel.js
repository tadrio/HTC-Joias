import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".main-banner", {
  direction: "horizontal",

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperFeatures = new Swiper(".features-wrapper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1:{
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 4,
    },
    } 
});

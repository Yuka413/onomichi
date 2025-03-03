// ハンバーガーメニュー
$(".l-header__open").on("click", function () {
  if ($(".l-header__open-bar").hasClass("is-active")) {
    $(".l-header__drawer").removeClass("is-checked");
    $(".l-header__open-bar").removeClass("is-active");
  } else {
    $(".l-header__drawer").addClass("is-checked");
    $(".l-header__open-bar").addClass("is-active");
  }
});

// スワイパー
const swiper = new Swiper(".p-onomichi__swiper", {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 10,
  speed: 6000,
  followFinger: false,
  // autoplay: {
  //   delay: 0,
  // },
  breakpoints: {
    768: {
      spaceBetween: 20,

    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const spotSwiper = new Swiper(".p-spots__swiper", {
  // Optional parameters
  loop: true,
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  allowTouchMove: true,


  breakpoints: {
    768: {
      spaceBetween: 32,
      slidesPerView: "auto",

    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

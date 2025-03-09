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
  freeMode: true,

  breakpoints: {
    768: {
      spaceBetween: 32,
      slidesPerView: "auto",
      centeredSlides: false,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 自作ボタンクリックでスワイプ
const $prevButton = $("#js-prevButton");
const $nextButton = $("#js-nextButton");

$prevButton.on("click", function () {
  spotSwiper.slidePrev();
});
$nextButton.on("click", function () {
  spotSwiper.slideNext();
});

// modal
const modalItems = document.querySelectorAll(".c-benefit");
console.log(modalItems);
modalItems.forEach((item) => {
  const dialog = item.querySelector(".c-dialog");
  if (dialog) {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      dialog.showModal();
    });
    const closeButton = dialog.querySelector(".c-dialog__button");
    if (closeButton) {
      closeButton.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log("閉じる");
        dialog.close();
      });
    }
  }
});

// アコーディオン
$(".js-accordion").on("click", function (e) {
  e.preventDefault();
  if ($(this).parent().hasClass("is-open")) {
    $(this).parent().removeClass("is-open");
    $(this).next().slideUp();
  } else {
    $(this).parent().addClass("is-open");
    $(this).next().slideDown();
  }
});

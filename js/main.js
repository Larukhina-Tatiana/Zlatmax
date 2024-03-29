// !Спойлер
$(document).ready(function () {
  $(".header-center__phone-btn").click(function (event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

$(".menu__btn").on("click", function () {
  $(".menu").toggleClass("menu-open");
});

$(".menu__btn").on("click", function () {
  $(".menu__btn").toggleClass("menu-open");
});

document.addEventListener("click", documentActions);
// смотрит сколько категорий и добавляет класс с цифрой в html
const manuBlocks = document.querySelectorAll(".header-catalog__submenu-block");
if (manuBlocks.length) {
  manuBlocks.forEach((menuBlock) => {
    const manuBlockItems = menuBlock.querySelectorAll(
      ".header-catalog__submenu-category"
    ).length;
    menuBlock.classList.add(`header-catalog__submenu-block--${manuBlockItems}`);
  });
}

// связь между ссылкой и блоком
function documentActions(e) {
  const targetElement = e.target;
  if (targetElement.closest("[data-parent]")) {
    const subMenuId = targetElement.dataset.parent
      ? targetElement.dataset.parent
      : null;
    const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);
    const catalogMenu = document.querySelector(".header-catalog__submenu");
    // добавляем классы для открытия по клику
    if (subMenu) {
      const activeLink = document.querySelector("._submenu-active");
      const activeBlock = document.querySelector("._submenu-open");

      if (activeLink && activeLink !== targetElement) {
        activeLink.classList.remove("_submenu-active");
        activeBlock.classList.remove("_submenu-open");
        document
          .querySelector(".header-catalog__submenu")
          .classList.remove("catalog__submenu-active");
      }
      document
        .querySelector(".header-catalog__submenu")
        .classList.toggle("catalog__submenu-active");
      targetElement.classList.toggle("_submenu-active");
      subMenu.classList.toggle("_submenu-open");
    } else {
      console.log("Нет такого подменю :('");
    }
    e.preventDefault();
  }
  if (targetElement.closest(".header-top__menu-link--catalog")) {
    document.documentElement.classList.add("catalog-open");
    e.preventDefault();
  }
  if (targetElement.closest(".header-catalog__back")) {
    document.documentElement.classList.remove("catalog-open");

    document.querySelector("._submenu-active")
      ? document
          .querySelector("._submenu-active")
          .classList.remove("_submenu-active")
      : null;
    document.querySelector("._submenu-open")
      ? document
          .querySelector("._submenu-open")
          .classList.remove("_submenu-open")
      : null;
    e.preventDefault();
  }
  if (targetElement.closest(".header-catalog__submenu-back")) {
    document.querySelector("._submenu-active")
      ? document
          .querySelector("._submenu-active")
          .classList.remove("_submenu-active")
      : null;
    document.querySelector("._submenu-open")
      ? document
          .querySelector("._submenu-open")
          .classList.remove("_submenu-open")
      : null;
    e.preventDefault();
  }
}

let menuBtn = document.querySelector(".menu__btn");
if (menuBtn) {
  menuBtn.addEventListener("click", function (e) {
    // if (bodyLockStatus) {
    //   bodyLockToggle();
    document.documentElement.classList.toggle("menu-open");
    if (document.documentElement.classList.contains("catalog-open")) {
      document.documentElement.classList.remove("catalog-open");
    }
    // }
  });
}

if ($(window).width() < 991.98) {
  $(".header-top__menu-list").appendTo($(".menu__body"));
  $(".header-center__phone").appendTo($(".menu"));
  $(".header-top__user").appendTo($(".menu"));
  $(".header-center__favorite").appendTo($(".menu"));
  $(".header-center__card").appendTo($(".menu"));
  $(".header-center__phone-callback").appendTo($(".header-center__phone-list"));
  // $(".products-block__link-more").appendTo($(".products-block__item"));
}

if ($(window).width() < 1150.01) {
  $(".social").appendTo($(".footer__body-wrapper--social"));
}

const swiperTvo = new Swiper(".main-block__slider", {
  // loop: true,
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 50,
  // speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".controll-main-block__dotts",
    clickable: true,
  },
  on: {
    init: function (swiper) {
      const allSlides = document.querySelector(".fraction-controll__all");

      allSlides.innerHTML = swiper.slides.length;
    },
    slideChange: function (swiper) {
      const currentSlide = document.querySelector(
        ".fraction-controll__current"
      );
      currentSlide.innerHTML =
        swiper.realIndex + 1 < 10
          ? `0${swiper.realIndex + 1}`
          : swiper.realIndex + 1;
    },
  },
});

const swiper = new Swiper(".products-slider__slider", {
  loop: true,
  observer: true,
  observeParents: true,
  watchOverflow: true,
  slidesPerView: 4,
  spaceBetween: 40,
  // speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".products-slider__dotts",
    clickable: true,
    dinamicBullets: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
      // autoHeight: true,
    },

    630: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1320: {
      slidesPerView: 4,
      spaceBetween: 30,
      // autoHeight: true,
    },
    on: {
      init: function (swiper) {},
    },
  },
});

const swiper1 = new Swiper(".new-products__slider", {
  loop: true,
  observer: true,
  observeParents: true,
  watchOverflow: true,
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".new-products__dotts",
    clickable: true,
    dinamicBullets: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },

    799: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1330: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  on: {
    init: function (swiper1) {},
  },
});

var swiper2 = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    1330: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});
var swiper3 = new Swiper(".mySwiper2", {
  spaceBetween: 16,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  thumbs: {
    swiper: swiper2,
  },
});

// !Рейтинг
// const ratings = document.querySelectorAll(".rating");
// if (ratings.length > 0) {
//   initRatings();
// }
// // Основная функция
// function initRatings() {
//   let ratingActive, ratingValue;
//   // Бегаем по всем рейтингам на странице
//   for (let index = 0; index < ratings.length; index++) {
//     const rating = ratings[index];
//     initRating(rating);
//   }
// }
// //  Инициализируем конкретный рейтинг
// function initRating(rating) {
//   initRatingVars(rating);

//   setRatingActiveWidth();
//   if (rating.classList.contains("rating_set")) {
//     setRating(rating);
//   }
// }

// // Инициализация переменных
// function initRatingVars(rating) {
//   ratingActive = rating.querySelector(".rating__active");
//   ratingValue = rating.querySelector(".rating__value");
// }
// // Изменяем ширину активных звёзд
// function setRatingActiveWidth(index = ratingValue.innerHTML) {
//   const ratingActiveWidth = index / 0.05;
//   ratingActive.style.width = "${ratingActiveWidth}%";
// }

// // Возможность указывать оценку
// function setRating(rating) {
//   const ratingItems = rating.querySelectorAll(".rating__item");
//   for (let index = 0; index < ratingItems.length; index++) {
//     const ratingItem = ratingItems[index];
//     ratingItem.addEventListener("mouseenter", function (e) {
//       // Обновление переменных
//       initRatingVars(rating);
//       // Обновление активных звезд
//       setRatingActiveWidth(ratingItem.value);
//     });
//     // Убрали мышь
//     ratingItem.addEventListener("mouseleave", function (e) {
//       // Обновление активных звезд
//       setRatingActiveWidth();
//     });
//     // Кликнули на рейтинге
//     ratingItem.addEventListener("click", function (e) {
//       // Обновление переменных
//       initRatingVars(rating);

//       if (rating.dataset.ajax) {
//         // Отаравить на сервер
//         setRatingValue(ratingItem.value, rating);
//       } else {
//         //  Отобразить указанную оценку
//         ratingValue.innerHTML = index + 1;

//         // Обновление активных звезд
//         setRatingActiveWidth();
//       }

//     });
//   }
// }

const parent_original = document.querySelector(".header");
const parent = document.querySelector(".menu__body");
const item = document.querySelector(".header-catalog");

window.addEventListener("resive", function (event) {
  if (viewport_width <= 992) {
    if (!item.classList.contains("done")) {
      parent.insertBefore(item, parent.children[1]);
      item.classList.add("done");
    }
  } else {
    if (item.classList.contains("done")) {
      parent_original.insertBefore(item, parent_original.children[2]);
      item.classList.remove("done");
    }
  }
});

// открытие-закрытие заголовков footer__info-list
$(".footer__body-title").on("click", function () {
  $(this).next().slideToggle();
  $(this).toggleClass("footer__body-title--active");
});

$(".filter-style").styler();

$(".js-range-slider").ionRangeSlider({
  skin: "round",
  type: "double",
  min: 1000,
  max: 5000,
});

// const rangeItems = document.querySelectorAll("[data-range]");
// if (rangeItems.length) {
//   rangeItems.forEach((rangeItem) => {
//     const fromValue = rangeItem.querySelector("[data-range-from]");
//     const toValue = rangeItem.querySelector("[data-range-to]");
//     const item = rangeItem.querySelector("[data-range-item]");
//     noUiSlider.create(item, {
//       start: [Number(fromValue.value), Number(toValue.value)],
//       connect: true,
//       range: {
//         min: [Number(fromValue.dataset.rangeFrom)],
//         max: [Number(toValue.dataset.rangeTo)],
//       },
//     });
//   });
// }

// const rangeItems = document.querySelectorAll("[data-range]");

// const fromValue = rangeItem.querySelector("[data-range-from]");
// const toValue = rangeItem.querySelector("[data-range-to]");
// const slider = rangeItem.querySelector("[data-range-item]");
// noUiSlider.create(item1, {
//   start: [Number(fromValue.value), Number(toValue.value)],
//   connect: true,
//   range: {
//     min: [Number(fromValue.dataset.rangeFrom)],
//     max: [Number(toValue.dataset.rangeTo)],
//   },
// });

// const priceSlider = document.querySelector("#range");
// if (priceSlider) {
//   let textFrom = priceSlider.getAttribute('data-from');
//   let textTo = priceSlider.getAttribute('data-to');
//   noViSlider.create(priceSlider, {
//     start: 0,
//     connect: [true, false],
//     range: {
//       'min': [1000],
//       'max': [5000]
//     }
//   });

// }

const rangeSliderInit = () => {
  // создаем функцию инициализации слайдера
  const range = document.getElementById("range"); // Ищем слайдер
  const inputMin = document.getElementById("min"); // Ищем input с меньшим значнием
  const inputMax = document.getElementById("max"); // Ищем input с большим значнием

  if (!range || !inputMin || !inputMax) return; // если этих элементов нет, прекращаем выполнение функции, чтобы не было ошибок

  const inputs = [inputMin, inputMax]; // создаем массив из меньшего и большего значения

  noUiSlider.create(range, {
    // инициализируем слайдер
    start: [2000, 5000], // устанавливаем начальные значения
    tooltips: [true, true],
    connect: true, // указываем что нужно показывать выбранный диапазон
    range: {
      // устанавливаем минимальное и максимальное значения
      min: 0,
      max: 5000,
    },
    step: 1, // шаг изменения значений
  });

  range.noUiSlider.on("update", function (values, handle) {
    // при изменений положения элементов управления слайдера изменяем соответствующие значения
    inputs[handle].value = parseInt(values[handle]);
  });

  inputMin.addEventListener("change", function () {
    // при изменении меньшего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener("change", function () {
    // при изменении большего значения в input - меняем положение соответствующего элемента управления
    range.noUiSlider.set([null, this.value]);
  });
};

const init = () => {
  rangeSliderInit(); // запускаем функцию инициализации слайдера
};

window.addEventListener("DOMContentLoaded", init); // запускаем функцию init, когда документ будет загружен и готов к взаимодействию

// Аккардеон заголовки
$(".title-form, .aside__btn, .aside__form-filter-btn-extra").on(
  "click",
  function () {
    $(this).toggleClass("title-form--active");
    $(this).next().slideToggle("200");
  }
);

// ==================================
// Counter
// ==================================
function increaseCount(e, el) {
  var input = el.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}
function decreaseCount(e, el) {
  var input = el.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}

// ! Tabs
$(".tabs__link").on("click", function (e) {
  e.preventDefault();

  $($(this).siblings()).removeClass("tabs__link--active");

  $($(this).closest(".tabs-wrapper").siblings().find("li")).removeClass(
    "tabs__content--active"
  );

  $(this).addClass("tabs__link--active");
  $($(this).attr("href")).addClass("tabs__content--active");
});

// Иконка фаворит становиться залитой

$(".comments__favorite").on("click", function () {
  $(this).toggleClass("comments__favorite--active");
});

// Звёздный рейтинг
$(".rate-yo").rateYo({
  ratedFill: "#e8aa31",
  spacing: "7px",
  normalFill: "#ABABAB",
});

// Этот код создаёт слайдер с использованием библиотеки Swiper на элементе с классом .first-screen__slider, если такой элемент существует на странице.

if (document.querySelector(".first-screen__slider")) {
  var swiper = new Swiper(".first-screen__slider", {
    pagination: {
      el: ".first-screen__slider .swiper-pagination",
      clickable: true,
    },
  });
}


if (document.querySelector(".partners__slider")) {
  var swiper = new Swiper(".partners__slider", {
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".partners__slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      550: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });
}

if (document.querySelector(".delivery")) {
  var swiper = new Swiper(".delivery .swiper", {
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".delivery .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      550: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 32,
      },
    },
  });
}

if (document.querySelector(".licenses-slider .swiper")) {
  var swiper = new Swiper(".licenses-slider .swiper", {
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".licenses-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });
}

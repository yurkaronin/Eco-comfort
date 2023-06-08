// Этот код создаёт слайдер с использованием библиотеки Swiper на элементе с классом .first-screen__slider, если такой элемент существует на странице.

// Проверяем, существует ли элемент с классом '.first-screen__slider' на странице.
if (document.querySelector(".first-screen__slider")) {
  // Создаём новый экземпляр Swiper для слайдера с указанными настройками.
  var swiper = new Swiper(".first-screen__slider", {
    // Конфигурация пагинации слайдера.
    pagination: {
      // Указываем элемент, который будет использоваться для пагинации.
      el: ".first-screen__slider .swiper-pagination",
      // Делаем пагинацию кликабельной.
      clickable: true,
    },
  });
}

// В этом скрипте используется библиотека Swiper, которая является мощным инструментом для создания слайдеров и каруселей.
// Элемент с классом .first-screen__slider становится контейнером слайдера.
// Внутри него ожидается структура, соответствующая требованиям Swiper.
// Пагинация (индикаторы текущего слайда) будет располагаться внутри контейнера слайдера, в элементе с классом .swiper-pagination.
// Этот элемент становится кликабельным, что позволяет пользователю переходить к определенному слайду, нажимая на соответствующий индикатор пагинации.

if (document.querySelector(".partners__slider")) {
  var swiper = new Swiper(".partners__slider", {
    // slidesPerView: 4,
    // spaceBetween: 32,
    grabCursor: true,
    pagination: {
      el: ".partners__slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      // when window width is >= 480px
      550: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      // when window width is >= 640px
      1024: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });
}

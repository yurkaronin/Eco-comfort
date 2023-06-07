// Этот код создаёт слайдер с использованием библиотеки Swiper на элементе с классом .first-screen__slider, если такой элемент существует на странице.

// Проверяем, существует ли элемент с классом '.first-screen__slider' на странице.
if (document.querySelector('.first-screen__slider')) {
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

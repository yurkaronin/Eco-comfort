// Этот скрипт присваивает обработчики событий для "mouseover" и "mouseout" для всех элементов на странице, которые имеют класс .button.

// Инициализация переменной, которая хранит список всех кнопок на странице.
var buttons = document.querySelectorAll(".button");

// Применение функции ко всем кнопкам, найденным в предыдущем шаге.
buttons.forEach(function (button) {
  // Добавление обработчика события "mouseover" (курсор находится над элементом) для каждой кнопки.
  button.addEventListener("mouseover", function (e) {
    // Получение информации о положении кнопки на странице.
    var pos = button.getBoundingClientRect();
    var elem_left = pos.left;
    var elem_top = pos.top;

    // Определение позиции курсора относительно кнопки.
    var Xinner = e.clientX - elem_left;
    var Yinner = e.clientY - elem_top;

    // Вычисление максимального расстояния до углов кнопки.
    var maxDist = Math.max(
      Math.sqrt(Math.pow(Xinner, 2) + Math.pow(Yinner, 2)),
      Math.sqrt(Math.pow(button.clientWidth - Xinner, 2) + Math.pow(Yinner, 2)),
      Math.sqrt(
        Math.pow(Xinner, 2) + Math.pow(button.clientHeight - Yinner, 2)
      ),
      Math.sqrt(
        Math.pow(button.clientWidth - Xinner, 2) +
          Math.pow(button.clientHeight - Yinner, 2)
      )
    );

    // Выбор элемента для декорирования и задание его параметров в соответствии с координатами курсора.
    var decoration = button.querySelector(".decorate");
    decoration.style.left = Xinner + "px";
    decoration.style.top = Yinner + "px";
    decoration.style.width = maxDist * 2 + "px";
    decoration.style.height = maxDist * 2 + "px";
  });

  // Добавление обработчика события "mouseout" (курсор покидает элемент) для каждой кнопки.
  button.addEventListener("mouseout", function (e) {
    // Возвращение декоративного элемента к исходному размеру.
    var decoration = button.querySelector(".decorate");
    decoration.style.width = "0";
    decoration.style.height = "0";
  });
});

// При "mouseover" этот код вычисляет координаты курсора относительно кнопки и изменяет положение и размеры декоративного элемента внутри кнопки, создавая эффект взаимодействия. При "mouseout", декоративный элемент возвращается к исходному состоянию.

// Этот код отвечает за изменение класса у body, в зависимости от положения скролла страницы.
// Он использует requestAnimationFrame для оптимизации производительности и того что бы избежать эффекта "заикания" при прокрутке.

// Инициализируем переменную, которая хранит последнее известное положение прокрутки.
let lastKnownScrollY = 0;

// Инициализируем переменную, которая хранит информацию о том, запрашивается ли в данный момент обновление кадра.
let ticking = false;

// Функция, которая добавляет или убирает класс 'header-sticky' у элемента body, в зависимости от положения прокрутки.
function headerChange() {
  // Получаем текущую позицию прокрутки.
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Если прокрутка больше чем 160 пикселей, то добавляем класс 'header-sticky' к body.
  // Если меньше, то удаляем этот класс.
  if (scrollTop > 160) {
    document.body.classList.add("header-sticky");
  } else {
    document.body.classList.remove("header-sticky");
  }

  // Сбрасываем состояние ticking, т.к. мы только что обработали текущее обновление.
  ticking = false;
}

// Функция, которая запускается при событии прокрутки страницы.
function onScroll() {
  // Запоминаем текущую позицию прокрутки.
  lastKnownScrollY = window.scrollY;

  // Запрашиваем обновление кадра, чтобы обработать текущую позицию прокрутки.
  requestTick();
}

// Функция, которая запрашивает обновление кадра.
function requestTick() {
  // Если обновление кадра еще не запрошено, то мы запрашиваем его.
  if (!ticking) {
    requestAnimationFrame(headerChange);
  }

  // Устанавливаем ticking в true, чтобы показать, что обновление кадра запрошено.
  ticking = true;
}

// Примечание: requestAnimationFrame является веб API, который сообщает браузеру, что вы хотите выполнить анимацию и просит его запланировать обновление кадра перед следующей перерисовкой.
// Это обеспечивает более плавную анимацию по сравнению с setTimeout или setInterval, потому что он синхронизирован с обновлением кадра браузера.

// Этот скрипт отслеживает клик по элементу с классом .menu-button (обычно это кнопка для открытия навигационного меню) и переключает классы isActive и menu-open для разных элементов, обеспечивая функциональность открытия и закрытия навигационного меню.

// Инициализация переменной, которая хранит кнопку меню.
const buttonMenu = document.querySelector('.menu-button');

// Инициализация переменной, которая хранит навигационное меню.
const mainNavigation = document.querySelector('.main-navigation');

// Добавление обработчика событий на кнопку меню.
buttonMenu.addEventListener('click', function () {
  // Переключение класса 'isActive' на кнопке меню.
  // Если класс присутствует - он будет удалён, если отсутствует - добавлен.
  buttonMenu.classList.toggle('isActive');

  // То же самое делаем для навигационного меню.
  mainNavigation.classList.toggle('isActive');

  // И для body переключаем класс 'menu-open'.
  // Этот класс может быть использован для изменения стилей основного контента страницы
  // или блокировки прокрутки при открытом меню.
  document.body.classList.toggle('menu-open');
});

// В общем, этот код обеспечивает интерактивность навигационного меню: при клике на кнопку меню, меню открывается или закрывается, и основное содержимое страницы может изменять свои стили в зависимости от состояния меню.

// Этот код реализует функциональность модального окна.
// Он позволяет открывать и закрывать модальное окно при нажатии на определенные кнопки.

// Получаем все кнопки, которые могут открыть модальное окно.
const dialogButtons = document.querySelectorAll('[data-dialog-button]');
// Получаем элемент overlay, который обычно отображается вместе с модальным окном.
const overlay = document.querySelector('.overlay');

// Инициализируем переменную, которая будет хранить текущее активное модальное окно.
let activeModal = null;

// Проверяем, есть ли кнопки для открытия модального окна на странице.
if (dialogButtons.length > 0) {
  // Получаем все кнопки для закрытия модального окна.
  const closeButtons = document.querySelectorAll('.close-btn');

  // Добавляем обработчики событий для каждой кнопки открытия модального окна.
  dialogButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Предотвращаем стандартное поведение ссылки.
      event.preventDefault();

      // Получаем id модального окна, которое нужно открыть.
      const dialogId = button.getAttribute('data-dialog-button');

      // Находим модальное окно с этим id.
      activeModal = document.querySelector(`[data-dialog-modal='${dialogId}']`);

      // Если такое модальное окно есть, то добавляем класс 'modal-show' к body.
      if (activeModal) {
        document.body.classList.add('modal-show');
      }
    });
  });

  // Добавляем обработчик события на overlay. При клике на overlay закрываем модальное окно.
  if (overlay) {
    overlay.addEventListener('click', () => {
      if (activeModal) {
        document.body.classList.remove('modal-show');
        activeModal = null;
      }
    });
  }

  // Добавляем обработчики событий для каждой кнопки закрытия модального окна.
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (activeModal) {
        document.body.classList.remove('modal-show');
        activeModal = null;
      }
    });
  });
}


// В целом, скрипт работает следующим образом:
// При клике на кнопку с атрибутом data-dialog-button открывается соответствующее модальное окно (элемент с атрибутом data-dialog-modal, значение которого соответствует значению data-dialog-button кнопки).
// При клике на кнопку закрытия (.close-btn) или на overlay модальное окно закрывается.
// При открытии модального окна к body добавляется класс modal-show, который можно использовать для стилизации модального окна или блокировки прокрутки основного содержимого.

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

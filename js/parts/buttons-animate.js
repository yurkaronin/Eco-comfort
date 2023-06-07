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

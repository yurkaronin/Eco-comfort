// функция подключения скриптов
function includeFiles(url) {
  var script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
};

// Основная рабочая область
document.addEventListener("DOMContentLoaded", () => {

  includeFiles("./js/parts/buttons-animate.js");
  includeFiles("./js/parts/sliders.js");
  includeFiles("./js/parts/menu-show.js");
  includeFiles("./js/parts/modals.js");

});

// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener('click', e => console.log(e.target));

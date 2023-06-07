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

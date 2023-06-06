const dialogButtons = document.querySelectorAll('[data-dialog-button]');
const overlay = document.querySelector('.overlay');

let activeModal = null;

if (dialogButtons.length > 0) {
  const closeButtons = document.querySelectorAll('.close-btn');

  dialogButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const dialogId = button.getAttribute('data-dialog-button');
      activeModal = document.querySelector(`[data-dialog-modal='${dialogId}']`);
      if (activeModal) {
        document.body.classList.add('modal-show');
      }
    });
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      if (activeModal) {
        document.body.classList.remove('modal-show');
        activeModal = null;
      }
    });
  }

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (activeModal) {
        document.body.classList.remove('modal-show');
        activeModal = null;
      }
    });
  });
}

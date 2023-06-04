const dialogButtons = document.querySelectorAll('[data-dialog-button]');
const overlay = document.querySelector('.overlay');

if (dialogButtons && overlay) {
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close-btn');

  dialogButtons.forEach(button => {
    button.addEventListener('click', () => {
      const dialogId = button.getAttribute('data-dialog-button');
      const dialog = document.querySelector(`[data-dialog-modal='${dialogId}']`);
      document.body.style.overflow = 'hidden';
      dialog.classList.add('modal-show');
      overlay.classList.add('show');
    });
  });

  overlay.addEventListener('click', () => {
    modals.forEach(modal => {
      modal.classList.remove('modal-show');
    });
    overlay.classList.remove('show');
    document.body.style.overflow = 'auto';
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal');
      document.body.style.overflow = 'auto';
      modal.classList.remove('modal-show');
      overlay.classList.remove('show');
    });
  });
};
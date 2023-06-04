const buttonMenu = document.querySelector('.menu-button');
const headerMobile = document.querySelector('.main-navigation');

buttonMenu.addEventListener('click', function () {
  buttonMenu.classList.toggle('isActive');
  headerMobile.classList.toggle('isActive');
  document.body.classList.toggle('menu-open');

});
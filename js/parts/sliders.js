if (document.querySelector('.first-screen__slider')) {
  var swiper = new Swiper(".first-screen__slider", {
    pagination: {
      el: ".first-screen__slider .swiper-pagination",
      clickable: true,
    },
  });
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  direction: 'horizontal',
  slidesPerView: 3,
  loop: true,
  loopedSlides: 3,
  grabCursor: true,
  freeMode: true,
  spaceBetween: 16,
});




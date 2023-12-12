  const hotSlider = new Swiper(".hot-slider", {
    loop: true,
    speed: 1000,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    slidesPerView: 1.5,
    spaceBetween: 24,
    freeMode: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
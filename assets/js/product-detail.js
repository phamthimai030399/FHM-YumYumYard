const swiper = new Swiper(".detail-img-slider", {
    loop: true,
    // spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 5,
        direction: "vertical",
    breakpoints: {
      768: {
        spaceBetween: 20,
      },
      992: {
        spaceBetween: 25,
      },
    },
  });
const swiperTestimonial = new Swiper(".testimonial-swiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 25,
  slidesPerView: 1.2,
  freeMode: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    navigation: {
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev",
    },
  },
  });

  const swiper2 = new Swiper(".detail-thumb", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".detail-img-next",
      prevEl: ".detail-img-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  
  const play = document.querySelector(".video-play");
play.addEventListener("click", () => {
  document.querySelector(".video-thumbnail").classList.add("hidden");
});
  const hotSlider = new Swiper(".hot-slider", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
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
  const categorySlider = new Swiper(".category-slider", {
    loop: true,
    speed: 1000,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    slidesPerView: 2,
    spaceBetween: 15,
    freeMode: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 4,
      },
    },
  });

  const igSlider = new Swiper(".ig-slider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    speed: 800,
    centeredSlides: false,
    loop: true,
    breakpoints: {
      992: {
        centeredSlides: true,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".ig-next",
      prevEl: ".ig-prev",
    },
  });

  const items = document.querySelectorAll('[data-aos-delay]');

  window.addEventListener('load', () => {
      AOS.init();
      console.log(items);
      items.forEach(item => {
          item.addEventListener('mouseover', () => {
              item.removeAttribute('data-aos-delay');
          });
      });
  });

  var buttonCollapseElements = document.querySelectorAll('.questions .button-collapse');

  buttonCollapseElements.forEach(function(buttonCollapse) {
    buttonCollapse.addEventListener('click', function(event) {
        var parentQuestion = this.closest('.questions');
        
        if (parentQuestion) {
            var isActive = parentQuestion.classList.contains('questions-active');
            
            parentQuestion.classList.toggle('questions-active', !isActive);
            
            var button = parentQuestion.querySelector('.button-collapse');
            var buttonShow = parentQuestion.querySelector('.button-show');
            var buttonHidden = parentQuestion.querySelector('.button-hidden');
            
            var isExpanded = button.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                buttonShow.style.display = 'none';
                buttonHidden.style.display = 'block';
            } else {
                buttonShow.style.display = 'block';
                buttonHidden.style.display = 'none';
            }
        }
        
        event.stopPropagation();
    });
});
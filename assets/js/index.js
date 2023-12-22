const swiperTopbar = new Swiper(".header-topbar-slider", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  //quantity
const plusbtn = document.querySelectorAll(".plus");
plusbtn.forEach((plus) => {
  plus.addEventListener("click", () => {
    const quantity = plus.parentElement.querySelector(".qty");
    if (quantity.value) {
      quantity.value = parseInt(quantity.value) + 1;
    } else quantity.value = 0;
  });
});
const minusbtn = document.querySelectorAll(".minus");
minusbtn.forEach((minus) => {
  minus.addEventListener("click", () => {
    const quantity = minus.parentElement.querySelector(".qty");
    if (parseInt(quantity.value) > 0) {
      quantity.value = parseInt(quantity.value) - 1;
    } else quantity.value = 0;
  });
});


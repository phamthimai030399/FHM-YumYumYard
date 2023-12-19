// Range slider
const filterRangeSlider = document.querySelector(
    "#fhm-product-list .products-filter-item .products-filter-item-range-slider"
  );
  
  const filterRangeSliderInputMin = document.querySelector(
    "#fhm-product-list .products-filter-item .products-filter-item-range-slider-input .min"
  );
  const filterRangeSliderInputMax = document.querySelector(
    "#fhm-product-list .products-filter-item .products-filter-item-range-slider-input .max"
  );
  
  rangeSlider(filterRangeSlider, {
    // min value
    min: 0,
    // max value
    max: 100,
    // step size
    step: 1,
    // set input value
    value: [0, 100],
    onInput: function (valueSet) {
      filterRangeSliderInputMin.value = valueSet[0];
      filterRangeSliderInputMax.value = valueSet[1];
    },
  });
  
  // Change range slider input value
  const changeValue = () => {
    rangeSlider(filterRangeSlider).value([
      filterRangeSliderInputMin.value,
      filterRangeSliderInputMax.value,
    ]);
  };
  
  // Set default value input
  filterRangeSliderInputMin.value = 0;
  filterRangeSliderInputMax.value = 100;
  
  // Toggle mobile filter
  const openFilterButton = document.querySelector(
    "#fhm-product-list .products-filter-toggle-button"
  );
  
  const closeFilterButton = document.querySelector(
    "#fhm-product-list .products-filter-toggle-button-close"
  );
  
  const productFilterList = document.querySelector(
    "#fhm-product-list .products-filter-list"
  );
  
  openFilterButton.addEventListener("click", () => {
    productFilterList.classList.add("active");
  });
  
  closeFilterButton.addEventListener("click", () => {
    productFilterList.classList.remove("active");
  });
  
  //filter
  const filterItems = document.querySelectorAll(
    "#fhm-product-list .products-filter-item"
  );
  
  const checkboxItems = document.querySelectorAll(
    "#fhm-product-list .products-filter-item-criteria li"
  );
  
  filterItems.forEach((filterItem) => {
    // Clear Filter
    if (filterItem.querySelector(".clear-button")) {
      filterItem.querySelector(".clear-button").addEventListener("click", () => {
        filterItem
          .querySelectorAll(".products-filter-item-criteria li .checkbox")
          .forEach((checkbox) => {
            checkbox.setAttribute("data-status", "uncheck");
          });
      });
    }
  });
  
  checkboxItems.forEach((checkboxItem) => {
    // Select box
    checkboxItem.addEventListener("click", () => {
      if (
        checkboxItem.querySelector(".checkbox").getAttribute("data-status") ==
        "uncheck"
      ) {
        checkboxItem
          .querySelector(".checkbox")
          .setAttribute("data-status", "check");
      } else {
        checkboxItem
          .querySelector(".checkbox")
          .setAttribute("data-status", "uncheck");
      }
    });
  });
  
  // Mode product
  const modeBtn = Array.prototype.slice.call(
    document.querySelectorAll('input[name="mode"]')
  );
  modeBtn.forEach((radio) => {
    radio.addEventListener("click", (e) => {
      const products = Array.prototype.slice.call(
        document.querySelectorAll(".products-container .product")
      );
      const productContainer = document.querySelector(".products-container");
      if (e.target.value == "mode-row") {
        productContainer.classList.add("products-row");
        products.forEach((product) => product.classList.add("product-row"));
      } else {
        productContainer.classList.remove("products-row");
        products.forEach((product) => product.classList.remove("product-row"));
      }
    });
  });

  const checkboxColors = Array.prototype.slice.call(
    document.querySelectorAll('.products .products-filter-list .products-filter-item .products-filter-item-criteria[data-type=checkbox-color] .checkbox-color')
  );
  checkboxColors.forEach((checkboxColor) => {
    let color = checkboxColor.getAttribute("data-color");
    checkboxColor.setAttribute("style", "background-color: #" + color);
  });
  
  
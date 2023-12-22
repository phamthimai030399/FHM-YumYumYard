document.addEventListener("DOMContentLoaded", function () {
    var clearButton = document.querySelector('.clear-button');
    var checkAllCheckbox = document.querySelector('.check-all input[type="checkbox"]');

    clearButton.addEventListener('click', function () {
        // Uncheck checkbox trong "check-all"
        checkAllCheckbox.checked = false;

        // Lấy tất cả các checkbox trong "basket-item"
        var basketItemCheckboxes = document.querySelectorAll('.basket-item input[type="checkbox"]');

        // Uncheck tất cả checkbox trong "basket-item"
        basketItemCheckboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var checkAllCheckbox = document.querySelector('.check-all input[type="checkbox"]');
    var basketItemCheckboxes = document.querySelectorAll('.basket-item input[type="checkbox"]');

    // Lắng nghe sự kiện click trên checkbox "check-all"
    checkAllCheckbox.addEventListener('click', function () {
        // Cập nhật thuộc tính "checked" của tất cả checkbox trong "basket-item"
        basketItemCheckboxes.forEach(function (checkbox) {
            checkbox.checked = checkAllCheckbox.checked;
        });
    });
});
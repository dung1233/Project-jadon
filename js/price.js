const showPopupButton = document.getElementById("showPopup");
const popup = document.getElementById("myPopup");
const closePopupButton = document.getElementById("closePopup");

showPopupButton.addEventListener("click", function () {
  popup.style.display = "block";
});

closePopupButton.addEventListener("click", function () {
  popup.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});
const showPopupButton1 = document.getElementById("showPopup2");
const popup1 = document.getElementById("myPopup2");
const closePopupButton1 = document.getElementById("closePopup2");

showPopupButton1.addEventListener("click", function () {
  popup1.style.display = "block";
});

closePopupButton1.addEventListener("click", function () {
  popup1.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == popup1) {
    popup1.style.display = "none";
  }
});
const showPopupButton2 = document.getElementById("showPopup3");
const popup2 = document.getElementById("myPopup3");
const closePopupButton2 = document.getElementById("closePopup3");

showPopupButton2.addEventListener("click", function () {
  popup2.style.display = "block";
});

closePopupButton2.addEventListener("click", function () {
  popup2.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == popup2) {
    popup2.style.display = "none";
  }
});

document
  .querySelector(".card-number-input")
  .addEventListener("input", function () {
    let cardNumber = this.value;

    // Loại bỏ các ký tự không phải là số
    cardNumber = cardNumber.replace(/\D/g, "");

    // Thêm dấu cách sau mỗi 4 số
    cardNumber = cardNumber.replace(/(\d{4})/g, "$1 ").trim();

    // Giới hạn chiều dài tối đa
    if (cardNumber.length > 19) {
      cardNumber = cardNumber.slice(0, 19);
    }

    // Gán giá trị đã xử lý lại vào trường input
    this.value = cardNumber;

    // Đồng thời cập nhật thông tin thẻ
    document.querySelector(".card-number-box").innerText = cardNumber;
  });

document
  .querySelector(".card-holder-input")
  .addEventListener("input", function () {
    document.querySelector(".card-holder-name").innerText = this.value;
  });

document.querySelector(".month-input").addEventListener("input", function () {
  document.querySelector(".exp-month").innerText = this.value;
});

document.querySelector(".year-input").addEventListener("input", function () {
  document.querySelector(".exp-year").innerText = this.value;
});

document.querySelector(".cvv-input").addEventListener("input", function () {
  document.querySelector(".cvv-box").innerText = this.value;
});

document
  .querySelector(".cvv-input")
  .addEventListener("mouseenter", function () {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(-180deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(0deg)";
  });

document
  .querySelector(".cvv-input")
  .addEventListener("mouseleave", function () {
    document.querySelector(".front").style.transform =
      "perspective(1000px) rotateY(0deg)";
    document.querySelector(".back").style.transform =
      "perspective(1000px) rotateY(180deg)";
  });
var submitBtn = document.querySelector(".submit-btn");

// Gắn sự kiện nhấn vào nút submit
submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn gửi form mặc định

  // Hiển thị thông báo
  alert("Payment success (-20$)");
});
var submitBtn = document.querySelector("#olo");

// Gắn sự kiện nhấn vào nút submit
submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn gửi form mặc định

  // Hiển thị thông báo
  alert("Payment success(-50$)");
});
var submitBtn = document.querySelector("#oloo");

// Gắn sự kiện nhấn vào nút submit
submitBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn gửi form mặc định

  // Hiển thị thông báo
  alert("Payment success (-100$)");
});

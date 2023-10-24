const myButton1 = document.getElementById("myButton1");
const myPopup1 = document.getElementById("myPopup1");
const closePopup1 = document.getElementById("closePopup1");

myButton1.addEventListener("click", function () {
  myPopup1.style.display = "block";
});

closePopup1.addEventListener("click", function () {
  myPopup1.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == myPopup1) {
    myPopup1.style.display = "none";
  }
});

const myButton2 = document.getElementById("myButton2");
const myPopup2 = document.getElementById("myPopup2");
const closePopup2 = document.getElementById("closePopup2");

myButton2.addEventListener("click", function () {
  myPopup2.style.display = "block";
});

closePopup2.addEventListener("click", function () {
  myPopup2.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == myPopup2) {
    myPopup2.style.display = "none";
  }
});

const myButton3 = document.getElementById("myButton3");
const myPopup3 = document.getElementById("myPopup3");
const closePopup3 = document.getElementById("closePopup3");

myButton3.addEventListener("click", function () {
  myPopup3.style.display = "block";
});

closePopup3.addEventListener("click", function () {
  myPopup3.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == myPopup3) {
    myPopup3.style.display = "none";
  }
});
const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

const allStar = document.querySelectorAll(".rating .star");
const ratingValue = document.querySelector(".rating input");

allStar.forEach((item, idx) => {
  item.addEventListener("click", function () {
    let click = 0;
    ratingValue.value = idx + 1;

    allStar.forEach((i) => {
      i.classList.replace("bxs-star", "bx-star");
      i.classList.remove("active");
    });
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace("bx-star", "bxs-star");
        allStar[i].classList.add("active");
      } else {
        allStar[i].style.setProperty("--i", click);
        click++;
      }
    }
  });
});

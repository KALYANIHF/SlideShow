const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");
const revies = document.querySelectorAll(".review");
var current_item = 0;
prev_btn.addEventListener("click", showPreviousSlide);
next_btn.addEventListener("click", showNextSlide);

function showPreviousSlide() {
  const active = document.querySelector(".active");
  //   remove the current class
  active.classList.remove("active");
  if (active.previousElementSibling) {
    active.previousElementSibling.classList.add("active");
  } else {
    revies[revies.length - 1].classList.add("active");
  }
}
function showNextSlide() {
  const active = document.querySelector(".active");
  //   remove the current class
  active.classList.remove("active");
  if (active.nextElementSibling) {
    active.nextElementSibling.classList.add("active");
  } else {
    revies[0].classList.add("active");
  }
}



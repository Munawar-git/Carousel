var slides = document.querySelectorAll(".slide");
var totalSlides = slides.length;
var slideNr = 0;

var buttonLeft = document.querySelector(".button_left");
var buttonRight = document.querySelector(".button_right");
var slideHeading = document.querySelector(".slide__heading");

function toRight() {
  slideNr += 1;
  slidePosition(slideNr);
}

function toLeft() {
  slideNr += totalSlides - 1;
  slidePosition(slideNr);
}

function posCorr(value) {
  return Math.abs(value % totalSlides);
}

function slidePosition(slide) {
  slide = posCorr(slide);
  slideLeft = slide + 1;
  slideRight = slide + (totalSlides - 1);

  posLeft = posCorr(slideLeft);
  posRight = posCorr(slideRight);

  console.log(posLeft, slide, posRight);

  for (i = 0; i < totalSlides; i++) {
    slides[i].classList = "slide";
    if (i != slide && i != posRight && i != posLeft) {
      slides[i].classList.add("display__off");
    }
  }
  slides[posLeft].classList.add("slide__left");
  slides[slide].classList.add("slide__top");
  slides[posRight].classList.add("slide__right");

  slideHeading.innerHTML = "SlideShow<br>" + (slide + 1) + "/" + totalSlides;
}

buttonLeft.addEventListener("click", toLeft);
buttonRight.addEventListener("click", toRight);

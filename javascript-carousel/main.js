var slides = document.getElementsByClassName('hidden');
var $circle = document.getElementsByClassName('circle');

var slideIndex = 1;
showSlides(slideIndex);

var $leftArrow = document.querySelector('.left-arrow');
$leftArrow.addEventListener('click', minusSlides);
function minusSlides() {
  showSlides(slideIndex -= 1);
}

var $rightArrow = document.querySelector('.right-arrow');
$rightArrow.addEventListener('click', plusSlides);
function plusSlides() {
  showSlides(slideIndex += 1);
}

var $first = document.querySelector('.first');
var $second = document.querySelector('.second');
var $third = document.querySelector('.third');
var $fourth = document.querySelector('.fourth');
var $fifth = document.querySelector('.fifth');

$first.addEventListener('click', function () {
  var number = 1;
  return showSlides(slideIndex = number);
});
$second.addEventListener('click', function () {
  var number = 2;
  return showSlides(slideIndex = number);
});
$third.addEventListener('click', function () {
  var number = 3;
  return showSlides(slideIndex = number);
});
$fourth.addEventListener('click', function () {
  var number = 4;
  return showSlides(slideIndex = number);
});
$fifth.addEventListener('click', function () {
  var number = 5;
  return showSlides(slideIndex = number);
});

function showSlides(number) {
  if (number > slides.length) { slideIndex = 1; }
  if (number < 1) { slideIndex = slides.length; }
  picDisplay();
  circleColor();
}

setInterval(autoSlides, 3000);

function autoSlides() {
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  picDisplay();
  circleColor();
}

function circleColor() {
  for (var i = 0; i < $circle.length; i++) {
    $circle[i].className = $circle[i].className.replace('fa-solid', 'far');
  }
  $circle[slideIndex - 1].className += ' fa-solid';
}

function picDisplay() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}

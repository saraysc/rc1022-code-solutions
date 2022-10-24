var numberClicks = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  numberClicks = numberClicks + 1;
  $clickCount.textContent = 'Clicks: ' + numberClicks;
  var classValue = document.querySelector('.hot-button');
  if (numberClicks < 4) {
    classValue.className = 'hot-button cold';
  } else if (numberClicks >= 4 && numberClicks < 7) {
    classValue.className = 'hot-button cool';
  } else if (numberClicks >= 7 && numberClicks < 10) {
    classValue.className = 'hot-button tepid';
  } else if (numberClicks >= 10 && numberClicks < 13) {
    classValue.className = 'hot-button tepid';
  } else if (numberClicks >= 13 && numberClicks < 16) {
    classValue.className = 'hot-button hot';
  } else if (numberClicks >= 16) {
    classValue.className = 'hot-button nuclear';
  }

});

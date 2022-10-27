var $circleColor = document.querySelector('.circle');
var $bodyChange = document.querySelector('body');

var circleColor = ['yellow', 'black'];
var backColor = ['light-yellow', 'dark-black'];

$circleColor.addEventListener('click', onClick1);
var index = 0;
function onClick1(event) {
  $circleColor.className = 'circle ' + circleColor[index];
  $bodyChange.className = backColor[index];
  index = index >= circleColor.length - 1 ? 0 : index + 1;
}

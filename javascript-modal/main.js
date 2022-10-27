var $container = document.querySelector('.container');
var $button = document.querySelector('.button-blue');
var $bodyColor = document.querySelector('body');
var $buttonRed = document.querySelector('.button-red');

var containerDisplay = ['showing container', 'none'];
var backColor = ['black', 'white'];
var buttonCollor = ['button-blue opacity', 'button-blue'];

$button.addEventListener('click', onClick1);
function onClick1(event) {
  $container.className = containerDisplay[0];
  $bodyColor.className = backColor[0];
  $button.className = buttonCollor[0];
}

$buttonRed.addEventListener('click', onClick2);

function onClick2(event) {
  $container.className = containerDisplay[1];
  $bodyColor.className = backColor[1];
  $button.className = buttonCollor[1];
}

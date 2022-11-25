var $char = document.querySelectorAll('span');

var index = 0;
$char[index].className = 'underline';
document.addEventListener('keydown', colorChange);

function colorChange(event) {
  if (event.key === $char[index].textContent) {
    $char[index].className = 'green';
    index++;
    $char[index].className = 'underline';
  } else if (event.key !== $char[index].textContent) {
    $char[index].className = 'red';
  }
}

function handleFocus(event) {
  console.log('focus was fired');
  console.log('event target name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur was fired');
  console.log('event.target name blur: ', event.target.name);
}

function handleInput(event) {
  console.log('value:', event.target.value);
}

var $name = document.querySelectorAll('input')[0];
var $email = document.querySelectorAll('input')[1];
var $message = document.querySelector('textarea');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);
$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);

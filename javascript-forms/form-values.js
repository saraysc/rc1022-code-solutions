var $form = document.getElementById('contact-form');

$form.addEventListener('submit', onClick);

function onClick(event) {
  event.preventDefault();
  var obj = {
    name: $form.elements[0].value,
    email: $form.elements[1].value,
    message: $form.elements[2].value
  };
  console.log(obj);
  $form.reset();
}

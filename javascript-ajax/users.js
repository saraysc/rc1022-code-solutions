var $list = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.addEventListener('load', onLoad);
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

function onLoad(event) {
  console.log('xhr status:', xhr.status);
  console.log('xhr response:', xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var element = document.createElement('li');
    element.textContent = xhr.response[i].name;
    $list.appendChild(element);
  }

}
xhr.send();

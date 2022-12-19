fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

fetch('https://pokeapi.co/api/v2/pokemon/lapras')
  .then(res => res.json())
  .then(pokemon => console.log(pokemon))
  .catch(error => console.error('Error:', error));

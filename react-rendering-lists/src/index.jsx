import React from 'react';
import * as ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function List(props) {
  const listItems = pokedex.map(element =>
    // Correct! Key should be specified inside the array.
    <ListItem key={element.number} value={element.name} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<List />);

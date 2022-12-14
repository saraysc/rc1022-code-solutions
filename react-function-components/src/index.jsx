import React from 'react';
import * as ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click me!</button>;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <CustomButton/>;
root.render(element);

import React from 'react';
import * as ReactDOM from 'react-dom';
import Accordion, { elements } from './accordion.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Accordion topics={elements} />);

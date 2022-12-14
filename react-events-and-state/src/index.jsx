import React from 'react';
import ReactDOM from 'react-dom/client';

function WasClicked(props) {
  return <button>
    Thanks!
  </button>
  ;
}

function NotClicked(props) {
  return <button onClick={props.onClick}>
    Click me!
  </button>
  ;
}

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);// This binding is necessary to make `this` work in the callback
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    let button;
    if (isClicked) {
      button = <WasClicked />;
    } else {
      button = <NotClicked onClick = {this.handleClick} />;
    }
    return (button);
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<CustomButton />);

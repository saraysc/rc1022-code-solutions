import React from 'react';

function buttonColour(numberClicks) {
  if (numberClicks >= 3 && numberClicks < 6) {
    return 'purple';
  } else if (numberClicks >= 6 && numberClicks < 9) {
    return 'light-purple';
  } else if (numberClicks >= 9 && numberClicks < 12) {
    return 'coral';
  } else if (numberClicks >= 12 && numberClicks < 15) {
    return 'orange';
  } else if (numberClicks >= 15 && numberClicks < 18) {
    return 'yellow';
  } else if (numberClicks >= 18) {
    return 'white-background';
  }
}

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);// This binding is necessary to make `this` work in the callback
    this.state = { clicks: 0 };
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    const isClicked = this.state.clicks;
    const element = <h1>{isClicked}</h1>;
    const classes = buttonColour(isClicked);
    return (<div><button className={classes} onClick={this.handleClick}>Hot Button</button><h2 className='font'>{element}</h2></div>);
  }
}

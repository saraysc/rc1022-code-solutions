import React from 'react';

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
    let color;
    if (this.state.clicks >= 3 && this.state.clicks < 6) {
      color = 'purple';
    } else if (this.state.clicks >= 6 && this.state.clicks < 9) {
      color = 'light-purple';
    } else if (this.state.clicks >= 9 && this.state.clicks < 12) {
      color = 'coral';
    } else if (this.state.clicks >= 12 && this.state.clicks < 15) {
      color = 'orange';
    } else if (this.state.clicks >= 15 && this.state.clicks < 18) {
      color = 'yellow';
    } else if (this.state.clicks >= 18) {
      color = 'white-background';
    }

    return (<div><button className={color} onClick={this.handleClick}>Hot Button</button><h2 className='font'>{element}</h2></div>);
  }
}

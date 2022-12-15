import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOffClick = this.handleOffClick.bind(this);
    this.state = { isOn: false };
  }

  handleOnClick() {
    this.setState({ isOn: true });
  }

  handleOffClick() {
    this.setState({ isOn: false });
  }

  render() {
    const isOn = this.state.isOn;
    let element;
    const onText = 'ON';
    const offText = 'OFF';
    if (isOn) {
      element = <div><div className='container green' onClick={this.handleOffClick}><div className='circle'></div></div><h2>{onText}</h2></div>;
    } else {
      element = <div><div className='container gray' onClick={this.handleOnClick}><div className='circle'></div></div><h2>{offText}</h2></div>;
    }
    return (element);
  }
}

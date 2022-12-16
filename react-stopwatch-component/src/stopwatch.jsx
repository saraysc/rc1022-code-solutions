import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isCounting: false };
    this.clearCounter = this.clearCounter.bind(this);
    this.startCounting = this.startCounting.bind(this);
    this.resetCounting = this.resetCounting.bind(this);
    this.interval = 0;
  }

  startCounting() {
    this.setState({ isCounting: true });
    this.interval = setInterval(() => this.setState(state => ({
      count: state.count + 1
    })), 1000);
  }

  clearCounter() {
    clearInterval(this.interval);
    this.setState({ isCounting: false });
  }

  resetCounting() {
    if (!this.state.isCounting) {
      this.setState({ count: 0 });
    }
  }

  render() {
    const count = this.state.count;
    let icon;
    if (!this.state.isCounting) {
      icon = 'play';
    } else {
      icon = 'pause';
    }
    const element = this.state.isCounting ? this.clearCounter : this.startCounting;
    return (
      <div className='container'>
        <div onClick={this.resetCounting} className='circle'>
          <p className='text'>{count}</p>
        </div>
        <div className='icon'>
          <i className={`fas fa-${icon} fa-xl`} onClick={element}></i>
        </div>
      </div>
    );
  }
}

import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { listShowing: false };
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleClick(event) {
    this.setState({ listShowing: true });
    // if (event.target.tagName === 'I') {
    //   this.setState({ listShowing: true });
    // } else if (event.target.tagName === 'A' || event.target.className === 'menu gray') {
    //   this.setState({ listShowing: false });
    // }
  }

  closeMenu(event) {
    if (this.state.listShowing === true || event.target.className === 'container gray') {
      this.setState({ listShowing: false });
    }
  }

  render() {
    const listShowing = this.state.listShowing;
    const menu = listShowing ? '' : 'hidden';
    const iconShowing = listShowing ? 'hidden' : '';
    return (
      <div className="container white">
        <div className = {iconShowing}>
          <i className="fas fa-bars fa-xl" onClick={this.handleClick}></i>
        </div>
        <div className={`${menu} tab white row`}>
          <h3 className='margin-title'>Menu</h3>
          <ul>
            <li><a href='#' onClick={this.closeMenu}>About</a></li>
            <li><a href='#' onClick={this.closeMenu}>Get Started</a></li>
            <li><a href='#' onClick={this.closeMenu}>Sign In</a></li>
          </ul>
        </div>
        <div className={`${menu} row`} onClick={this.closeMenu}>
          <img src="https://wallpaperaccess.com/full/1798318.jpg"></img>
        </div>
      </div>
    );
  }
}

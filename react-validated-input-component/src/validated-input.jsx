import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let string;
    let icon;
    let classIcon;
    if (!this.state.password) {
      string = 'A password is required';
      icon = 'times';
      classIcon = 'red';
    } else if (this.state.password.match(/^[0-9a-zA-Z]{0,7}$/)) {
      string = 'Your password is too short';
      icon = 'times';
      classIcon = 'red';
    } else if (this.state.password.match(/^[0-9a-zA-Z]{8,}$/)) {
      string = '';
      icon = 'check';
      classIcon = 'green';
    }
    return (
      <div className='container'>
        <label >
          Password:
        </label>
        <input className='margin-top' type='password' value={this.state.password} onChange={this.handlePasswordChange}></input>
        <i className={`fas fa-${icon} fa-xl ${classIcon} margin-left margin-top`}></i>
        <p className={classIcon}>{string}</p>
      </div>
    );
  }
}

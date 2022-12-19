import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { listShowing: false };
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleClick(event) {
    this.setState({ listShowing: true });
  }

  closeMenu(event) {
    this.setState({ listShowing: false });
  }

  render() {
    const listShowing = this.state.listShowing;
    const menu = listShowing ? '' : 'hidden';
    // const iconShowing = listShowing ? 'hidden' : '';
    return (
      <div className="container white">
        <div>
          <div className='link'>
            <h4>Hypertext Markup Language</h4>
          </div>
          <div className={`text ${menu}`} onClick={this.handleClick} onDoubleClick={this.closeMenu}>
            <p>Hypertext MarkupLanguage (HTML) is the standard markup language
              for creating web pages and web applications. With Cascading Style
              Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies
              for the World Wide Web
            </p>
          </div>
        </div>

        <div>
          <div className='link'>
            <h4>Cascading Style Sheets</h4>
          </div>
          <div className={`text ${menu}`} onClick={this.handleClick} onDoubleClick={this.closeMenu}>
            <p>Cascading Style Sheets (CSS) is a style sheet language used for
              describing the presentation of a document written in a markup language
              like HTML. CSS is cornerstone technology of the World Wide Web
              alongside HTML and JavaScript.
            </p>
          </div>
        </div>

        <div>
          <div className='link'>
            <h4>JavaScript</h4>
          </div>
          <div className={`text ${menu}`} onClick={this.handleClick} onDoubleClick={this.closeMenu}>
            <p>JavaScript, often abbreviated as JS, is a high-level, interpreted
              programmin language that conforms to the ECMAScript specification. JavaScript
              has curly-bracket syntax, dynamic typing, prototype-based object-orientation,
              and first-class functions.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

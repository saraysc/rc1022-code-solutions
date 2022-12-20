import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      tab: null
    });
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id, event) {
    if (id !== this.state.tab) {
      this.setState({
        tab: id
      });
    } else {
      this.setState({
        tab: null
      });
    }
  }

  render() {
    const topics = this.props.topics;
    const listItem = topics.map(topic => {
      const toggle = this.state.tab === topic.id ? '' : 'hidden';
      return <li key={topic.id}>
        <div data-id={topic.id} className='link' onClick={event => this.handleClick(topic.id, event)}>
          {topic.title}
        </div>
        <div data-id={topic.id} className = {`text ${toggle}`}>
          {topic.text}
        </div>
      </li>;
    });
    return (
      <ul>{listItem}</ul>
    );
  }
}
export const elements = [
  { id: 1, title: 'Hypertext Markup Language', text: 'Hypertext MarkupLanguage (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web' },
  { id: 2, title: 'Cascading Style Sheets', text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is cornerstone technology of the World Wide Web alongside HTML and JavaScript.' },
  { id: 3, title: 'JavaScript', text: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programmin language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.' }
];

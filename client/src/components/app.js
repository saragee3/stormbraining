import React, { Component } from 'react';
import { Link } from 'react-router';

// import IdeaInput from '../containers/idea_input';
// import IdeaList from '../containers/idea_list';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Stormbrain </h1>
        <ul>
          <li><Link to="/boards">Boards</Link></li>
          <li><Link to="/ideas">Ideas</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

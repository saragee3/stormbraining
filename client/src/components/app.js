import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class App extends Component {

  static propTypes = { // this seems to be the preferred set-up
    children: PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <Link to="/" className="navbar-brand">Stormbraining</Link>
          <ul className="nav navbar-nav">
            <li className="nav-item"><Link to="/boards">Boards</Link></li>
            <li className="nav-item"><Link to="/ideas">Ideas</Link></li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

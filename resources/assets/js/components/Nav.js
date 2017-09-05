import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="tabs is-boxed">

        <div className="container">

          <ul>
            <li className="is-active"><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>

          </ul>

        </div>

      </nav>
    );
  }
}

export default Nav;

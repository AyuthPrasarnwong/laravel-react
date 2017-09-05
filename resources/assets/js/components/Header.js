import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (

        <section className="hero is-primary is-medium">

          <div className="hero-head">
            <header className="nav">
              <div className="container">
                <div className="nav-left">
                  <a className="nav-item">
                    Laravel-React
                  </a>
                </div>
                <span className="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <div className="nav-right nav-menu">
                  <a className="nav-item is-active">
                    Home
                  </a>
                  <a className="nav-item">
                    Examples
                  </a>
                  <a className="nav-item">
                    Documentation
                  </a>

                </div>
              </div>
            </header>
          </div>


          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                Title
              </h1>
              <h2 className="subtitle">
                Subtitle
              </h2>
            </div>
          </div>


          <div className="hero-foot">
            <Nav />
          </div>

        </section>

    );
  }
}

export default Header;

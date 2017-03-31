import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <div>
      <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Anthony</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                      <li><Link to="/home">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                  </ul>
              </div>
          </div>
      </nav>
    </div>
  );
}

export default Header;
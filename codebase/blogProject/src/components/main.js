import React from 'react';
import { Link } from 'react-router';

const Main = (props) => {
  return (
    <div>
      <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                  <a className="navbar-brand" href="#">Scotch Cars</a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                      <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                      <li><Link to="/home">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                  </ul>
              </div>
          </div>
      </nav>
      <div className="container">
          {props.children}
      </div>
  </div>
  )
};

export default Main;
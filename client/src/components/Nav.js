import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const Nav = () => {
  const pathName = window.location.pathname;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li
            className={classnames('nav-item', {
              active: pathName === '/'
            })}
          >
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li
            className={classnames('nav-item', {
              active: pathName === '/saved'
            })}
          >
            <Link className="nav-link" to="/saved">
              Saved Articles
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

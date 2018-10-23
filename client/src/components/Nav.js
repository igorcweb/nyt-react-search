import React from 'react';
import classnames from 'classnames';

const Nav = () => {
  const pathName = window.location.pathname;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
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
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li
            className={classnames('nav-item', {
              active: pathName === '/saved'
            })}
          >
            <a className="nav-link" href="/saved">
              Saved Articles
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

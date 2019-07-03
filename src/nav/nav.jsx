import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <Link class="navbar-item" to="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="logo"
          />
        </Link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link class="navbar-item" to="/">
            Home
          </Link>

          <Link class="navbar-item" to="/search">
            Search
          </Link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <Link class="button is-primary" to="/register">
                <strong>Sign up</strong>
              </Link>
              <Link class="button is-light" to="/login">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

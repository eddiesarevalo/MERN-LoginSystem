import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item navbarTitle">
            MERN-Login
        </Link>
      </div>

      <div className="navbar-menu">
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/" className="navbar-item">
              Home
          </Link>

          <Link to="/helloworld" className="navbar-item">
              Hello!
          </Link>
        </div>
      </div>
      

    </nav>

  </header>
);

export default Header;

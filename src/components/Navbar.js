import { Link } from 'react-router-dom';
import React from 'react';

import logo from '../images/logo.png'

function Navbar() {
  return (
    <section className="w-100 d-flex justify-content-center bg-dark">
      <nav className="w-75 navbar navbar-dark">
        <Link to="/" className="navbar-brand">
          <img src={logo} className="d-inline-block align-top" alt="" loading="lazy" />
        </Link>
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/about" className="nav-link">ABOUT</Link>
      </nav>
    </section>
  )
}

export default Navbar;

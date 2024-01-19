// Navbar.js (React Component)
import React from 'react';
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Gallry</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
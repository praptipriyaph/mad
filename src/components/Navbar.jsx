import React from 'react';
import '../styles/Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="../assets/logo.png" alt="Pharmacy Logo" className="logo" />
        <span>PharmaFind</span>
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
        <li>Log in</li>
      </ul>
    </nav>
  );
};

export default Navbar;

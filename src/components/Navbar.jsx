import React from 'react';
import '..styles//Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="logo.png" alt="Pharmacy Logo" className="logo" />
        <span>Pharmacy</span>
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Products</li>
        <li>Services</li>
        <li>Pricing</li>
        <li>Contact Us</li>
      </ul>
      <button className="contact-btn">+62 864 6444 2222</button>
    </nav>
  );
};

export default Navbar;

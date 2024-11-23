import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <span className="subtitle">Pharmacy Store</span>
        <h1 className="main-title">Your trusted Pharmacy</h1>
        <p className="customer-count">100k+ Satisfied Customers</p>
        
        <div className="search-container">
          <div className="search-box">
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Enter medicine name"
                className="search-input"
              />
              <input 
                type="text" 
                placeholder="Enter pincode"
                className="search-input"
              />
              <button className="search-button">
                <span>Search</span>
              </button>
            </div>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Include offline results</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
import React from 'react';
import '..styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-subtitle">Pharmacy Store</span>
        <h1 className="hero-title">Your trusted Pharmacy</h1>
        <p className="hero-text">Libero diam auctor tristique hendrerit in eu vel id...</p>
        <div className="stats">
          <span className="stats-icon">● ● ● ●</span>
          <span className="stats-text">100k+ Satisfied Customers</span>
        </div>
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Value" />
          <button className="search-button">🔍</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

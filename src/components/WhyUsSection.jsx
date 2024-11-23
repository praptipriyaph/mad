import React from 'react';
import '../styles/WhyUsSection.css';
import { BsBoxSeam, BsShieldCheck, BsRecycle } from 'react-icons/bs'; // Using React Icons

const WhyUsSection = () => {
  return (
    <section className="why-us-section">
      <div className="why-us-container">
        {/* Section Header */}
        <div className="why-us-header">
          <h4 className="why-us-subtitle">Why Us</h4>
          <h2 className="why-us-title">Our Commitment to Quality</h2>
        </div>

        {/* Features */}
        <div className="why-us-features">
          <div className="feature-card">
            <div className="icon-container">
              <BsBoxSeam className="feature-icon" />
            </div>
            <h3>Wide Product Range</h3>
            <p>
              Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-container">
              <BsShieldCheck className="feature-icon" />
            </div>
            <h3>Quality Assurance</h3>
            <p>
              Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-container">
              <BsRecycle className="feature-icon" />
            </div>
            <h3>Eco-Friendly Practices</h3>
            <p>
              Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

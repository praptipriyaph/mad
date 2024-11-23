import React from 'react';
import '../styles/Feature1.css';

const Feature1 = () => {
  return (
    <div className="features-section">
      <div className="features-container">
        {/* Feature Cards */}
        <div className="feature-card">
          <i className="icon">🚚</i>
          <h4>Free Shipping</h4>
          <p>Order Over $600</p>
        </div>
        <div className="feature-card">
          <i className="icon">💳</i>
          <h4>Quick Payment</h4>
          <p>100% Secure</p>
        </div>
        <div className="feature-card">
          <i className="icon">💸</i>
          <h4>Big Cashback</h4>
          <p>Over 50% Cashback</p>
        </div>
        <div className="feature-card">
          <i className="icon">📞</i>
          <h4>24/7 Support</h4>
          <p>Ready for You</p>
        </div>
      </div>

      {/* Promotional Banners */}
      <div className="promo-container">
        <div className="promo-card blue">
          <h3>Big Sale</h3>
          <h2>Get an Extra <span>50% Off</span></h2>
          <p>Libero diam auctor tristique hendrerit in eu vel id.</p>
        </div>
        <div className="promo-card dark-blue">
          <h3>Take the discount for the first shopping on our website</h3>
          <h2>30%</h2>
          <button className="shop-now">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Feature1;

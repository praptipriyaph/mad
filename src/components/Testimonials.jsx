import React from "react";
import Slider from "react-slick";
import "../styles/Testimonials.css";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    text: `"Pharmacy Store is my go-to for over-the-counter medications and health products. They have a wide selection, and their website makes it easy to order online. The only improvement I'd suggest is expanding their beauty and skincare section."`,
    author: "Theresa J. Jones",
    age: "24 years old",
  },
  {
    id: 2,
    text: `"I love how efficient the Pharmacy Store team is! My prescriptions are always ready on time, and the staff is super friendly. Highly recommend their services to anyone looking for reliable pharmacy care."`,
    author: "Mark H. Lee",
    age: "30 years old",
  },
  {
    id: 3,
    text: `"Great service and timely delivery! Pharmacy Store has become a trusted partner in managing my family’s healthcare needs. The home delivery option has been a lifesaver!"`,
    author: "Sophia R. Carter",
    age: "35 years old",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true, // Enable navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Only one testimonial visible at a time
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Slide every 3 seconds
    pauseOnHover: true, // Pause autoplay when hovered
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <h4 className="testimonials-subtitle">Review</h4>
          <h2 className="testimonials-title">Testimonials That Inspire Us</h2>
          <p className="testimonials-description">
            Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet
            suscipit nulla. Nullam vitae sit tempus diam.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {/* Author Image Placeholder */}
              <div className="testimonial-avatar">
                <div className="avatar-placeholder"></div>
              </div>

              {/* Testimonial Content */}
              <div className="testimonial-content">
                <blockquote className="testimonial-text">
                  <span className="quote-icon">“</span>
                  {testimonial.text}
                </blockquote>
                <p className="testimonial-author">{testimonial.author}</p>
                <p className="testimonial-age">{testimonial.age}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

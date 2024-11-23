import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Feature1 from '../components/Feature1';
import WhyUsSection from '../components/WhyUsSection';
import TeamSection from "../components/TeamSection";
import Testimonials from "../components/Testimonials"
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Feature1 />
      <WhyUsSection />
      <TeamSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero ">
      <div className="hero-text">
        <h2>Hello, I'm Eke Success</h2>
        <p>I'm a passionate Web Developer specializing in creating interactive, responsive, and user-friendly websites.</p>
      </div>
      <div className="hero-image">
        <img src="favicon.ico" alt="my image.jpeg" />
      </div>
    </section>
  );
};

export default Hero;

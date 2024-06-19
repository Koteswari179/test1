import React from 'react';
import './Nav.css';

const Nav = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  return (
    <div className="nav-container">
      <div className="left-section">
        <img src="https://akeshya.com/assets/img/logo.png" alt="Profile" className="profile-image" />
        <h1 className="nav-name">AKESHYA</h1>
      </div>
      <div className="right-section">
        <ul className="nav-list">
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
        </ul>
        <button className="contact-button" onClick={() => scrollToSection('contact')}>Contact Us</button>
      </div>
    </div>
  );
};

export default Nav;

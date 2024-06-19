import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import the arrow up icon from react-icons
import './Footer.css';

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='footer-container'>
      <div className="footer-left">
        &copy; Copyright <strong>Akeshya</strong>. All Rights Reserved
      </div>
      <div className="footer-right">
        <ul className="footer-list">
          <li><a href="https://akeshya.com/Terms%20and%20conditions.pdf">Terms and conditions</a></li>
          <li><a href="https://akeshya.com/Refund%20policy.pdf">Refund policy</a></li>
          <li><a href="https://akeshya.com/Privacy%20policy.pdf">Privacy policy</a></li>
        </ul>
      </div>
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
      <i class="bi bi-arrow-up-short"></i>

        </div>
      )}
    </div>
  );
}

export default Footer;

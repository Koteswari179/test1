import React from 'react';
import { Link } from 'react-router-dom';
import './Success.css';

function Success() {
  return (
    <div className='success-container'>
      <div className='success-content'>
        <h1>Thank you !</h1>
        <p>Your form submission has been received.</p>
        <Link to='/'>
          <i className="bi bi-arrow-left-short"></i>
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default Success;

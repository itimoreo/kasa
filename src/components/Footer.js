import React from 'react';
import logo from '../assets/LOGO.png';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <img src={logo} alt="Kasa Logo" />
            <p>© 2022 Kasa. All rights reserved.</p>
        </div>
      
    </footer>
  );
};

export default Footer;

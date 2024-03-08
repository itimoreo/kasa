import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/LOGO.png';

const Header = () => {
  const location = useLocation();

  // Determine if we are on the home page
  const isHomePage = location.pathname === '/';

  return (
    <div className={`banner-content ${isHomePage ? 'home-page' : ''}`}>
      <div className="kasa-logo">
        <img src={logo} alt="Kasa logo" />
      </div>
      <div className="banner-links">
        <Link to="/" className='home'>Accueil</Link>
        <Link to="/about" className='about'>A propos</Link>
      </div>
    </div>
  );
};

export default Header;
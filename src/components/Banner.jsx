import React from 'react';
import '../App.css'; // Importez App.css au lieu de Banner.css
import logo from '../assets/LOGO.png';
import { Link, useLocation } from 'react-router-dom';
import background from '../assets/Image source 1.png';
import background2 from '../assets/Image source 2.png';

const Banner = () => {
  const location = useLocation();
  let image;

  // Change the background image based on the current route
  if (/^\/card\/.+$/.test(location.pathname)) {
    image = null;
  } else {
    switch (location.pathname) {
      case '/error404':
        image = null;
        break;
      case '/about':
        image = background2;
        break;
      default:
        image = background; 
    }
  }

  // Determine if we are on a location page
  const isLocationPage = /^\/card\/.+$/.test(location.pathname);

  // Determine if we are on the home page
  const isHomePage = location.pathname === '/';

  // Return the banner component
  return (
    <div className={`banner ${isLocationPage ? 'location-page' : ''}`}>
      <div className={`banner-content ${isHomePage ? 'home-page' : ''}`}>
        <div className="kasa-logo">
          <img src={logo} alt="Kasa logo" />
        </div>
        <div className="banner-links">
          <Link to="/" className='home'>Accueil</Link>
          <Link to="/about" className='about'>A propos</Link>
        </div>
      </div>
      {image && (
        <div className='banner-background'>
          <img src={image} alt="Background"/>
          {location.pathname !== '/about' && (
            <div className='banner-background-txt'>
              Chez vous, partout et ailleurs
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Banner;
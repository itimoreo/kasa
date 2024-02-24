import React from 'react';
import '../css/Banner.css';
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
      case '/about':
        image = background2;
        break;
      default:
        image = background; 
    }
  }

  // Return the banner component
  return (
    <div className="banner">
      <div className="banner-content">
        <img src={logo} /> 
        <div className="banner-links">
          <Link to="/" className='home'>Accueil</Link>
          <Link to="/about" className='about'>A propos</Link>
        </div>
      </div>
      {image && (
        <div className='banner-background'>
          <img src={image}/>
          <div className='banner-background-txt'>
            Chez vous, partout et ailleurs
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
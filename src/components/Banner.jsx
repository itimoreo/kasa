import React from 'react';
import '../css/App.css';
import { useLocation } from 'react-router-dom';
import background from '../assets/Image source 1.png';
import background2 from '../assets/Image source 2.png';
import Header from './Header'; // Importez le nouveau composant Header

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

  return (
    <div className={`banner ${isLocationPage ? 'location-page' : ''}`}>
      <Header />
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
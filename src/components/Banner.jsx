import React from 'react';
import '../css/App.css';
import { useLocation } from 'react-router-dom';
import background from '../assets/Image source 1.png';
import background2 from '../assets/Image source 2.png';
import Header from './Header'; // Importez le nouveau composant Header

// Définition du composant Banner
const Banner = () => {
  // Utilisation du hook useLocation pour obtenir l'objet location actuel
  const location = useLocation();
  let image;

  // Change l'image de fond en fonction de la route actuelle
  if (/^\/card\/.+$/.test(location.pathname)) {
    // Si la route est /card/quelquechose, n'utilise pas d'image de fond
    image = null;
  } else {
    // Sinon, détermine l'image de fond en fonction de la route
    switch (location.pathname) {
      case '/error404':
        // Si la route est /error404, n'utilise pas d'image de fond
        image = null;
        break;
      case '/about':
        // Si la route est /about, utilise l'image background2
        image = background2;
        break;
      default:
        // Pour toutes les autres routes, utilise l'image background
        image = background; 
    }
  }

  // Détermine si nous sommes sur une page de location
  const isLocationPage = /^\/card\/.+$/.test(location.pathname);

  return (
    // Rend une div avec la classe 'banner' et une classe supplémentaire si nous sommes sur une page de location
    <div className={`banner ${isLocationPage ? 'location-page' : ''}`}>
      <Header />
      {image && (
        // Si une image est définie, rend une div avec l'image de fond
        <div className='banner-background'>
          <img src={image} alt="Background"/>
          {location.pathname !== '/about' && (
            // Si la route n'est pas /about, rend un texte sur l'image de fond
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
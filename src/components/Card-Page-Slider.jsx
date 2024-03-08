import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { useParams, useNavigate } from 'react-router-dom';
import data from '../json/appart.json'; // Importez vos données JSON

// Importez les fichiers CSS de slick-carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Créez des composants pour vos flèches
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", zIndex: 2, background: "none" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-5.147-5.146a.5.5 0 0 1 .708-.708l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", zIndex: 2, background: "none" }}
        onClick={onClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 1-.5.5H2.707l5.147 5.146a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708.708L2.707 7.5H14.5A.5.5 0 0 1 15 8z"/>
        </svg>
      </div>
    );
  }

const CardPageSlider = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appartment, setAppartment] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Trouvez l'appartement correspondant à l'ID
    const foundAppartment = data.find(appartment => appartment.id === id);

    if (foundAppartment) {
      setAppartment(foundAppartment);
    } else {
      navigate('/error'); // Redirigez vers une page d'erreur si l'ID n'est pas valide
    }
  }, [id, navigate]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    adaptiveHeight: true,
    // centerMode: true, // Commentez ou supprimez cette ligne
  };

  // Ajoutez un style pour les images
  const imageStyle = {
    width: '100%', // Assurez-vous que l'image prend toute la largeur disponible
    maxHeight: '500px', // Définissez une hauteur maximale pour les images
    objectFit: 'cover' // Assurez-vous que l'image couvre toute la surface disponible
  };

  // Style pour le texte
  const textStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#fff',
    fontSize: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // Pour rendre le texte plus lisible sur les images
  };

  return appartment ? (
    <div style={{ position: 'relative' }}>
      <Slider {...settings}>
        {appartment.pictures.map((picture, index) => (
          <div key={index}>
            <img src={picture} alt="" style={imageStyle} />
          </div>
        ))}
      </Slider>
      <p style={textStyle}>{currentSlide + 1} / {appartment.pictures.length}</p>
    </div>
  ) : null;
};

export default CardPageSlider;
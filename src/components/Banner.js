import React from 'react';
import '../css/Banner.css';
import logo from '../assets/LOGO.png';
import background from '../assets/Image source 1.png';
import { Link} from 'react-router-dom';


const Banner = () => {
  return (
        
    <div className="banner">
        
                <div className="banner-content">
                    <img src={logo} /> 
                    <div className="banner-links">
                        <Link to="/" className='home'>Accueil</Link>
                        <Link to="/about" className='about'>A propos</Link>
                    </div>
                    
                </div>
        <div className='banner-background'>
                <img src={background}/>
                <div className='banner-background-txt'>
                    Chez vous, partout et ailleurs
                </div>
        </div>
    </div>
  );
};

export default Banner;

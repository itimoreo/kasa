import React, { useState } from 'react';
import '../css/About.css';

function About() {
  const [isOpen, setIsOpen] = useState({});

  const data = [
    {
      title: 'Fiabilité',
      text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      title: 'Respect',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Sécurité',
      text: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.',
    },
  ];

  const toggle = (index) => {
    setIsOpen({ ...isOpen, [index]: !isOpen[index] });
  };

  return (
    <div className='about-container'>
      {data.map((item, index) => (
        <div key={index}>
          <button className='btn-about' onClick={() => toggle(index)}>
            {item.title}
          </button>
          {isOpen[index] && (
            <div className='collapse-text'>
              {item.text}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default About;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../json/appart.json'; // Importez le fichier JSON
import Banner from './Banner';
import '../css/Card-Page.css'

function CardPage() {
  const { id } = useParams();
  const stringId = String(id); // Convertissez l'ID en chaîne
  const item = jsonData.find(item => item.id === stringId); // Utilisez la chaîne pour la comparaison

  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

  return (
    <div className="card-page">
      <div className='cards-title-desc'>
        <h2>{item.title}</h2>
        <p>{item.location}</p>
      </div>
      <div className='card-host-rating'>
        <div className='card-host'>
          <img src={item.host.picture} alt={item.host.name} />
          <p>{item.host.name}</p>
        </div>
        <div className='card-rating'>
          <p>{item.rating}</p>
        </div>
      </div>  
      <div className='card-tag'>
        <p>{item.tags}</p>
      </div>
      <div className='card-collapse'>
        <div className='card-description'>
          <h3 onClick={() => setDescriptionOpen(!isDescriptionOpen)}>Description</h3>
          <div className={`collapse-content ${isDescriptionOpen ? 'open' : ''}`}>
            <p>{item.description}</p>
          </div>
        </div>
        <div className='card-equipments'>
          <h3 onClick={() => setEquipmentsOpen(!isEquipmentsOpen)}>Equipements</h3>
          <div className={`collapse-content ${isEquipmentsOpen ? 'open' : ''}`}>
            {item.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
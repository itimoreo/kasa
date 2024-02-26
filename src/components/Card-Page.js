import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../json/appart.json';
import Banner from './Banner';
import Slider from "./Card-Page-Slider";
import HostRating from './Card-Page-HostRate'
import CollapsibleSection from './CollapsibleSection';
import CollapsibleContainer from './CollapsibleContainer';
import '../css/Card-Page.css'

function CardPage() {
  const { id } = useParams();
  const stringId = String(id);
  const item = jsonData.find(item => item.id === stringId);

  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

  return (
    <div className="card-page">
      <div className='slider'>
        <Slider />
      </div>
      <div className='cards-title-desc'>
        <h2>{item.title}</h2>
        <p>{item.location}</p>
      </div>
      <div className='container-host'>
        <div className='card-host-rating'>
          <HostRating item={item} />
        </div>
      </div>
      
      <div className='card-tag'>
        <p>{item.tags}</p>
      </div>
      <CollapsibleContainer>
        <CollapsibleSection
          title="Description"
          isOpen={isDescriptionOpen}
          onToggleOpen={() => setDescriptionOpen(!isDescriptionOpen)}
        >
          <p>{item.description}</p>
        </CollapsibleSection>
        <CollapsibleSection
          title="Equipements"
          isOpen={isEquipmentsOpen}
          onToggleOpen={() => setEquipmentsOpen(!isEquipmentsOpen)}
        >
          {item.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))}
        </CollapsibleSection>
      </CollapsibleContainer>
    </div>
  );
}

export default CardPage;
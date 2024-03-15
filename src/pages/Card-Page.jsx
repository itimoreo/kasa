import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jsonData from "../json/appart.json";
import Banner from "../components/Banner";
import Slider from "../components/Slider";
import HostRating from "../components/HostRate";
import CollapsibleSection from "../components/CollapsibleSection";
import CollapsibleContainer from "../components/CollapsibleContainer";
import CardTag from "../components/Tags";
import "../css/Card-Page.css";

function CardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const stringId = String(id);
  const item = jsonData.find((item) => item.id === stringId);

  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

  useEffect(() => {
    // Si l'id ou la carte n'existe pas, redirigez vers la page d'erreur 404
    if (!id || !item) {
      navigate('/error404');
    }
  }, [id, item, navigate]);

  if (!item) {
    return null;
  }

  return (
    <div className="card-page">
      <div className="slider">
        <Slider />
      </div>
      <div className="cards-title-desc">
        <h2>{item.title}</h2>
        <p>{item.location}</p>
      </div>
      <div className="host-tags-container">
        <div className="container-host">
          <div className="card-host-rating">
            <HostRating item={item} />
          </div>
        </div>
        <CardTag tags={item.tags} />
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

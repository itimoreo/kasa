// CollapsibleSection.js
import React from 'react';

// Définition du composant CollapsibleSection
const CollapsibleSection = ({ title, isOpen, onToggleOpen, children }) => (
  // Rend une div avec la classe 'card-collapse-section' et une classe supplémentaire 'open' si isOpen est vrai
  // Lorsqu'on clique sur cette div, la fonction onToggleOpen est appelée
  <div className={`card-collapse-section ${isOpen ? 'open' : ''}`} onClick={onToggleOpen}>
    {/* Rend une div avec la classe 'title-arrow' */}
    <div className="title-arrow">
      {/* Rend un h3 avec le titre passé en props */}
      <h3>{title}</h3>
      {/* Rend une icône de flèche SVG, qui est tournée si isOpen est vrai */}
      <svg className={`arrow-icon ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
    {/* Rend une div avec la classe 'collapse-content' et une classe supplémentaire 'open' si isOpen est vrai */}
    {/* Cette div contient les enfants passés en props au composant CollapsibleSection */}
    <div className={`collapse-content ${isOpen ? 'open' : ''}`}  >
      {children}
    </div>
  </div>
);

export default CollapsibleSection;
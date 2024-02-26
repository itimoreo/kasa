// CollapsibleSection.js
import React from 'react';

const CollapsibleSection = ({ title, isOpen, onToggleOpen, children }) => (
    <div className='card-collapse-section' onClick={onToggleOpen}>
      <div className="title-arrow">
        <h3>{title}</h3>
        <svg className={`arrow-icon ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
export default CollapsibleSection;
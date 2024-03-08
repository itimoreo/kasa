// CardTag.js
import React from 'react';
import '../css/Card-Page-Tags.css'; // Assurez-vous que le chemin d'importation est correct

const CardTag = ({ tags }) => (
  <div className='card-tag'>
    {tags.map((tag, index) => (
      <div key={index} className='tag'>
        {tag}
      </div>
    ))}
  </div>
);
export default CardTag;
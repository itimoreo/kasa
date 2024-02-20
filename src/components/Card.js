import React from 'react';
import data from '../json/appart.json'; 
import '../css/Card.css';

const CardList = () => {
  return (
    <div>
      {data.map((item) => (
        <button key={item.id} className="card">
          <img src={item.cover} alt={item.title} className='card-image' />
          <h2 className='card-title'>{item.title}</h2>
        </button>
      ))}
    </div>
  );
};

export default CardList;

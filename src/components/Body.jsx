// Dans Body.js
import React from 'react';
import '../css/Body.css';
import jsonData from '../json/appart.json'; 
import Card from './Card';

function Body({ data = jsonData }) {
  if (!data) {
    return <div>Loading...</div>; // ou retournez null, ou un spinner de chargement, etc.
  }

  return (
    <div className="container">
      {data.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}
export default Body;

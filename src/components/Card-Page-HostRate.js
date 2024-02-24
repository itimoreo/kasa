import React from 'react';
import '../css/Card-Page-HostRate.css';

function StarRating({ rating }) {
  const stars = [1, 2, 3, 4, 5].map((star) => {
    return (
      <span key={star} style={{ color: rating >= star ? 'gold' : 'grey' }}> 
        {rating >= star ? '★' : '☆'}
      </span>
    );
  });

  return <div className='star-rating'>{stars}</div>;
}

function CardPage({ item }) {
  return (
    <div className='card-host-rating'>
      <div className='card-host'>
        <img src={item.host.picture} alt={item.host.name} className='host-image' />
        <p className='host-name'>{item.host.name}</p>
      </div>
      <div className='card-rating'>
        <StarRating rating={item.rating} />
      </div>
    </div>
  );
}

export default CardPage;
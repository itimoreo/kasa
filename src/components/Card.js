import React from "react";
import { Link } from "react-router-dom";
import "../css/Card.css";

function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/card/${item.id}`}>
        <img src={item.cover} alt={item.title} className="card-cover" />
        <h2 className="card-title">{item.title}</h2>
      </Link>
    </div>
  );
}

export default Card;

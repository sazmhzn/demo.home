import React from "react";
import "./component styling/card.css";

const Card = ({ index, img, name }) => {
  return (
    <div key={index} className="card">
      <header className="top-pic-card__image">
       <img src={img} alt={name} />
      </header>

      <div className="top-pic-card__info">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import "./component styling/card.css"
import Card from "./Card";

const Cards = () => {
  const data = [
    {
      name: "Floor Tile",
      imgs: "/image/top picks/floor-tiles.jpeg",
    },
    {
      name: "Floor Tile",
      imgs: "/image/top picks/Roofing-solutions.jpg",
    },
    {
      name: "Floor Tile",
      imgs: "/image/top picks/floor-tiles.jpeg",
    },
    {
      name: "Floor Tile",
      imgs: "/image/top picks/floor-tiles.jpeg",
    },
    {
      name: "Floor Tile",
      imgs: "/image/top picks/floor-tiles.jpeg",
    },
    {
      name: "Floor Tile",
      imgs: "/image/top picks/floor-tiles.jpeg",
    },
  ];
  return (
    <article className="top-pic-card">
      {data.map((item, index) => (
        <Card index={index} img={item.imgs} name={item.name} />
      ))}
    </article>
  );
};

export default Cards;

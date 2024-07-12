import React from "react";
import "./component styling/Categories.css";

const Categories = () => {
  const categoriesList = [
    {
      key: 1,
      name: "Flooring Solutions",
      path: "/",
    },
    {
      key: 2,
      name: "Wall Solutions",
      path: "/",
    },
    {
      key: 3,
      name: "Sanitary Solutions",
      path: "/",
    },
    {
      key: 4,
      name: "Bathroom Solutions",
      path: "/",
    },
    {
      key: 5,
      name: "False Ceiling Solutions",
      path: "/",
    },
    {
      key: 6,
      name: "Flooring Solutions",
      path: "/",
    },
    {
      key: 7,
      name: "Wall Solutions",
      path: "/",
    },
    {
      key: 8,
      name: "Sanitary Solutions",
      path: "/",
    },
    {
      key: 9,
      name: "Bathroom Solutions",
      path: "/",
    },
    {
      key: 10,
      name: "False Ceiling Solutions",
      path: "/",
    },
  ];

  const handleClick = () => {
    return
  }

  return (
    <aside className="categories">
      <ul>
        {categoriesList.map((category) => (
          <li key="{category.key}" onClick={handleClick}>{category.name} <img src="/image/chevron.png" width={12} alt="" /></li>
          
        ))}
      </ul>
    </aside>
  );
};

export default Categories;

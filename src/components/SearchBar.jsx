import React, { useState } from "react";

const SearchBar = () => {

  const [placeholder, setPlaceholder] = useState(["flooring", "wall"])

  return (
    <div id="search">
      <input type="text" placeholder="Search" />
      <div id="suggest"></div>
      <button className="search-button">
        <img src="/image/search.png" width={16} alt="search icon" />
      </button>
    </div>
  );
};

export default SearchBar;

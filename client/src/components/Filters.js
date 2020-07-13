import React from "react";

const Filters = ({
  properties,
  categories,
  maxPrice,
  typeSelect,
  search,
  bedroomSelect,
  filter,
}) => {
  return (
    <div className="filters">
      <select onChange={bedroomSelect}>
        {[...Array(6)].map((choice, i) => {
          return (
            <option key={i} value={i + 1}>
              Min Bedrooms: {i + 1}{" "}
            </option>
          );
        })}
      </select>
      <select onChange={typeSelect}>
        <option value="all">All Types</option>
        {categories.map((category, i) => {
          return (
            <option key={i} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <input onChange={maxPrice} type="number" placeholder="max price" />

      {/* <input
        onChange={search}
        type="text"
        className="search"
        placeholder="Search..."
      /> */}
      <button onClick={filter}>FILTER</button>
    </div>
  );
};

export default Filters;

import React from "react";
import Favorite from "./Favorite";

const Thumbnail = ({ property, houseHover }) => {
  return (
    <a
      href={`/property/${property.id}`}
      className="card link"
      onMouseEnter={(e) => houseHover(property.id)}
    >
      <div
        className="image"
        style={{
          backgroundImage: `url('${process.env.REACT_APP_API}${property.Photos[0].url}')`,
        }}
      >
        <Favorite id={property.id} isThumbnail={true} />
      </div>

      <div className="content">
        <small className="meta">
          {property.category.name} • {property.Bedrooms} Bedrooms •{" "}
          {property.Bathrooms} Bathrooms
        </small>
        <h2>{property.Title}</h2>
        <small className="location">
          <i className="fas fa-map-marker-alt"></i>
          <span>{property.Address}</span>
        </small>
        <span className="price">${property.Price}</span>
      </div>
    </a>
  );
};

export default Thumbnail;

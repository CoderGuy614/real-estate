import React from "react";
import { Link } from "react-router-dom";
import Favorite from "./Favorite";
import moment from "moment";

const Thumbnail = ({ property, houseHover }) => {
  return (
    <Link
      to={`/property/${property.id}`}
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
          {property.Bathrooms} Bathrooms • {property.SquareFeet} Sq.Ft.
        </small>
        <h2>{property.Title}</h2>
        <small className="location">
          <i className="fas fa-map-marker-alt"></i>
          <span>{property.Address}</span>
        </small>
        <span className="price">
          ${Number(property.Price).toLocaleString()}
        </span>
        <span className="listed-date">
          Listed: {moment(property.created_at).fromNow()}
        </span>
      </div>
    </Link>
  );
};

export default Thumbnail;

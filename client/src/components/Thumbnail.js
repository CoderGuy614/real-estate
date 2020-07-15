import React from "react";
import Favorite from "./Favorite";

// import { connect } from "react-redux";
// import { addFavorite, removeFavorite } from "../actions/favorite";

const Thumbnail = ({ property, houseHover, favorites }) => {
  return (
    <a className="card link" onMouseEnter={(e) => houseHover(property.id)}>
      <div
        className="image"
        style={{
          backgroundImage: `url('${process.env.REACT_APP_API}${property.Photos[0].url}')`,
        }}
      ></div>
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
        <Favorite property={property} />
      </div>
    </a>
  );
};

// const mapStateToProps = (state) => ({
//   favorites: state.favorites,
// });

export default Thumbnail;

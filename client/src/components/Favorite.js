import React from "react";
import PropTypes from "prop-types";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../actions/favorite";

const Favorite = ({
  favorites,
  property,
  addFavorite,
  removeFavorite,
  isThumbnail,
}) => {
  function toggleFavorite(p) {
    favorites.includes(p) ? removeFavorite(p) : addFavorite(p);
  }

  return (
    <span
      className={`${isThumbnail ? "heart-thumbnail" : "favorite"}`}
      onClick={() => toggleFavorite(property)}
    >
      {favorites.includes(property) ? (
        <HeartFill color="red" size={25} />
      ) : (
        <HeartFill color={isThumbnail ? "white" : "gray"} size={25} />
      )}{" "}
    </span>
  );
};

Favorite.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  property: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps, { addFavorite, removeFavorite })(
  Favorite
);

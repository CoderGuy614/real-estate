import React from "react";
import PropTypes from "prop-types";
import { HeartFill } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../actions/favorite";

const Favorite = ({
  favorites: { favorites },
  id,
  addFavorite,
  removeFavorite,
  isThumbnail,
}) => {
  function toggleFavorite(p) {
    favorites.includes(p) ? removeFavorite(p) : addFavorite(p);
  }

  return (
    <span className={`${isThumbnail ? "heart-thumbnail" : "favorite"}`}>
      {favorites.includes(id) ? (
        <HeartFill
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(id);
          }}
          color="red"
          size={25}
        />
      ) : (
        <HeartFill
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(id);
          }}
          color={isThumbnail ? "white" : "gray"}
          size={25}
        />
      )}{" "}
    </span>
  );
};

Favorite.propTypes = {
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  favorites: state.favoriteReducer,
});

export default connect(mapStateToProps, { addFavorite, removeFavorite })(
  Favorite
);

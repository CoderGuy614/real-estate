import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_SHOW_FAVORITES } from "./types";

// Add Favorite
export const addFavorite = (property) => (dispatch) => {
  dispatch({
    type: ADD_FAVORITE,
    payload: property,
  });
};
// Remove Favorite
export const removeFavorite = (property) => (dispatch) => {
  dispatch({
    type: REMOVE_FAVORITE,
    payload: property,
  });
};

// Show Favorites
export const toggleShowFavorites = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SHOW_FAVORITES,
  });
};

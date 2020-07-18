import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_SHOW_FAVORITES } from "./types";
import { setAlert } from "../actions/alert";

// Add Favorite
export const addFavorite = (property) => (dispatch) => {
  dispatch({
    type: ADD_FAVORITE,
    payload: property,
  });
  dispatch(setAlert("Added to Favorites", "set-alert"));
};
// Remove Favorite
export const removeFavorite = (property) => (dispatch) => {
  dispatch({
    type: REMOVE_FAVORITE,
    payload: property,
  });
  dispatch(setAlert("Removed from Favorites", "remove-alert"));
};

// Show Favorites
export const toggleShowFavorites = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SHOW_FAVORITES,
  });
};

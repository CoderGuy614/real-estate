import { ADD_FAVORITE } from "./types";

// Add Favorite
export const addFavorite = (property) => (dispatch) => {
  dispatch({
    type: ADD_FAVORITE,
    payload: property,
  });
};

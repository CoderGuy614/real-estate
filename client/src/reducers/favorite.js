import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_SHOW_FAVORITES,
} from "../actions/types";

const initialState = {
  favorites: [],
  showFavorites: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((id) => id !== payload),
      };

    case TOGGLE_SHOW_FAVORITES:
      return {
        ...state,
        showFavorites: !state.showFavorites,
      };
    default:
      return state;
  }
}

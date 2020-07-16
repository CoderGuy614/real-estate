import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITE:
      return [...state, payload];
    case REMOVE_FAVORITE:
      return state.filter((id) => id !== payload);

    default:
      return state;
  }
}

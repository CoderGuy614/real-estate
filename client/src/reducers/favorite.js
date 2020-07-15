import { ADD_FAVORITE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [payload, ...state],
      };
    default:
      return state;
  }
}

import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITE:
      return [payload, ...state];

    case REMOVE_FAVORITE:
      return state.filter((prop) => prop.id !== payload.id);

    default:
      return state;
  }
}

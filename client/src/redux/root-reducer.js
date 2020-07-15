import { combineReducers } from "redux";
import favoriteReducer from "../reducers/favorite";

const rootReducer = combineReducers({
  favorites: favoriteReducer,
});

export default rootReducer;

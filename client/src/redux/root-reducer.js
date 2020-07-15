import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import favoriteReducer from "../reducers/favorite";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  favorites: favoriteReducer,
});

export default persistReducer(persistConfig, rootReducer);

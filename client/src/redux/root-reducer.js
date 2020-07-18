import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import favoriteReducer from "../reducers/favorite";
import alertReducer from "../reducers/alert";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoriteReducer"],
};

const rootReducer = combineReducers({
  favoriteReducer,
  alertReducer,
});

export default persistReducer(persistConfig, rootReducer);

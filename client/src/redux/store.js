import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "../redux/root-reducer";
import logger from "redux-logger";

const initialState = {};

const middleWare = [logger, thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export const persistor = persistStore(store);

export default { store, persistor };

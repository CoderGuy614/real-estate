import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Houses from "./Houses";
import Property from "./property/Property";
import Contact from "./Contact";
import Nav from "./Nav";

import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Nav />

          <Switch>
            <Route path="/property/:id" component={Property} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Houses} />
          </Switch>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

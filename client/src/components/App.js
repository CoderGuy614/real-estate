import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Houses from "./Houses";
import Property from "./Property";
import Contact from "./Contact";
import Nav from "./Nav";

import { Provider } from "react-redux";
import store from "../redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/property/:id" component={Property} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Houses} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

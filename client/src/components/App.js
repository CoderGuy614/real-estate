import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Houses from "./Houses";
import Property from "./Property";
import Contact from "./Contact";
import Nav from "./Nav";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/property/:id" component={Property} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Houses} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Houses from "./Houses";
import Property from "./Property";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/property/:id" component={Property} />
          <Route path="/" component={Houses} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

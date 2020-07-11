import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Houses from "./Houses";
import House from "./House";
import Plus from "./Plus";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/houses/:id" component={House} />
          <Route path="/plus" component={Plus} />
          <Route path="/" component={Houses} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

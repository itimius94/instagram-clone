import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./screens/Login";
import Signup from "./screens/Signup";

import "./style.scss";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

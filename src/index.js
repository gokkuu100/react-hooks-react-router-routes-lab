import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import Home from "./components/Home";
import Movies from "./components/Movies";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "./components/NavBar";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <Router>
    <NavBar />
    <Switch>
      <Route exact path ="/actors">
        <Actors />
      </Route>
      <Route exact path="/directors">
        <Directors />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/movies">
        <Movies />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

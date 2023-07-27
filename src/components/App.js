import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
    <>
    <Home />
    <Movies />
    <Directors />
    <Actors />
    </>
  )
}

export default App;

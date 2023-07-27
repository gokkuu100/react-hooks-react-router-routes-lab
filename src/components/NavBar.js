import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <>
        <NavLink
        to="/"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/directors"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
      <NavLink
      to="/actors"
      exact
      activeStyle={{
        background: "darkblue"
      }}
      >

      </NavLink>
        Login
      </NavLink>
    </>
  )
}

export default NavBar;

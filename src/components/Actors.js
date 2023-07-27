import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <>
    <h1>Actors Page</h1>
    {actors.map((actor) => (<div key={actor.id}>Name:{actor.name} Movies:<ul><li>{actor.movies}</li></ul></div>))}
    </>
  )
}

export default Actors;

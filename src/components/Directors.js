import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <>
    <h1>Directors Page</h1>
    {directors.map((director) => (<div key={director.id}>Name:{director.name} Movies:<ul><li>{director.movies}</li></ul></div>))}
    </>
  )
}

export default Directors;

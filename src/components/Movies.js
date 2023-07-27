import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <>
    <h1>Movies Page</h1>
    {movies.map((movie) => (<div key={movie.id}>
    Title:{movie.title} 
    Time:{movie.time} 
    genres:<ul><li>{movie.genres}</li></ul>
    </div>))}
    </>
  )
}

export default Movies;

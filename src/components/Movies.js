import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesList = movies.map((movie, index) => {
    return (
      <div key={index}>
        {movie.title}
        <br></br>
        {movie.time}
        <ul>
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    );
  });
  return (
    <>
    <h1>Movies Page</h1>
    {moviesList}
    </>
  )
}

export default Movies;

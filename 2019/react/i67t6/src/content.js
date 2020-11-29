import React from "react";
import MovieList from "./movie-list";

function Content({ isLoading, movies, selectedMovies, handlePosterClick }) {
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <MovieList
      movies={movies}
      selectedMovies={selectedMovies}
      handlePosterClick={handlePosterClick}
    />
  );
}

export default Content;

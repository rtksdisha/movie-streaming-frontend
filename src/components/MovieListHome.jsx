import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieHome from "./MovieHome";
import SortAndFilter from "./SortAndFilter";

export default function MovieListHome({ movies }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shapes, setShapes] = useState(0);
  const [genre, setGenre] = useState('')

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies, filteredMovies, setFilteredMovies]);

  function handleClick(nextMovies) {
    setShapes(shapes + 1);
    setFilteredMovies(nextMovies);
  }

  function handleSort(value){
    setGenre(value)
  }

  return (
    <>
      <SortAndFilter
        filteredMovies={filteredMovies}
        updateMovies={handleClick}
        updateMoviesSort={handleSort}
      />
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {(genre ? filteredMovies.filter(m => m.genre === genre) : filteredMovies).map(movie => (
          <Grid key={movie._id + Date.now()} item xs={12} sm={6} md={4}>
            <MovieHome movie={movie} key={movie._id + Date.now()}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

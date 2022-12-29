import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MovieHome from "./MovieHome";
import SortAndFilter from "./SortAndFilter";

const MovieListHome = ({ movies }) => {
  //   if (movies.length === 0) {
  //     return null;
  //   }
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() =>{
    setFilteredMovies(movies)
    console.log(filteredMovies)
  }, [movies, filteredMovies, setFilteredMovies]);

  return (
    <><SortAndFilter filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies} />
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {(filteredMovies).map((movie) => {
        return (
          <Grid key={movie._id} item xs={12} sm={6} md={4}>
            <MovieHome movie={movie} key={movie._id} />
          </Grid>
        );
      })}
    </Grid></>
  );
};

export default MovieListHome;

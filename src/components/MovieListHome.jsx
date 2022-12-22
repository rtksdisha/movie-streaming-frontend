import { Grid } from "@mui/material";
import React from "react";
import MovieHome from "./MovieHome";

const MovieListHome = ({ movies }) => {
  //   if (movies.length === 0) {
  //     return null;
  //   }

  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {movies.map((movie) => {
        return (
          <Grid key={movie._id} item xs={12} sm={6} md={4}>
            <MovieHome movie={movie} key={movie._id} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MovieListHome;

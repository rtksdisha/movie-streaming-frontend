import { Grid } from "@mui/material";
import React from "react";
import MovieAdmin from "../components/MovieAdmin";

const MovieListAdmin = ({ movies, handleOnEdit, handleOnDelete}) => {
  if (movies.length === 0) {
    return null;
  }

  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>
      {movies.map((movie) => {
        return (
          <Grid key={movie._id} item xs={12} sm={6} md={4}>
            <MovieAdmin movie={movie} key={movie._id} handleOnEdit={handleOnEdit} handleOnDelete={handleOnDelete} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MovieListAdmin;

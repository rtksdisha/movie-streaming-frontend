import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/system/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { updateMovie } from "../api/moviesApi";

const MovieHome = ({ movie }) => {
  const navigate = useNavigate();

  function handleOnClick() {
    movie.isFavorite = !movie.isFavorite;
    //calling api to update DB
    updateMovie(movie)

    if (movie.isFavorite) {
      window.alert("Added to favorites");
    } else {
      window.alert("Removed from favorites");
    }
  }

  return (
    <>
      <Box
        onClick={() => navigate("/movieDetails", { state: movie })}
        sx={{ backgroundColor: "beige", height: 480, boxShadow: 3 }}
      >
        {/* Cover image */}
        <Box
          component="img"
          sx={{ height: 0.4, width: 1, objectFit: "cover" }}
          src={movie.coverImage}
          alt="Error Loading Image"
        />
        <Stack
          sx={{ height: -2, px: 3.5, width: 0.5 }}
          justifyContent="space-around"
          spacing={2}
        >
          <Stack spacing={1} sx={{ width: 1 }}>
            <Typography fontSize={21}>Name:</Typography>
            <Typography fontSize={17}>{movie.name}</Typography>

            <Typography fontSize={21}>Genre:</Typography>
            <Typography fontSize={17}>{movie.genre}</Typography>

            <Typography fontSize={21}>Release Date:</Typography>
            <Typography fontSize={17}>{movie.releaseDate}</Typography>
          </Stack>
        </Stack>
      </Box>

      <Stack direction="row">
        {movie.isFavorite ? (
          <Button
            onClick={handleOnClick}
            sx={{
              background: "Maroon",
              height: 64,
              color: "white",
              width: 1,
              margin: 0,
              padding: 0,
              borderRadious: 0,
              boxShadow: 3,
            }}
          >
            Remove from Favorite
          </Button>
        ) : (
          <Button
            onClick={handleOnClick}
            sx={{
              background: "Maroon",
              height: 64,
              color: "white",
              width: 1,
              margin: 0,
              padding: 0,
              borderRadious: 0,
              boxShadow: 3,
            }}
          >
            Add to Favorite
          </Button>
        )}
      </Stack>
    </>
  );
};

export default MovieHome;

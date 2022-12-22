import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/system/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const MovieAdmin = ({ movie, handleOnEdit }) => {
  return (
    <>
      <Box sx={{ backgroundColor: "beige", boxShadow: 3 }}>
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

            <Typography fontSize={21}>Synopsis:</Typography>
            <Typography fontSize={17}>{movie.synopsis}</Typography>

            <Typography fontSize={21}>Genre:</Typography>
            <Typography fontSize={17}>{movie.genre}</Typography>

            <Typography fontSize={21}>Release Date:</Typography>
            <Typography fontSize={17}>{movie.releaseDate}</Typography>

            <Typography fontSize={21}>Movie URL:</Typography>
            <Typography fontSize={17}>{movie.movieUrl}</Typography>
          </Stack>
        </Stack>
      </Box>
      <Stack direction="row">
        <Button
          onClick={() => handleOnEdit(movie)}
          sx={{
            background: "black",
            height: 64,
            color: "white",
            width: 1,
            margin: 0,
            padding: 0,
            borderRadious: 0,
            boxShadow: 3,
          }}
        >
          EDIT
        </Button>
        <Button
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
          DELETE
        </Button>
      </Stack>
    </>
  );
};

export default MovieAdmin;

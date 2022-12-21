import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/system/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
  const movie = useLocation().state;

  return (
    <>
      <Box sx={{ backgroundColor: "beige", height: 480, boxShadow: 3 }}>
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
            <Typography fontSize={17}>{movie.synopsis}</Typography>
          </Stack>
        </Stack>
      </Box>
      <Stack direction="row">
        <Button
          sx={{
            background: "Green",
            height: 64,
            color: "white",
            width: 1,
            margin: 0,
            padding: 0,
            borderRadious: 0,
            boxShadow: 3,
          }}
        >
          Watch Now
        </Button>
        <Button
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
          Add to Favorite
        </Button>
      </Stack>
    </>
  );
};

export default MovieDetails;

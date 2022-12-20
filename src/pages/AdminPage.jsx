import { useState } from "react";
import { Box, Fab } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import AddMovieModal from "../modals/AddMovieModal";

//option to add new movie with a pop up
//show existing list of movies
//can edit and delete movies

const AdminPage = ({ allMovies, setAllMovies }) => {
    // To make add movie form visible
  const [isAddMovieModalVisible, setIsAddMovieVisible] = useState(false);

  const handleOnSubmit = (movie) => {
    const tempMovies = Array.from(allMovies);
    tempMovies.push({
      ...movie,
      _id: tempMovies.length + 1,
    });

    setAllMovies(tempMovies);
  };

  return (
    <Box>
      <Fab
        variant="extended"
        onClick={() => setIsAddMovieVisible(true)}
        sx={{
          position: "absolute",
          bottom: "24px",
          right: "24px",
        }}
      >
        <AddCircleOutline sx={{ mr: 1 }} />
        Add a new Movie
      </Fab>
      <AddMovieModal
        open={isAddMovieModalVisible}
        onClose={() => setIsAddMovieVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </Box>
  );
};

export default AdminPage;

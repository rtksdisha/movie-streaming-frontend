import { useState } from "react";
import { Container, Fab } from "@mui/material";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import AddMovieModal from "../modals/AddMovieModal";
import MovieListAdmin from "../components/MovieListAdmin"

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
      isFavorite: false
    });

    setAllMovies(tempMovies);
  };

  return (
    <Container maxWidth="lg" sx={{margin:2}}>
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
      <MovieListAdmin movies={allMovies}/>
      <AddMovieModal
        open={isAddMovieModalVisible}
        onClose={() => setIsAddMovieVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </Container>
  );
};

export default AdminPage;

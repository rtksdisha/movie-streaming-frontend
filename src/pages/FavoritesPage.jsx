import { Container } from "@mui/material";
import MovieListHome from "../components/MovieListHome";

//need to add movies here
//clickable to expand and show movie details
//filter by and sort movies on page

const FavoritesPage = ({ allMovies }) => {
  const favoriteMovies = allMovies.filter(movie => movie.isFavorite)

  return (
    <Container maxWidth="lg" sx={{ margin: 2 }}>
      <MovieListHome movies={favoriteMovies} />
    </Container>
  );
};

export default FavoritesPage;

import { useEffect, useState } from "react";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import MovieDetails from "./components/MovieDetails";
import { getMovies } from "./api/moviesApi";

function App() {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    getAllMovies();
  }, []);
  
  const getAllMovies = async () => {
    const movies = await getMovies();
    setAllMovies(movies);
  };

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage allMovies={allMovies} />} />
        <Route
          path="/admin"
          element={
            <AdminPage allMovies={allMovies} setAllMovies={setAllMovies} />
          }
        />
        <Route path="/movies" element={<HomePage allMovies={allMovies} />} />
        <Route
          path="/favorites"
          element={<FavoritesPage allMovies={allMovies} />}
        />
        <Route path="/movieDetails" element={<MovieDetails />} />
      </Routes>
    </Fragment>
  );
}

export default App;

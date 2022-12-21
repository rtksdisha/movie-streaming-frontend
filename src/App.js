import { useState } from "react";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import FavoritesPage from "./pages/FavotitesPage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  const [allMovies, setAllMovies] = useState([]);

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path ="/" element ={<MoviesPage/>}/>
        <Route
          path="/admin"
          element={
            <AdminPage
              allMovies={allMovies}
              setAllMovies={setAllMovies}
            />
          }
        />
        <Route path="/movies" element={<MoviesPage></MoviesPage>} />
        <Route path="/favorites" element={<FavoritesPage></FavoritesPage>} />
      </Routes>
    </Fragment>
  );
}

export default App;

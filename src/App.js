import { Fragment } from "react";
import Navbar from "./components/Navbar"
import {Routes, Route} from "react-router-dom"
import AdminPage from "./pages/AdminPage"
import FavoritesPage from "./pages/FavotitesPage"
import MoviesPage from "./pages/moviesPage"


function App() {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route
            path="/movies"
            element = {
              <MoviesPage>

              </MoviesPage>
            }
        />
                <Route
            path="/favorites"
            element = {
              <FavoritesPage>

              </FavoritesPage>
            }
        />
                <Route
            path="/admin"
            element = {
              <AdminPage>

              </AdminPage>
            }
        />
      </Routes>
    </Fragment>
  );
}

export default App;

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useCallback, useEffect } from "react";

function moviesFilter(value, filteredMovies) {
  if (filteredMovies) {
    const field = value.split("-")[0];
    const direction = value.split("-")[1];

    if (direction === "descending") {
      return filteredMovies.sort((a, b) => {
        return a[field] < b[field] ? 1 : a[field] > b[field] ? -1 : 0;
      });
    } else {
      return filteredMovies.sort((a, b) => {
        return a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0;
      });
    }
  }
}

export default function SortAndFilter({ filteredMovies, updateMovies, updateMoviesSort }) {
  const [filter, setFilter] = React.useState("");
  const [sort, setSort] = React.useState("");

  const handleFilter = (event) => {
    const value = event.target.value;

    updateMovies(moviesFilter(value, filteredMovies));
    setFilter(value);
  };

  const handleSort = (event) => {
    const value = event.target.value;
    
    updateMoviesSort(value);
    setSort(value);
  };

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="sort-label">Genre</InputLabel>
        <Select
          labelId="sort-label"
          id="sort"
          value={sort}
          onChange={handleSort}
          label="Sort"
        >
          <MenuItem value="">
            <em>Choose a Genre</em>
          </MenuItem>
          <MenuItem value={"horror"}>Horror</MenuItem>
          <MenuItem value={"comedy"}>Comedy</MenuItem>
          <MenuItem value={"action"}>Action</MenuItem>
          <MenuItem value={"mystery"}>Mystery</MenuItem>
          <MenuItem value={"adventure"}>Adventure</MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard">Filter By</InputLabel>
        <Select
          labelId="demo-simple-select-standard"
          id="demo-simple-select-standard"
          value={filter}
          onChange={handleFilter}
          label="Filter"
        >
          <MenuItem value="">
            <em>Filter By</em>
          </MenuItem>
          <MenuItem value={"name-ascending"}>Name (A-Z)</MenuItem>
          <MenuItem value={"name-descending"}>
            Name (Z-A)
          </MenuItem>
          <MenuItem value={"releaseDate-ascending"}>
            Release Date (1-2023)
          </MenuItem>
          <MenuItem value={"releaseDate-descending"}>
            Release Date (2023-1)
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

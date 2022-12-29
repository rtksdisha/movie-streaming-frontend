import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useCallback, useEffect } from "react";

export default function SortAndFilter({ filteredMovies, setFilteredMovies }) {
  const [filter, setFilter] = React.useState("");
  const [sort, setSort] = React.useState("");

  const handleFilter = useCallback((event) => {
    const value = event.target.value;

    const sorted = filteredMovies.sort((a, b) => {
      return a[value][0] < b[value][0] ? 1 : a[value][0] > b[value][0] ? -1 : 0;
    });

    setFilteredMovies(sorted);
    console.log(filteredMovies);
    setFilter(event.target.value);
  });

  const handleSort = (event) => {
    console.log(event.target.value)
    setSort(event.target.value);
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
          <MenuItem value={'horror'}>Horror</MenuItem>
          <MenuItem value={'comedy'}>Comedy</MenuItem>
          <MenuItem value={'action'}>Action</MenuItem>
          <MenuItem value={'anime'}>Mystery</MenuItem>
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
          <MenuItem value={"name"}>Name in Descending Order</MenuItem>
          <MenuItem value={"releaseDate"}>Release Date</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

import MovieForm from "../forms/MovieForm";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

//Makes the pop up content to add a movie
const AddMovieModal = ({ open, onClose, onSubmit }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a New Movie</DialogTitle>
      <DialogContent>
        <MovieForm onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          form="movie-form"
          type="reset"
          //name of the button
          children="Clear Form"
        />
        <Button
          variant="outlined"
          form="movie-form"
          type="submit"
          //name of the button
          children="Add movie"
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddMovieModal;

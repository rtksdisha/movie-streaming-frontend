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
      <DialogTitle sx={{ padding: "20px", backgroundColor:"maroon" }}>Add a New Movie</DialogTitle>
      <DialogContent  sx={{ padding: "20px", backgroundColor:"beige" }}>
        <MovieForm onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions  sx={{ backgroundColor:"beige" }}>
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
          children="Add"
          onClick={onClose}
        />
      </DialogActions>
    </Dialog>
  );
};

export default AddMovieModal;

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Box, Grid, TextField } from "@mui/material";

const MovieForm = (onSubmit, defaultEditValues) => {
  const defaultValues = {
    name: "",
    synopsis: "",
    genre: "",
    movieUrl: "",
    releaseDate: Date.now(),
    coverImage: "",
  };

  const movieFormSchema = yup.object().shape({
    name: yup.string().required("Please provide the movie name"),
    synopsis: yup.string(),
    genre: yup.string().required("Please write a genre"),
    movieUrl: yup.string(),
    releaseDate: yup.date().required("Please enter the release date"),
    coverImage: yup.string(),
  });

  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues: defaultEditValues || defaultValues,
    resolver: yupResolver(movieFormSchema),
    mode: "all",
  });

  const coverImageValue = watch("coverImage");

  return (
    <Box
      id="movie-form"
      component="form"
      onReset={() => reset(defaultValues)}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ padding: "20px" }}
    >
      {/* Grid of Type container */}
      <Grid container spacing={5}>
        {/* grid of type item */}
        <Grid item xs={8}>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieForm;

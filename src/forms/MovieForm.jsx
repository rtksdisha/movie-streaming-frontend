import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Box, Grid, TextField } from "@mui/material";

const MovieForm = ({ onSubmit, defaultEditValues }) => {
  const defaultValues = {
    name: "",
    synopsis: "",
    genre: "",
    movieUrl: "",
    releaseDate: "",
    coverImage: "",
  };

  const movieFormSchema = yup.object().shape({
    name: yup.string().required("Provide movie name"),
    synopsis: yup.string(),
    genre: yup.string().required("Write a genre"),
    movieUrl: yup.string(),
    releaseDate: yup.string(),
    coverImage: yup.string(),
  });

  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(movieFormSchema),
    mode: "all",
  });

  const coverImageValue = watch("coverImage");

  const details = [
    "name",
    "synopsis",
    "genre",
    "movieUrl",
    "releaseDate",
    "coverImage",
  ];

  return (
    <Box
      id="movie-form"
      component="form"
      onReset={() => reset(defaultValues)}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ padding: "20px" }}
    >
      <Grid container spacing={5}>
        {details.map((detail) => (
          <Grid key={detail} item xs={8}>
            <Controller
              key={detail}
              control={control}
              name={detail}
              render={({ field, fieldState }) => (
                <TextField
                  key={detail}
                  {...field}
                  label={detail}
                  variant="standard"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  autoComplete={false}
                />
              )}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieForm;

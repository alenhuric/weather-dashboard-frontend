import React from "react";
import { TextField, Button, CircularProgress, Typography } from "@mui/material";

function WeatherForm({ city, setCity, loading, error, onSubmit }) {
  return (
    <>
      <TextField
        label="Enter city name"
        variant="outlined"
        fullWidth
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
        sx={{ width: "100%", py: 1 }}
      >
        Get Weather
      </Button>

      {loading && <CircularProgress sx={{ mt: 3 }} />}

      {error && (
        <Typography color="error" sx={{ mt: 3 }}>
          {error}
        </Typography>
      )}
    </>
  );
}

export default WeatherForm;

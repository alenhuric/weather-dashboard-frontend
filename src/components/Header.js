import React from "react";
import { Paper, Typography } from "@mui/material";

function Header() {
  return (
    <Paper
      elevation={3}
      square
      sx={{
        p: 3,
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        🌤 Weather Dashboard
      </Typography>
      <Typography variant="subtitle1">
        Real-time weather data powered by FastAPI + OpenWeather
      </Typography>
    </Paper>
  );
}

export default Header;

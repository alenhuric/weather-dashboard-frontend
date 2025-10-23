import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {weather.city}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          🌡 Temperature: {weather.temperature}°C
        </Typography>
        <Typography variant="body1">
          💧 Humidity: {weather.humidity}%
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;

import React, { useState } from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import axios from "axios";

import Header from "./components/Header";
import WeatherForm from "./components/WeatherForm";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await axios.get(`http://127.0.0.1:8080/weather/${city}`);
      setWeather(response.data);
    } catch (err) {
      setError("Unable to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Container
          maxWidth="sm"
          sx={{ mt: 5, textAlign: "center", flexGrow: 1 }}
        >
          <WeatherForm
            city={city}
            setCity={setCity}
            loading={loading}
            error={error}
            onSubmit={handleFetchWeather}
          />
          <WeatherCard weather={weather} />
        </Container>
        <Footer />
      </Box>
    </>
  );
}

export default App;

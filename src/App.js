import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            Weather Dashboard
          </Typography>
          <Typography variant="body1">
            Enter a city to get current weather information.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;

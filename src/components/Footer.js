import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        mt: "auto",
        textAlign: "center",
        bgcolor: "grey.100",
        color: "text.secondary",
      }}
    >
      <Typography variant="caption">
        © {new Date().getFullYear()} Weather Dashboard – Built with React &
        FastAPI
      </Typography>
    </Box>
  );
}

export default Footer;

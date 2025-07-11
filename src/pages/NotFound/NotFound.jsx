import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export default function NotFound() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ fontSize: "25px", fontWeight: "bold" }}
        color={theme.palette.error.main}
      >
        NO PAGE <br />
      </Typography>
      <Typography>Please Try Again Later</Typography>
    </Box>
  );
}

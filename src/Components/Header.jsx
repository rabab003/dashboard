import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Header({ text, subText }) {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Typography
          sx={{
            color: theme.palette.info.light,
            fontWeight: "bold",
          }}
          variant="h5"
        >
          {text}
        </Typography>
        <Typography variant="body1">{subText}</Typography>
      </Box>
    </>
  );
}

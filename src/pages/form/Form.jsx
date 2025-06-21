import { Box, Stack, TextField } from "@mui/material";
import React from "react";

export default function Form() {
  return (
    <>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: "3" }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            sx={{ flex: 1 }}
            required
            variant="filled"
            label="Required"
            defaultValue="First Name"
          />
          <TextField
            sx={{ flex: 1 }}
            required
            variant="filled"
            label="Required"
            defaultValue="First Name"
          />
        </Stack>

        <TextField
          required
          variant="filled"
          label="Email"
          defaultValue="First Name"
        />
        <TextField
          required
          variant="filled"
          label="Contact Number"
          defaultValue="First Name"
        />
        <TextField
          required
          variant="filled"
          label="Adress 1"
          defaultValue="First Name"
        />
        <TextField
          required
          variant="filled"
          label="Adress 2"
          defaultValue="First Name"
        />
      </Box>
    </>
  );
}

import { color, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Card from "../Card";
import { EmailOutlined } from "@mui/icons-material";
import { Theme } from "@fullcalendar/core/internal";

export default function Row1() {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={1}
        justifyContent={{ xs: "center", sm: "space-between" }}
      >
        <Card
          sx={{ fontSize: "23px", color: Theme.palette.secondary.main }}
          icon={<EmailOutlined />}
          chart={undefined}
          title={"12,421"}
          subTitle={"Email sent"}
          increase={"+14%"}
        />
      </Stack>
    </>
  );
}

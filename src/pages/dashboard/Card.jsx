import React from "react";
import { Paper, Stack, Typography } from "@mui/material";

export default function Card({ icon, chart, title, subTitle, increase }) {
  return (
    <div>
      <Paper
        sx={{
          minWidth: "333px",
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack>
          {icon}
          <Typography variant="body2" sx={{ fontSize: "13px" }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "13px" }}>
            {subTitle}
          </Typography>
        </Stack>
        <Stack>
          {chart}
          <Typography>{increase}</Typography>
        </Stack>
      </Paper>
    </div>
  );
}

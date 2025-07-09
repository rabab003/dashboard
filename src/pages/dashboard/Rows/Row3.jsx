import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import PieChart from "../../pie/PieChart";
import Bar from "../../bar/Bar";
import GeographyChart from "../../geography/GeographyChart";

export default function Row3() {
  const Theme = useTheme();
  return (
    <Stack direction={"row"} gap={1.5} flexWrap={"wrap"} mt={3}>
      <Paper
        sx={{
          flexGrow: 1,
          width: "28%",
          minWidth: "400px",
        }}
      >
        <Typography
          color={Theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight={600}
        >
          campaign
        </Typography>
        <PieChart isDashboard={true} />

        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,345 revenue generated
        </Typography>
        <Typography
          variant="body2"
          px={0.7}
          pb={3}
          align="center"
          sx={{ mt: "15px" }}
        >
          include extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper
        sx={{
          flexGrow: 1,
          width: "33%",
          minWidth: "400px",
        }}
      >
        <Typography
          color={Theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight={600}
        >
          sales quality
        </Typography>
        <Bar isDashboard={true} />
      </Paper>
      <Paper
        sx={{
          flexGrow: 1,
          width: "33%",
          minWidth: "400px",
        }}
      >
        <Typography
          color={Theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
          variant="h6"
          fontWeight={600}
        >
          Geography Based Traffic
        </Typography>
        <GeographyChart isDashboard={true} />
      </Paper>
    </Stack>
  );
}

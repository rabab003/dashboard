import React from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import Bar from "./Bar";
function BarChart() {
  const theme = useTheme();

  return (
    <>
      <Bar />
    </>
  );
}

export default BarChart;

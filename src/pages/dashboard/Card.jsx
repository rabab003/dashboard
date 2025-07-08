import React from "react";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

export default function Card({
  icon,
  title,
  scheme,
  subTitle,
  increase,
  data,
}) {
  const theme = useTheme();

  return (
    <div>
      <Paper
        sx={{
          minWidth: "333px",
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
          flexGrow: 1,
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
        <Stack alignItems={"center"}>
          <Box height={"70px"} width={"70px"}>
            <ResponsivePie
              data={data}
              innerRadius={0.5}
              padAngle={0.6}
              theme={{
                //   background: "#ffffff",
                text: {
                  fontSize: 11,
                  // fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "#ffffff",
                },
                axis: {
                  domain: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                  },
                  legend: {
                    text: {
                      fontSize: 12,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "#ffffff",
                    },
                  },
                  ticks: {
                    line: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "#ffffff",
                    },
                  },
                },
                grid: {
                  line: {
                    stroke: "#dddddd",
                    strokeWidth: 1,
                  },
                },
                legends: {
                  title: {
                    text: {
                      fontSize: 11,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "#ffffff",
                    },
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "#ffffff",
                  },
                  ticks: {
                    line: {},
                    text: {
                      fontSize: 10,
                      fill: theme.palette.text.primary,
                      outlineWidth: 0,
                      outlineColor: "#ffffff",
                    },
                  },
                },
                annotations: {
                  text: {
                    fontSize: 13,
                    fill: theme.palette.text.primary,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  link: {
                    stroke: "#000000",
                    strokeWidth: 1,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  outline: {
                    stroke: "#000000",
                    strokeWidth: 2,
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                  symbol: {
                    fill: "#000000",
                    outlineWidth: 2,
                    outlineColor: "#ffffff",
                    outlineOpacity: 1,
                  },
                },
                tooltip: {
                  // wrapper: {},
                  container: {
                    background: "#ffffff",
                    color: theme.palette.text.primary,
                    fontSize: 12,
                  },
                  basic: {},
                  chip: {},
                  table: {},
                  tableCell: {},
                  tableCellValue: {},
                },
              }}
              cornerRadius={2}
              activeOuterRadiusOffset={8}
              arcLinkLabelsSkipAngle={10}
              colors={{ scheme: scheme }}
              arcLinkLabelsTextColor={theme.palette.secondary.main}
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            />
          </Box>
          <Typography sx={{ paddingTop: "10px" }}>{increase}</Typography>
        </Stack>
      </Paper>
    </div>
  );
}

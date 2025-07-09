import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import React from "react";

const data = [
  {
    country: "AD",
    "hot dog": 96,
    burger: 13,
    sandwich: 49,
    kebab: 34,
    fries: 79,
    donut: 45,
  },
  {
    country: "AE",
    "hot dog": 53,
    burger: 104,
    sandwich: 49,
    kebab: 136,
    fries: 111,
    donut: 0,
  },
  {
    country: "AF",
    "hot dog": 70,
    burger: 85,
    sandwich: 60,
    kebab: 90,
    fries: 75,
    donut: 20,
  },
  {
    country: "AL",
    "hot dog": 40,
    burger: 50,
    sandwich: 70,
    kebab: 110,
    fries: 95,
    donut: 15,
  },
  {
    country: "AM",
    "hot dog": 65,
    burger: 45,
    sandwich: 80,
    kebab: 120,
    fries: 85,
    donut: 10,
  },
  {
    country: "AO",
    "hot dog": 55,
    burger: 60,
    sandwich: 55,
    kebab: 85,
    fries: 65,
    donut: 5,
  },
];

export default function Bar({ isDashboard = false }) {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard ? "300px" : "75vh" }}>
      <ResponsiveBar
        data={data}
        indexBy="country"
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        padding={0.25}
        theme={{
          // background: "#ffffff",
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
        labelSkipWidth={12}
        labelSkipHeight={12}
        colors={{ scheme: "pastel1" }}
        legends={
          isDashboard
            ? []
            : [
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  translateX: 120,
                  itemsSpacing: 3,
                  itemWidth: 100,
                  itemHeight: 16,
                },
              ]
        }
        axisBottom={
          isDashboard ? {} : { legend: "country (indexBy)", legendOffset: 32 }
        }
        axisLeft={isDashboard ? {} : { legend: "salary", legendOffset: -40 }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        valueFormat=" >-$"
      />
    </Box>
  );
}

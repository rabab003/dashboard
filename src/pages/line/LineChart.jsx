import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Box, useTheme } from "@mui/material";

const data = [
  {
    id: "japan",
    data: [
      {
        x: "plane",
        y: 222,
      },
      {
        x: "helicopter",
        y: 55,
      },
      {
        x: "boat",
        y: 249,
      },
      {
        x: "train",
        y: 70,
      },
      {
        x: "subway",
        y: 289,
      },
      {
        x: "bus",
        y: 35,
      },
      {
        x: "car",
        y: 134,
      },
      {
        x: "moto",
        y: 298,
      },
      {
        x: "bicycle",
        y: 253,
      },
      {
        x: "horse",
        y: 93,
      },
      {
        x: "skateboard",
        y: 230,
      },
      {
        x: "others",
        y: 238,
      },
    ],
  },
  {
    id: "france",
    data: [
      {
        x: "plane",
        y: 86,
      },
      {
        x: "helicopter",
        y: 123,
      },
      {
        x: "boat",
        y: 210,
      },
      {
        x: "train",
        y: 204,
      },
      {
        x: "subway",
        y: 181,
      },
      {
        x: "bus",
        y: 91,
      },
      {
        x: "car",
        y: 284,
      },
      {
        x: "moto",
        y: 230,
      },
      {
        x: "bicycle",
        y: 101,
      },
      {
        x: "horse",
        y: 18,
      },
      {
        x: "skateboard",
        y: 231,
      },
      {
        x: "others",
        y: 272,
      },
    ],
  },
  {
    id: "us",
    data: [
      {
        x: "plane",
        y: 278,
      },
      {
        x: "helicopter",
        y: 228,
      },
      {
        x: "boat",
        y: 73,
      },
      {
        x: "train",
        y: 259,
      },
      {
        x: "subway",
        y: 169,
      },
      {
        x: "bus",
        y: 148,
      },
      {
        x: "car",
        y: 66,
      },
      {
        x: "moto",
        y: 126,
      },
      {
        x: "bicycle",
        y: 12,
      },
      {
        x: "horse",
        y: 45,
      },
      {
        x: "skateboard",
        y: 289,
      },
      {
        x: "others",
        y: 282,
      },
    ],
  },
  {
    id: "germany",
    data: [
      {
        x: "plane",
        y: 54,
      },
      {
        x: "helicopter",
        y: 274,
      },
      {
        x: "boat",
        y: 171,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 212,
      },
      {
        x: "bus",
        y: 177,
      },
      {
        x: "car",
        y: 225,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 282,
      },
      {
        x: "horse",
        y: 215,
      },
      {
        x: "skateboard",
        y: 245,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "norway",
    data: [
      {
        x: "plane",
        y: 183,
      },
      {
        x: "helicopter",
        y: 261,
      },
      {
        x: "boat",
        y: 50,
      },
      {
        x: "train",
        y: 173,
      },
      {
        x: "subway",
        y: 227,
      },
      {
        x: "bus",
        y: 176,
      },
      {
        x: "car",
        y: 295,
      },
      {
        x: "moto",
        y: 260,
      },
      {
        x: "bicycle",
        y: 244,
      },
      {
        x: "horse",
        y: 250,
      },
      {
        x: "skateboard",
        y: 180,
      },
      {
        x: "others",
        y: 98,
      },
    ],
  },
];

export default function LineChart() {
  const theme = useTheme();
  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        theme={{
          // background: "#ffffff",
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
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
              stroke: theme.palette.mode === "dark" ? "#202020" : "#DBDBDB",
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
        axisBottom={{ legend: "transportation", legendOffset: 36 }}
        axisLeft={{ legend: "count", legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
          },
        ]}
      />
    </Box>
  );
}

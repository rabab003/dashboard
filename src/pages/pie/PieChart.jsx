import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Height } from "@mui/icons-material";
import { Box, useTheme } from "@mui/system";
import Header from "../../Components/Header";

const data = [
  {
    id: "scala",
    label: "scala",
    value: 227,
    color: "hsl(72, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 272,
    color: "hsl(196, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 169,
    color: "hsl(173, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 32,
    color: "hsl(272, 70%, 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 79,
    color: "hsl(153, 70%, 50%)",
  },
];

export default function PieChart({ isDashboard = false }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box sx={{ height: isDashboard ? "220px" : "75vh" }}>
      {isDashboard ? null : (
        <Header text={"Pie Chart"} subText={"simple Pie chart"} />
      )}
      <ResponsivePie
        data={data}
        theme={{
          text: {
            fontSize: 11,
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
            container: {
              background: isDark ? theme.palette.background.default : "#ffffff",
              color: theme.palette.text.primary,
              fontSize: 12,
              border: isDark ? `1px solid ${theme.palette.divider}` : "none",
              borderRadius: "4px",
              boxShadow: theme.shadows[2],
            },
          },
        }}
        margin={
          isDashboard
            ? { top: 0, right: 0, bottom: 0, left: 0 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={isDashboard ? 0.8 : 0.5}
        padAngle={0.6}
        cornerRadius={2}
        enableArcLabels={isDashboard ? false : true}
        enableArcLinkLabels={isDashboard ? false : true}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: theme.palette.text.primary }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: theme.palette.text.primary,
          modifiers: [["darker", 2]],
        }}
        // Customize hover effects
        colors={{ datum: "data.color" }} // Use the colors from your data
        onMouseEnter={(datum, event) => {
          // You can add custom hover logic here if needed
        }}
        // Customize the active (hovered) slice
        activeInnerRadiusOffset={4}
        activeOuterRadiusOffset={8}
        // Customize the tooltip
        tooltip={({ datum }) => (
          <div
            style={{
              padding: "8px 12px",
              background: isDark ? theme.palette.background.paper : "#ffffff",
              color: theme.palette.text.primary,
              border: isDark
                ? `1px solid ${theme.palette.divider}`
                : "1px solid #ddd",
              borderRadius: "4px",
              boxShadow: theme.shadows[2],
            }}
          >
            <strong>{datum.label}</strong>: {datum.value}
          </div>
        )}
        legends={
          isDashboard
            ? []
            : [
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  symbolShape: "circle",
                },
              ]
        }
      />
    </Box>
  );
}

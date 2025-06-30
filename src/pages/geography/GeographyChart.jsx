import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box, useTheme } from "@mui/material";
import { geo } from "./world_countries";

const data = [
  {
    id: "AFG",
    value: 707624,
  },
  {
    id: "AGO",
    value: 752797,
  },
  {
    id: "ALB",
    value: 129498,
  },
  {
    id: "ARE",
    value: 175428,
  },
  {
    id: "ARG",
    value: 198478,
  },
  {
    id: "ARM",
    value: 32022,
  },
  {
    id: "ATA",
    value: 308757,
  },
  {
    id: "ATF",
    value: 393521,
  },
  {
    id: "AUT",
    value: 946236,
  },
  {
    id: "AZE",
    value: 135004,
  },
  {
    id: "BDI",
    value: 998071,
  },
  {
    id: "BEL",
    value: 190106,
  },
  {
    id: "BEN",
    value: 685492,
  },
  {
    id: "BFA",
    value: 325225,
  },
  {
    id: "BGD",
    value: 214806,
  },
  {
    id: "BGR",
    value: 212931,
  },
  {
    id: "BHS",
    value: 800006,
  },
  {
    id: "BIH",
    value: 990027,
  },
  {
    id: "BLR",
    value: 906479,
  },
  {
    id: "BLZ",
    value: 590684,
  },
  {
    id: "BOL",
    value: 690876,
  },
  {
    id: "BRN",
    value: 148513,
  },
  {
    id: "BTN",
    value: 33542,
  },
  {
    id: "BWA",
    value: 266680,
  },
  {
    id: "CAF",
    value: 547371,
  },
  {
    id: "CAN",
    value: 66690,
  },
  {
    id: "CHE",
    value: 380428,
  },
  {
    id: "CHL",
    value: 597722,
  },
  {
    id: "CHN",
    value: 78537,
  },
  {
    id: "CIV",
    value: 929143,
  },
  {
    id: "CMR",
    value: 709153,
  },
  {
    id: "COG",
    value: 541869,
  },
  {
    id: "COL",
    value: 144472,
  },
  {
    id: "CRI",
    value: 1323,
  },
  {
    id: "CUB",
    value: 233464,
  },
  {
    id: "-99",
    value: 716322,
  },
  {
    id: "CYP",
    value: 109524,
  },
  {
    id: "CZE",
    value: 368254,
  },
  {
    id: "DEU",
    value: 237655,
  },
  {
    id: "DJI",
    value: 54500,
  },
  {
    id: "DNK",
    value: 518100,
  },
  {
    id: "DOM",
    value: 415750,
  },
  {
    id: "DZA",
    value: 353116,
  },
  {
    id: "ECU",
    value: 732296,
  },
  {
    id: "EGY",
    value: 490535,
  },
  {
    id: "ERI",
    value: 138041,
  },
  {
    id: "ESP",
    value: 499186,
  },
  {
    id: "EST",
    value: 679953,
  },
  {
    id: "ETH",
    value: 526654,
  },
  {
    id: "FIN",
    value: 446774,
  },
  {
    id: "FJI",
    value: 154041,
  },
  {
    id: "FLK",
    value: 797014,
  },
  {
    id: "FRA",
    value: 431767,
  },
  {
    id: "GAB",
    value: 24974,
  },
  {
    id: "GBR",
    value: 756032,
  },
  {
    id: "GEO",
    value: 687207,
  },
  {
    id: "GHA",
    value: 776555,
  },
  {
    id: "GIN",
    value: 848570,
  },
  {
    id: "GMB",
    value: 62395,
  },
  {
    id: "GNB",
    value: 232100,
  },
  {
    id: "GNQ",
    value: 911080,
  },
  {
    id: "GRC",
    value: 277041,
  },
  {
    id: "GTM",
    value: 682957,
  },
  {
    id: "GUY",
    value: 15044,
  },
  {
    id: "HND",
    value: 862887,
  },
  {
    id: "HRV",
    value: 264240,
  },
  {
    id: "HTI",
    value: 380,
  },
  {
    id: "HUN",
    value: 104629,
  },
  {
    id: "IDN",
    value: 638806,
  },
  {
    id: "IND",
    value: 275551,
  },
  {
    id: "IRL",
    value: 233139,
  },
  {
    id: "IRN",
    value: 197266,
  },
  {
    id: "IRQ",
    value: 42490,
  },
  {
    id: "ISL",
    value: 956656,
  },
  {
    id: "ISR",
    value: 624680,
  },
  {
    id: "ITA",
    value: 696109,
  },
  {
    id: "JAM",
    value: 803281,
  },
  {
    id: "JOR",
    value: 480981,
  },
  {
    id: "JPN",
    value: 56178,
  },
  {
    id: "KAZ",
    value: 858166,
  },
  {
    id: "KEN",
    value: 526341,
  },
  {
    id: "KGZ",
    value: 185613,
  },
  {
    id: "KHM",
    value: 604677,
  },
  {
    id: "OSA",
    value: 867253,
  },
  {
    id: "KWT",
    value: 700527,
  },
  {
    id: "LAO",
    value: 834214,
  },
  {
    id: "LBN",
    value: 756739,
  },
  {
    id: "LBR",
    value: 167,
  },
  {
    id: "LBY",
    value: 761131,
  },
  {
    id: "LKA",
    value: 287397,
  },
  {
    id: "LSO",
    value: 698965,
  },
  {
    id: "LTU",
    value: 922038,
  },
  {
    id: "LUX",
    value: 725172,
  },
  {
    id: "LVA",
    value: 254961,
  },
  {
    id: "MAR",
    value: 966972,
  },
  {
    id: "MDA",
    value: 166653,
  },
  {
    id: "MDG",
    value: 928821,
  },
  {
    id: "MEX",
    value: 284398,
  },
  {
    id: "MKD",
    value: 435527,
  },
  {
    id: "MLI",
    value: 879684,
  },
  {
    id: "MMR",
    value: 485474,
  },
  {
    id: "MNE",
    value: 240342,
  },
  {
    id: "MNG",
    value: 28450,
  },
  {
    id: "MOZ",
    value: 191390,
  },
  {
    id: "MRT",
    value: 672128,
  },
  {
    id: "MWI",
    value: 207072,
  },
  {
    id: "MYS",
    value: 170339,
  },
  {
    id: "NAM",
    value: 120769,
  },
  {
    id: "NCL",
    value: 454349,
  },
  {
    id: "NER",
    value: 664391,
  },
  {
    id: "NGA",
    value: 128331,
  },
  {
    id: "NIC",
    value: 584490,
  },
  {
    id: "NLD",
    value: 585192,
  },
  {
    id: "NOR",
    value: 942143,
  },
  {
    id: "NPL",
    value: 275454,
  },
  {
    id: "NZL",
    value: 930993,
  },
  {
    id: "OMN",
    value: 649619,
  },
  {
    id: "PAK",
    value: 621795,
  },
  {
    id: "PAN",
    value: 267057,
  },
  {
    id: "PER",
    value: 826641,
  },
  {
    id: "PHL",
    value: 540376,
  },
  {
    id: "PNG",
    value: 112888,
  },
  {
    id: "POL",
    value: 341883,
  },
  {
    id: "PRI",
    value: 384469,
  },
  {
    id: "PRT",
    value: 294314,
  },
  {
    id: "PRY",
    value: 459278,
  },
  {
    id: "QAT",
    value: 698872,
  },
  {
    id: "ROU",
    value: 396617,
  },
  {
    id: "RUS",
    value: 445289,
  },
  {
    id: "RWA",
    value: 24484,
  },
  {
    id: "ESH",
    value: 49178,
  },
  {
    id: "SAU",
    value: 571814,
  },
  {
    id: "SDN",
    value: 986054,
  },
  {
    id: "SDS",
    value: 761707,
  },
  {
    id: "SEN",
    value: 635614,
  },
  {
    id: "SLB",
    value: 906703,
  },
  {
    id: "SLE",
    value: 708591,
  },
  {
    id: "SLV",
    value: 660652,
  },
  {
    id: "ABV",
    value: 73443,
  },
  {
    id: "SOM",
    value: 629849,
  },
  {
    id: "SRB",
    value: 378175,
  },
  {
    id: "SUR",
    value: 823880,
  },
  {
    id: "SVK",
    value: 501965,
  },
  {
    id: "SVN",
    value: 929269,
  },
  {
    id: "SWZ",
    value: 646692,
  },
  {
    id: "SYR",
    value: 350768,
  },
  {
    id: "TCD",
    value: 419648,
  },
  {
    id: "TGO",
    value: 724978,
  },
  {
    id: "THA",
    value: 892981,
  },
  {
    id: "TJK",
    value: 895903,
  },
  {
    id: "TKM",
    value: 571609,
  },
  {
    id: "TLS",
    value: 644489,
  },
  {
    id: "TTO",
    value: 660681,
  },
  {
    id: "TUN",
    value: 853571,
  },
  {
    id: "TUR",
    value: 829484,
  },
  {
    id: "TWN",
    value: 389720,
  },
  {
    id: "TZA",
    value: 936418,
  },
  {
    id: "UGA",
    value: 954116,
  },
  {
    id: "UKR",
    value: 224517,
  },
  {
    id: "URY",
    value: 271711,
  },
  {
    id: "USA",
    value: 604881,
  },
  {
    id: "UZB",
    value: 146858,
  },
  {
    id: "VEN",
    value: 634799,
  },
  {
    id: "VNM",
    value: 380948,
  },
  {
    id: "VUT",
    value: 551671,
  },
  {
    id: "PSE",
    value: 31043,
  },
  {
    id: "YEM",
    value: 7667,
  },
  {
    id: "ZAF",
    value: 270403,
  },
  {
    id: "ZMB",
    value: 122854,
  },
  {
    id: "ZWE",
    value: 300207,
  },
  {
    id: "KOR",
    value: 455194,
  },
];

export default function GeographyChart() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: "10px",
        height: "75vh",
        border: `1px solid ${theme.palette.text.primary}`,
      }}
    >
      <ResponsiveChoropleth
        features={geo.features}
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="greys"
        theme={{
          //   background: "#ffffff",
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
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={200}
        enableGraticule={true}
        borderWidth={0.5}
        borderColor={{ theme: "background" }}
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: theme.palette.text.primary,
            itemOpacity: 0.85,
            symbolSize: 18,
          },
        ]}
      />
    </Box>
  );
}

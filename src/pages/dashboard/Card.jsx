import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";

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
          <Box height={"100px"}>
            <ResponsiveBar
              data={data}
              indexBy="country"
              labelSkipWidth={12}
              labelSkipHeight={12}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  translateX: 120,
                  itemsSpacing: 3,
                  itemWidth: 100,
                  itemHeight: 16,
                },
              ]}
              axisBottom={{ legend: "country (indexBy)", legendOffset: 32 }}
              axisLeft={{ legend: "food", legendOffset: -40 }}
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            />
          </Box>
          <Typography>{increase}</Typography>
        </Stack>
      </Paper>
    </div>
  );
}

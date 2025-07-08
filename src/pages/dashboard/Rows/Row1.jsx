import { Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Card from "../Card";
import { EmailOutlined } from "@mui/icons-material";
import { data1, data2, data3, data4 } from "../data";

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
          // sx={{ fontSize: "23px", color: Theme.palette.secondary.main }}
          icon={<EmailOutlined />}
          title={"12,421"}
          subTitle={"Email sent"}
          increase={"+14%"}
          data={data1}
          scheme={"red_purple"}
        />
        <Card
          // sx={{ fontSize: "23px", color: Theme.palette.secondary.main }}
          icon={<EmailOutlined />}
          title={"12,421"}
          subTitle={"Email sent"}
          increase={"+14%"}
          data={data2}
          scheme={"category10"}
        />
        <Card
          icon={<EmailOutlined />}
          title={"12,421"}
          subTitle={"Email sent"}
          increase={"+14%"}
          data={data3}
          scheme={"accent"}
        />
        <Card
          // sx={{ fontSize: "23px", color: Theme.palette.secondary.main }}
          icon={<EmailOutlined />}
          title={"12,421"}
          subTitle={"Email sent"}
          increase={"+14%"}
          data={data4}
          scheme={"paired"}
        />
      </Stack>
    </>
  );
}

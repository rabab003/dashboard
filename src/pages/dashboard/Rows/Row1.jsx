import { Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Card from "../Card";
import { EmailOutlined } from "@mui/icons-material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
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
          icon={<EmailOutlined />}
          title={"12,421"}
          subTitle={"Email sent"}
          increase={"+14%"}
          data={data1}
          scheme={"red_purple"}
        />
        <Card
          icon={<TrafficIcon />}
          title={"431,532"}
          subTitle={"sales obtained"}
          increase={"+21%"}
          data={data2}
          scheme={"category10"}
        />
        <Card
          icon={<PersonAddIcon />}
          title={"43,561"}
          subTitle={"new clients"}
          increase={"+5%"}
          data={data3}
          scheme={"accent"}
        />
        <Card
          icon={<AssuredWorkloadIcon />}
          title={"1,628,152"}
          subTitle={" Traffic received"}
          increase={"+42%"}
          data={data4}
          scheme={"paired"}
        />
      </Stack>
    </>
  );
}

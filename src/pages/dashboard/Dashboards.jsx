import React from "react";
import Row1 from "./Rows/Row1";
import Row2 from "./Rows/Row2";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { DownloadDoneOutlined } from "@mui/icons-material";
import Row3 from "./Rows/Row3";
import Header from "../../Components/Header";

export default function Dashboards() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBlock: "10px",
          textAlign: "left",
        }}
      >
        <Header text={"dashboard"} subText={"welcome to dashboard page"} />
        <Button
          sx={{ padding: "2px 8px", textTransform: "capitalize" }}
          variant="contained"
          color="primary"
        >
          <DownloadDoneOutlined />
          Donwload Reports
        </Button>
      </Box>

      <Row1 />
      <Row2 />
      <Row3 />
    </>
  );
}

// 5:51:00 adding the text to the other pages (from contact page)

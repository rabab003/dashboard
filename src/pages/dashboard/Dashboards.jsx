import React from "react";
import Row1 from "./Rows/Row1";
import { Box, Button } from "@mui/material";
import { DownloadDoneOutlined } from "@mui/icons-material";

export default function Dashboards() {
  return (
    <>
      <Box sx={{ textAlign: "right" }}>
        <Button variant="contained" color="primary">
          <DownloadDoneOutlined />
          Donwload Reports
        </Button>
      </Box>
      dashboard
      <Row1 />
    </>
  );
}

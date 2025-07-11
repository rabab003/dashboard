import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography } from "@mui/material";
import Header from "../../Components/Header";

export default function Contact() {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>{row.access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <Box
        style={{
          height: 600,
          width: "98%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Header text={"Contact"} subText={"List of all contacts"} />

        <DataGrid
          // slots={{ toolbar: CustomToolbar }}
          columns={columns}
          rows={rows}
        />
      </Box>
    </>
  );
}

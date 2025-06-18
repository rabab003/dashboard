import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./Data";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettings,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

export default function Team() {
  const theme = useTheme();

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
              justifyContent: "space-evenly",
              backgroundColor:
                row.access === "Admin"
                  ? theme.palette.primary.dark
                  : row.access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {row.access === "Admin" && <AdminPanelSettings fontSize="small" />}
            {row.access === "Manager" && <SecurityOutlined fontSize="small" />}
            {row.access === "user" && <LockOpenOutlined fontSize="small" />}
            <Typography sx={{ fontSize: "13px" }}>{row.access}</Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <>
      <div
        style={{
          height: 600,
          width: "98%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <DataGrid columns={columns} rows={rows} />
      </div>
    </>
  );
}

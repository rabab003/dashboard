import { Box, Typography } from "@mui/material";

import {
  AdminPanelSettings,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";

export default function Invoices() {
  return (
    <Box
      style={{
        height: 600,
        width: "98%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <DataGrid
        // slots={{ toolbar: CustomToolbar }}
        checkboxSelection
        columns={columns}
        rows={rows}
      />
    </Box>
  );
}

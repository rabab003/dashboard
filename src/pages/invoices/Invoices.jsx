import { DataGrid } from "@mui/x-data-grid";
// import { rows } from "./Data";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettings,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

export default function Invoices() {
  return (
    <div>
      <Box
        style={{
          height: 600,
          width: "98%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <DataGrid columns={columns} rows={rows} />
      </Box>
    </div>
  );
}

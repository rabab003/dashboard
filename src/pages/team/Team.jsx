import { DataGrid } from "@mui/x-data-grid";

const rows = [
  { id: 1, name: "Data Grid", description: "the Community version" },
  { id: 2, name: "Data Grid Pro", description: "the Pro version" },
  { id: 3, name: "Data Grid Premium", description: "the Premium version" },
  { id: 4, name: "Data Grid Premium", description: "the Premium version" },
  { id: 5, name: "Data Grid Premium", description: "the Premium version" },
  { id: 6, name: "Data Grid Premium", description: "the Premium version" },
];

const columns = [
  { field: "description", headerName: "ID" },
  { field: "description", headerName: "Name" },
  { field: "description", headerName: "Email" },
  { field: "description", headerName: "Age" },
  { field: "description", headerName: "Phone" },
  { field: "description", headerName: "Access" },
];
export default function Team() {
  return (
    <>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </>
  );
}

import React from "react";
import Table from "./components/Table";
import columns from "./columns.json";
import rows from "./rows.json";

const App = () => {
  const columnsData = columns;
  const rowData = rows;
  return (
    <>
      <h1> User Table</h1>
      {/* Columns are config and rows are the data props */}
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default App;

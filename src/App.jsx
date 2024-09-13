import React from "react";
import Table from "./components/Table";
import columns from "./columns.json";
import rows from "./rows.json";

const App = () => {
  return (
    <>
      <h1> User Table</h1>
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default App;

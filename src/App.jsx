import React from "react";
import Table from "./components/Table";
import columns from "./columns.json";
import rows from "./rows.json";
import useAppStore from "./store/appStore";

const App = () => {
  const { setMenuPosition } = useAppStore();
  return (
    <div
      onClick={() => {
        setMenuPosition({ left: 0, top: 0 });
      }}
    >
      <Table columns={columns} rows={rows} />
    </div>
  );
};

export default App;

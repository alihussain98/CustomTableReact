import { useEffect } from "react";
import Table from "./components/Table";
import useAppStore from "./store/appStore";

const App = () => {
  const {
    setMenuPosition,
    rowsData,
    setRowsData,
    columnsData,
    setColumnsData,
  } = useAppStore();

  useEffect(() => {
    const fetchRows = async () => {
      try {
        const res = await fetch("http://localhost:8000/rows");
        const data = await res.json();
        setRowsData(data);
      } catch (error) {
        console.error("Error in Fetching Rows: ", error.message);
      }
    };
    const fetchColumns = async () => {
      try {
        const res = await fetch("http://localhost:8000/columns");
        const data = await res.json();
        setColumnsData(data);
      } catch (error) {
        console.error("Error in Fetching Columns: ", error.message);
      }
    };

    fetchRows();
    fetchColumns();
  }, []);

  return (
    <div
      onClick={() => {
        setMenuPosition({ left: 0, top: 0 });
      }}
    >
      <Table columns={columnsData} rows={rowsData} />
    </div>
  );
};

export default App;

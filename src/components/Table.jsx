import "../index.css";
import TableColumn from "./TableColumn.jsx";
import TableRow from "./TableRow.jsx";
import useAppStore from "../store/appStore.js";
import ContextMenu from "./ContextMenu.jsx";
import RowContextMenu from "./rowContextMenu.jsx";

const Table = ({ columns, rows }) => {
  const {
    rowsData,
    filterValue,
    filterColumn,
    setRowMenuPosition,
    setMenuPosition,
  } = useAppStore();

  // Filter rows based on filterValue and filterColumn
  let filteredRows = rowsData.filter((row) =>
    row[filterColumn]
      ?.toString() // Ensure the value is a string
      .toLowerCase() // Make the comparison case-insensitive
      .includes(filterValue.toLowerCase())
  );

  // Display the filtered rows if a filterValue is present, otherwise display all rows
  const displayRows = filterValue ? filteredRows : rowsData;

  return (
    <>
      <RowContextMenu />
      <ContextMenu />
      <table
        onClick={() => {
          setMenuPosition({ left: 0, top: 0 });
          setRowMenuPosition({ left: 0, top: 0 });
        }}
      >
        <tbody>
          <tr>
            {columns.map((column) => (
              <TableColumn column={column} rows={rows} key={column.id} />
            ))}
          </tr>
          {/* Render filtered or all rows */}
          {displayRows.map((row) => (
            <TableRow row={row} columns={columns} key={row.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

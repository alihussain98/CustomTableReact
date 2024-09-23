import React, { useEffect } from "react";
import TableColumn from "./TableColumn.jsx";
import TableRow from "./TableRow.jsx";
import { useState } from "react";
import "../index.css";
import useAppStore from "../store/appStore.js";

const Table = ({ columns, rows, sortDirection }) => {
  const [rowsData, setRowsData] = useState(rows);
  const { filterValue, filterColumn } = useAppStore();

  const sortRowsAsc = (rowsData, sortClickedAt, sortDirection) => {
    rowsData.sort((a, b) => {
      const aValue = a[sortClickedAt] || "";
      const bValue = b[sortClickedAt] || "";
      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });
    setRowsData([...rowsData]);
  };

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
    <table>
      <tbody>
        <tr>
          {columns.map((column) => (
            <TableColumn
              column={column}
              rows={rows}
              sortRows={sortRowsAsc}
              key={column.id}
            />
          ))}
        </tr>
        {/* Render filtered or all rows */}
        {displayRows.map((row) => (
          <TableRow row={row} columns={columns} key={row.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

import React from "react";
import TableColumn from "./TableColumn.jsx";
import TableRow from "./TableRow.jsx";
import { useState } from "react";
import "../index.css";

const Table = ({ columns, rows, sortDirection }) => {
  const [rowsData, setRowsData] = useState(rows);

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
        {rowsData.map((row) => (
          <TableRow row={row} columns={columns} key={row.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

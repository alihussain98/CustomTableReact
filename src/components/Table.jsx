import React from "react";
import columns from "../columns.json";
import rows from "../rows.json";
import TableColumn from "./TableColumn.jsx";
import TableRow from "./TableRow.jsx";
import "../index.css";

const Table = ({ columns, rows }) => {
  const columnCount = columns.length;
  return (
    <table>
      <tbody>
        <tr>
          {columns.map((column) => (
            <TableColumn column={column} key={column.id} />
          ))}
        </tr>
        {rows.map((row) => (
          <TableRow row={row} columns={columns} key={row.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

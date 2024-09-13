import React from "react";
import "../index.css";

const TableRow = ({ row, columns }) => {
  return (
    <>
      <tr>
        {columns.map((column, index) => (
          <td key={index}>{row[column.columnName]}</td>
        ))}
      </tr>
    </>
  );
};

export default TableRow;

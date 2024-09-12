import React from "react";
import "../index.css";

const TableRow = ({ row, columns, id }) => {
  
  return (
    <>
      <tr>
        {columns.map((column, index) => (
          <td key={index}>{row[column.rowValue]}</td>
        ))}
      </tr>
    </>
  );
};

export default TableRow;

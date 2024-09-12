import React from "react";
import "../index.css";

const TableColumn = (column, key) => {
  return (
    <>
      <th>
        <p>{column.column.columnName}</p>
      </th>
    </>
  );
};

export default TableColumn;

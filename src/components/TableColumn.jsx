import React from "react";
import "../index.css";
import { useState, useEffect } from "react";

const TableColumn = ({ column, sortRows, rows }) => {
  const [sortClickedAt, setSortClickedAt] = useState();

  useEffect(() => {
    sortRows(rows, sortClickedAt);
  }, [sortClickedAt]);

  const handleSortClicked = (columnName) => {
    setSortClickedAt(columnName);
  };

  return (
    <>
      <th key={column.id}>
        <p className="columnTitlePTag">{column.displayName}</p>
        <button
          className="buttonSort"
          onClick={() => handleSortClicked(column.columnName)}
        >
          sort
        </button>
      </th>
    </>
  );
};

export default TableColumn;

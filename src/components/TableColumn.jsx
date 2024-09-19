import React from "react";
import "../index.css";
import { useState, useEffect } from "react";
import ArrowUp from "../assets/arrow_up.png";
import ArrowDown from "../assets/arrow_down.png";

const TableColumn = ({ column, sortRows, rows }) => {
  const [sortClickedAt, setSortClickedAt] = useState();
  const [sortDirection, setSortDirection] = useState("");

  useEffect(() => {
    sortRows(rows, sortClickedAt, sortDirection);
    console.log("SortClickedAt: ", sortClickedAt);
    console.log("SortDirection: ", sortDirection);
  }, [sortClickedAt, sortDirection]);

  const handleSortClicked = (columnName, sortDirection) => {
    setSortClickedAt(columnName);
    setSortDirection(sortDirection);
    console.log("ColumnName: ", columnName);
    console.log("Sort Direction: ", sortDirection);
  };

  return (
    <>
      <th key={column.id}>
        <p className="columnTitlePTag">{column.displayName}</p>
        <button
          className="buttonSort"
          onClick={() => handleSortClicked(column.columnName, "asc")}
        >
          <img className="arrowUp" src={ArrowUp} />
        </button>
        <button
          className="buttonSort"
          onClick={() => handleSortClicked(column.columnName, "desc")}
        >
          <img className="arrowDown" src={ArrowDown} />
        </button>
      </th>
    </>
  );
};

export default TableColumn;

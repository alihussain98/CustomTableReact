import React from "react";
import "../index.css";
import { useState, useEffect } from "react";
import sortIcon from "../assets/sortIcon.png";

const TableColumn = ({ column, sortRows, rows }) => {
  const [sortClickedAt, setSortClickedAt] = useState();
  const [sortDirection, setSortDirection] = useState(null);

  useEffect(() => {
    sortRows(rows, sortClickedAt, sortDirection);
  }, [sortClickedAt, sortDirection]);

  const handleSortClicked = (columnName, sortDirection) => {
    setSortClickedAt(columnName);

    if (sortDirection === null) {
      setSortDirection("asc");
    }

    if (sortDirection === "asc") {
      setSortDirection("desc");
    } else if (sortDirection === "desc") {
      setSortDirection("asc");
    }
    
  };

  return (
    <>
      <th key={column.id} style={{ width: column.width }}>
        <p className="columnTitlePTag">{column.displayName}</p>
        <button
          className="buttonSort"
          onClick={() => handleSortClicked(column.columnName, sortDirection)}
        >
          <img className="sortIcon" src={sortIcon} />
        </button>
      </th>
    </>
  );
};

export default TableColumn;

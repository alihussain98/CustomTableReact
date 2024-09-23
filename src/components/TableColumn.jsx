import "../index.css";
import { useState, useEffect } from "react";
import sortIcon from "../assets/sortIcon.png";
import minusIcon from "../assets/minus.png";
import plusIcon from "../assets/plus.png";
import useAppStore from "../store/appStore";

const TableColumn = ({ column, sortRows, rows }) => {
  const { updateFilterValue, updateFilterColumn } = useAppStore();
  const [sortClickedAt, setSortClickedAt] = useState();
  const [sortDirection, setSortDirection] = useState(null);
  const [columnWidth, setColumnWidth] = useState(column.width);

  useEffect(() => {
    sortRows(rows, sortClickedAt, sortDirection);
  }, [sortClickedAt, sortDirection]);

  useEffect(() => {}, [columnWidth]);

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

  const handleDecreaseColumn = () => {
    setColumnWidth(columnWidth - 40);
  };

  const handleIncreaseColumn = () => {
    setColumnWidth(columnWidth + 40);
  };

  const handleFilterButton = () => {
    updateFilterButtonPressed();
  };

  return (
    <>
      <th key={column.id} style={{ width: `${columnWidth}px` }}>
        <p className="columnTitlePTag">{column.displayName}</p>
        <input
          className="filterInput"
          type="text"
          placeholder="Filter"
          onChange={(e) => {
            updateFilterValue(e.target.value);
            updateFilterColumn(column.columnName);
          }}
        />
        <div>
          <button onClick={handleDecreaseColumn}>
            <img className="sizeButton" src={minusIcon} />
          </button>
          <button
            className="buttonSort"
            onClick={() => handleSortClicked(column.columnName, sortDirection)}
          >
            <img className="sortIcon" src={sortIcon} />
          </button>
          <button onClick={handleIncreaseColumn}>
            <img className="sizeButton" src={plusIcon} />
          </button>
        </div>
      </th>
    </>
  );
};

export default TableColumn;

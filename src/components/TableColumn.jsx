import "../index.css";
import { useEffect } from "react";
import sortIcon from "../assets/sortIcon.png";
import filterIcon from "../assets/filter.png";
import useAppStore from "../store/appStore";

const TableColumn = ({ column, rows }) => {
  const {
    sortClickedAt,
    setSortClickedAt,
    updateFilterValue,
    updateFilterColumn,
    sortDirection,
    setSortDirection,
    setMenuPosition,
    sortRows,
    setRowsData,
    setContextMenuColumn,
    handleAscDesc,
    filterButtonClicked,
    setFilterButtonClicked,
  } = useAppStore();

  useEffect(() => {
    sortRows(rows, sortClickedAt, sortDirection, setRowsData);
  }, [sortClickedAt, sortDirection]);

  useEffect(() => {}, [filterButtonClicked]);

  const handleSortClicked = (columnName, sortDirection) => {
    setSortClickedAt(columnName);
    handleAscDesc(sortDirection, setSortDirection);
  };

  const handleFilterClick = () => {
    setFilterButtonClicked();
  };

  return (
    <>
      <th
        key={column.id}
        onContextMenu={(e) => {
          e.preventDefault();
          setMenuPosition({ left: e.clientX + 8, top: e.clientY + 8 });
          setContextMenuColumn(column.columnName);
        }}
      >
        <p className="columnTitlePTag">{column.displayName}</p>
        {filterButtonClicked && (
          <input
            className="filterInput"
            type="text"
            placeholder="Filter"
            onChange={(e) => {
              updateFilterValue(e.target.value);
              updateFilterColumn(column.columnName);
            }}
          />
        )}
        <div>
          <button
            className="columnButton"
            onClick={() => handleSortClicked(column.columnName, sortDirection)}
          >
            <img className="columnIcon" src={sortIcon} />
          </button>
          <button className="columnButton" onClick={handleFilterClick}>
            <img className="columnIcon" src={filterIcon} />
          </button>
        </div>
      </th>
    </>
  );
};

export default TableColumn;

import React, { useEffect } from "react";
import "../index.css";
import useAppStore from "../store/appStore";

const ContextMenu = () => {
  const {
    menuPosition,
    setMenuPosition,
    contextMenuColumn,
    sortRows,
    rowsData,
    setRowsData,
    handleAscDesc,
    contextSortDirection,
    setContextSortDirection,
    filterButtonClicked,
    setFilterButtonClicked,
  } = useAppStore();

  if (!menuPosition.left) return;

  const handleSortClicked = () => {
    setMenuPosition({ left: 0, top: 0 });
    sortRows(rowsData, contextMenuColumn, contextSortDirection, setRowsData);
    handleAscDesc(contextSortDirection, setContextSortDirection);
  };

  return (
    <div className="contextMenu" style={menuPosition}>
      <div onClick={handleSortClicked}>Sort (ASC/ DESC)</div>
      <div
        onClick={() => {
          setFilterButtonClicked(!filterButtonClicked);
        }}
      >
        Filter
      </div>
    </div>
  );
};

export default ContextMenu;

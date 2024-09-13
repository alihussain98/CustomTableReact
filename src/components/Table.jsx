import React from "react";
import TableColumn from "./TableColumn.jsx";
import TableRow from "./TableRow.jsx";
import { useState } from "react";
import "../index.css";

const Table = ({ columns, rows }) => {
  const [rowsData, setRowsData] = useState(rows);

  const sortRows = (rowsData, columnName) => {
    rowsData.sort((a, b) => {
      const aValue = a[columnName] || "";
      const bValue = b[columnName] || "";
      return aValue > bValue ? 1 : -1;
    });
    setRowsData([...rowsData]);
    //if sort clicked again
    //rowsData.reverse();
    //setRowsData(rowsData);
  };

  const handleSortClicked = (columnName) => {
    sortRows(rowsData, columnName);
  };

  return (
    <table>
      <tbody>
        <tr>
          {columns.map((column) => (
            // <TableColumn column={column} key={column.id} />
            <th key={column.id}>
              <p className="columnTitlePTag">{column.displayName}</p>
              <button
                className="buttonSort"
                onClick={() => handleSortClicked(column.columnName)}
              >
                sort
              </button>
            </th>
          ))}
        </tr>
        {rowsData.map((row) => (
          <TableRow row={row} columns={columns} key={row.id} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

import { useEffect, useState } from "react";
import useAppStore from "../store/appStore";
import editIcon from "../assets/edit.png";
import checkMarkIcon from "../assets/checkmark.png";
import "../index.css";

const RowCell = ({ cellID, column, index, row }) => {
  const [updatedRowData, setUpdatedRowData] = useState(row[column.columnName]);

  const { editButtonClicked, setEditButtonClicked, editRowID, setEditRowID } =
    useAppStore();

  useEffect(() => {}, [editButtonClicked, editRowID]);

  const submitEdit = (e) => {
    e.preventDefault();
    setEditButtonClicked(false);
  };

  const handleCellEdit = () => {
    setEditRowID(cellID);
    setEditButtonClicked(true);
  };

  return (
    <td
      className="rowDataStyle"
      key={index}
      onContextMenu={(e) => {
        e.preventDefault();
        console.log("Clicked");
      }}
    >
      <div className="rowContainer">
        <div>
          {editRowID === cellID && editButtonClicked ? (
            <>
              <form className="editForm" onSubmit={submitEdit}>
                <input
                  type="text"
                  defaultValue={updatedRowData}
                  onChange={(e) => setUpdatedRowData(e.target.value)}
                />
                <button className="editButton" type="submit">
                  <img className="editIcon" src={checkMarkIcon} />
                </button>
              </form>
            </>
          ) : (
            <div>{updatedRowData}</div>
          )}
        </div>
        <div>
          {row[column.columnName] === undefined ||
          column.columnName === "index" ? (
            ""
          ) : (
            <button className="editButton" onClick={() => handleCellEdit()}>
              <img className="editIcon" src={editIcon} />
            </button>
          )}
        </div>
      </div>
    </td>
  );
};

export default RowCell;

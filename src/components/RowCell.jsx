import { useEffect, useState } from "react";
import useAppStore from "../store/appStore";
import checkMarkIcon from "../assets/checkmark.png";
import "../index.css";

const RowCell = ({ cellID, column, index, row }) => {
  const [updatedRowData, setUpdatedRowData] = useState(row[column.columnName]);

  const {
    editButtonClicked,
    setEditButtonClicked,
    editRowCellID,
    setEditRowCellID,
    setRowMenuPosition,
    setCellID,
    setUpdateRowCellData,
  } = useAppStore();

  useEffect(() => {
    setCellID(editRowCellID);
  }, [editButtonClicked, editRowCellID]);

  const submitEdit = async (e) => {
    e.preventDefault();
    setEditButtonClicked(false);

    await setUpdateRowCellData(row.id, {
      ...row,
      [column.columnName]: updatedRowData,
    });
  };

  const handleDoubleClick = () => {
    setEditRowCellID(cellID);
    setEditButtonClicked(true);
    console.log(row.id);
  };

  return (
    <td
      className="rowDataStyle"
      key={index}
      onContextMenu={(e) => {
        e.preventDefault();
        setRowMenuPosition({ left: e.clientX + 4, top: e.clientY + 4 });
        setEditRowCellID(cellID);
      }}
      onDoubleClick={handleDoubleClick}
    >
      <div className="rowContainer">
        <div>
          {editRowCellID === cellID && editButtonClicked ? (
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
      </div>
    </td>
  );
};

export default RowCell;

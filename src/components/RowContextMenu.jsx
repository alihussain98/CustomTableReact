import "../index.css";
import useAppStore from "../store/appStore";

const RowContextMenu = () => {
  const {
    rowMenuPosition,
    setEditButtonClicked,
    setEditRowID,
    cellID,
    setRowMenuPosition,
  } = useAppStore();

  if (!rowMenuPosition.left) return;

  const handleEditClicked = () => {
    setEditRowID(cellID);
    setEditButtonClicked(true);
    setRowMenuPosition({ left: 0, top: 0 });
  };

  return (
    <div className="contextMenu" style={rowMenuPosition}>
      <div onClick={handleEditClicked}>Edit Cell</div>
    </div>
  );
};

export default RowContextMenu;

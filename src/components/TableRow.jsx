import "../index.css";
import RowCell from "./RowCell";

const TableRow = ({ row, columns }) => {
  return (
    <>
      <tr>
        {columns.map((column, index) => {
          const cellID = parseInt(row.id + column.id);
          return (
            <RowCell
              key={cellID}
              cellID={cellID}
              column={column}
              index={index}
              row={row}
            />
          );
        })}
      </tr>
    </>
  );
};

export default TableRow;

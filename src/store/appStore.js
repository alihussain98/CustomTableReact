import { create } from "zustand";

const useAppStore = create((set) => ({
  rowsData: [],
  setRowsData: (newRows) => {
    set({ rowsData: newRows });
  },
  columnsData: [],
  setColumnsData: (newColumns) => {
    set({ columnsData: newColumns });
  },
  filterValue: "",
  updateFilterValue: (value) => {
    set(() => ({
      filterValue: value,
    }));
  },
  filterColumn: "",
  updateFilterColumn: (columnName) => {
    set(() => ({
      filterColumn: columnName,
    }));
  },
  sortClickedAt: "",
  setSortClickedAt: (columnName) => {
    set(() => ({
      sortClickedAt: columnName,
    }));
  },
  sortDirection: null,
  setSortDirection: (value) => {
    set(() => ({
      sortDirection: value,
    }));
  },
  menuPosition: { left: 0, top: 0 },
  setMenuPosition: ({ left, top }) => {
    set(() => ({
      menuPosition: { left: left, top: top },
    }));
  },
  rowMenuPosition: { left: 0, top: 0 },
  setRowMenuPosition: ({ left, top }) => {
    set(() => ({
      rowMenuPosition: { left: left, top: top },
    }));
  },
  sortRows: (rowsData, sortClickedAt, sortDirection, setRowsData) => {
    rowsData.sort((a, b) => {
      const aValue = a[sortClickedAt] || "";
      const bValue = b[sortClickedAt] || "";
      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });
    setRowsData([...rowsData]);
  },
  contextMenuColumn: "",
  setContextMenuColumn: (columnName) => {
    set(() => ({
      contextMenuColumn: columnName,
    }));
  },
  handleAscDesc: (sortDirection, setSortDirection) => {
    if (sortDirection === null) {
      setSortDirection("asc");
    } else if (sortDirection === "asc") {
      setSortDirection("desc");
    } else if (sortDirection === "desc") {
      setSortDirection("asc");
    }
  },
  contextSortDirection: "asc",
  setContextSortDirection: (value) => {
    set(() => ({
      contextSortDirection: value,
    }));
  },
  filterButtonClicked: false,
  setFilterButtonClicked: () => {
    set((state) => ({
      filterButtonClicked: !state.filterButtonClicked,
    }));
  },
  editButtonClicked: false,
  setEditButtonClicked: (value) => {
    set(() => ({
      editButtonClicked: value,
    }));
  },
  editRowID: "",
  setEditRowID: (value) => {
    set(() => ({
      editRowID: value,
    }));
  },
  cellID: null,
  setCellID: (value) => {
    set(() => ({
      cellID: value,
    }));
  },
}));

export default useAppStore;

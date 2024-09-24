import { create } from "zustand";

const useAppStore = create((set) => ({
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
}));

export default useAppStore;

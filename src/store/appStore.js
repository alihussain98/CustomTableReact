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
}));

export default useAppStore;

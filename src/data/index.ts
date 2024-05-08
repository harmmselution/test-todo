import { Filter } from "../redux/slices/todosSlice.ts";

interface filterData {
  id: number;
  filterBy: Filter;
}

const filterData: filterData[] = [
  {
    id: 1,
    filterBy: "completed",
  },
  {
    id: 2,
    filterBy: "uncompleted",
  },
  {
    id: 3,
    filterBy: "all",
  },
];

export { filterData };

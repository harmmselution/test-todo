import { Filter } from "../redux/slices/todosSlice.ts";

interface filterData {
  id: number;
  filterBy: Filter;
}

const filterData: filterData[] = [
  {
    id: 1,
    filterBy: "all",
  },
  {
    id: 2,
    filterBy: "completed",
  },
  {
    id: 3,
    filterBy: "uncompleted",
  },
];

export { filterData };

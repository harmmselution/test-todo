import classes from "./Filters.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.ts";
import { todosSelector } from "../../redux/selectors.ts";
import { todosActions } from "../../redux/slices/todosSlice.ts";
import { filterData } from "../../data";
import { FilterItem } from "./components/FilterItem/FilterItem.tsx";

export const Filters = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector(todosSelector);

  return (
    <div className={classes.filterItems}>
      {filterData.map((filterItem) => (
        <FilterItem
          checked={filter === filterItem.filterBy}
          key={filterItem.id}
          filter={filterItem.filterBy}
          onChange={() => dispatch(todosActions.setFilter(filterItem.filterBy))}
        />
      ))}
    </div>
  );
};

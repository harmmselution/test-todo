import classes from "./Search.module.scss";
import { search } from "../../assets/img/index.ts";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks.ts";
import { todosSelector } from "../../redux/selectors.ts";
import { todosActions } from "../../redux/slices/todosSlice.ts";

export const Search = () => {
  const dispatch = useAppDispatch();
  const { searchQuery } = useAppSelector(todosSelector);

  return (
    <div className={classes.searchWrapper}>
      <img src={search} alt='search' />
      <input
        placeholder='enter todo title'
        type='text'
        value={searchQuery}
        onChange={(e) => dispatch(todosActions.setSearchQuery(e.target.value))}
      />
    </div>
  );
};

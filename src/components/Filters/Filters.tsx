import classes from "./Filters.module.scss";

export const Filters = () => {
  return (
    <div className={classes.filtersWrapper}>
      <p>Sort by:</p>
      <p>Completed</p>
      <p>Uncompleted</p>
    </div>
  );
};

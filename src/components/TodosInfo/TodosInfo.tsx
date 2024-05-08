import classes from "./TodosInfo.module.scss";
import { useAppSelector } from "../../hooks/reduxHooks.ts";
import { RootState } from "../../redux/store.ts";
import { selectCompletedTasksCount, selectUncompletedTasksCount } from "../../redux/selectors.ts";

export const TodosInfo = () => {
  const completedTasksCount = useAppSelector((state: RootState) => selectCompletedTasksCount(state));
  const uncompletedTasksCount = useAppSelector((state: RootState) => selectUncompletedTasksCount(state));

  return (
    <div className={classes.todosInfo}>
      <p>Uncompleted: {uncompletedTasksCount}</p>
      <p>Completed: {completedTasksCount}</p>
    </div>
  );
};

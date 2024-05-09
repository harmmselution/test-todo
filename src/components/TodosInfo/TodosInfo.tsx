import classes from "./TodosInfo.module.scss";
import { useAppSelector } from "../../hooks/reduxHooks.ts";
import { selectCompletedTasksCount, selectUncompletedTasksCount } from "../../redux/selectors.ts";

export const TodosInfo = () => {
  const completedTasksCount = useAppSelector(selectCompletedTasksCount);
  const uncompletedTasksCount = useAppSelector(selectUncompletedTasksCount);

  return (
    <div className={classes.todosInfo}>
      <p className={classes.todoType}>
        <span>Uncompleted</span> : {uncompletedTasksCount}
      </p>
      <p className={classes.todoType}>
        <span>Completed</span> : {completedTasksCount}
      </p>
    </div>
  );
};

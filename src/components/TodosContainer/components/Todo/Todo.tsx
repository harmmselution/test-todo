import classes from "./Todo.module.scss";
import { trash, checkCircle, uncheckCircle } from "../../../../assets/img";
import { FC } from "react";
import { todosActions } from "../../../../redux/slices/todosSlice.ts";
import { useAppDispatch } from "../../../../hooks/reduxHooks.ts";
import classNames from "classnames";

interface TodoProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const Todo: FC<TodoProps> = ({ title, description, completed, id }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={classes.todo}>
      <div className={classes.description}>
        <p>{title}</p>
        <p>{description}</p>
        <p>
          Status:{" "}
          <span
            className={classNames(classes.statusText, {
              [classes.completed]: completed,
            })}
          >
            {completed ? "completed" : "uncompleted"}
          </span>
        </p>
      </div>
      <div className={classes.actions}>
        <button onClick={() => dispatch(todosActions.deleteTodo(id))}>
          <img src={trash} alt='trash' />
        </button>
        <button onClick={() => dispatch(todosActions.toggleTodoStatus(id))}>
          <img src={completed ? checkCircle : uncheckCircle} alt='checkCircle' />
        </button>
      </div>
    </div>
  );
};

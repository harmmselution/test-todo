import classes from "./Todo.module.scss";
import { trash, checkCircle, uncheckCircle } from "../../../../assets/img";
import { FC } from "react";
import { todosActions } from "../../../../redux/slices/todosSlice.ts";
import { useAppDispatch } from "../../../../hooks/reduxHooks.ts";
import classNames from "classnames";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TodoProps {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const Todo: FC<TodoProps> = ({ title, description, completed, id }) => {
  const dispatch = useAppDispatch();
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div className={classes.todo} ref={setNodeRef} style={style} {...attributes} {...listeners}>
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
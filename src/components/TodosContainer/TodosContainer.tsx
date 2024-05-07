import classes from "./TodosContainer.module.scss";
import { Todo } from "./components/Todo/Todo.tsx";
import { useAppSelector } from "../../hooks/reduxHooks.ts";
import { todosSelector } from "../../redux/selectors.ts";

export const TodosContainer = () => {
  const { todos } = useAppSelector(todosSelector);
  return (
    <div className={classes.todosContainer}>
      {todos.map((todo) => (
        <Todo key={todo.id} />
      ))}
    </div>
  );
};

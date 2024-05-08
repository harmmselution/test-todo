import classes from "./TodosContainer.module.scss";
import { Todo } from "./components/Todo/Todo.tsx";
import { useAppSelector } from "../../hooks/reduxHooks.ts";
import { todosSelector } from "../../redux/selectors.ts";
import { Filters } from "../Filters/Filters.tsx";
import { TodosInfo } from "../TodosInfo/TodosInfo.tsx";

export const TodosContainer = () => {
  const { todos } = useAppSelector(todosSelector);
  return (
    <div className={classes.todosWrapper}>
      <Filters />
      <div className={classes.todosContainer}>
        {todos.length ? (
          todos.map((todo) => <Todo {...todo} key={todo.id} />)
        ) : (
          <p className={classes.noTodos}>
            No todos yet :( <br /> Add your first todo!
          </p>
        )}
      </div>
      <TodosInfo />
    </div>
  );
};

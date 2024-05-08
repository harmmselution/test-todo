import classes from "./TodosContainer.module.scss";
import { Todo } from "./components/Todo/Todo.tsx";
import { useAppSelector } from "../../hooks/reduxHooks.ts";
import { todosSelector } from "../../redux/selectors.ts";
import { Filters } from "../Filters/Filters.tsx";
import { TodosInfo } from "../TodosInfo/TodosInfo.tsx";
import { filterTodos } from "../../utils/todoFilter.ts";
import { Search } from "../Search/Search.tsx";

export const TodosContainer = () => {
  const { todos, filter, searchQuery } = useAppSelector(todosSelector);
  const filteredTodos = filterTodos(todos, filter, searchQuery);
  const noTodosMessage = searchQuery ? "Nothing was found :(" : "No todos yet :( Add your first todo!";
  return (
    <div className={classes.todosWrapper}>
      <Filters />
      <div className={classes.todosContainer}>
        <Search />
        {filteredTodos.length ? (
          filteredTodos.map((todo) => <Todo {...todo} key={todo.id} />)
        ) : (
          <p className={classes.noTodos}>{noTodosMessage}</p>
        )}
      </div>
      <TodosInfo />
    </div>
  );
};

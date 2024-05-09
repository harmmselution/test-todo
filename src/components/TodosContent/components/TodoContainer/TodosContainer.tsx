import classes from "./TodosContainer.module.scss";
import { Todo } from "../Todo/Todo.tsx";
import { useAppSelector } from "../../../../hooks/reduxHooks.ts";
import { todosSelector } from "../../../../redux/selectors.ts";
import { filterTodos } from "../../../../utils/todoFilter.ts";
import { Search } from "../../../Search/Search.tsx";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

export const TodosContainer = () => {
  const { todos, filter, searchQuery } = useAppSelector(todosSelector);
  const filteredTodos = filterTodos(todos, filter, searchQuery);
  const noTodosMessage = searchQuery ? "Nothing was found :(" : "No todos yet :( Add your first todo!";
  //The SortableContext provides information via context that is consumed by the useSortable hook in Todo component
  return (
    <div className={classes.todosContainer}>
      <Search />
      <SortableContext items={filteredTodos} strategy={verticalListSortingStrategy}>
        {filteredTodos.length ? (
          filteredTodos.map((todo) => <Todo {...todo} key={todo.id} />)
        ) : (
          <p className={classes.noTodos}>{noTodosMessage}</p>
        )}
      </SortableContext>
    </div>
  );
};

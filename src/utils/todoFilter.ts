import { Filter, ITodo } from "../redux/slices/todosSlice.ts";

//helper for filtering todos by status and search query;

export const filterTodos = (todos: ITodo[], filter: Filter, searchQuery: string) => {
  const filteredBySearch = searchQuery.trim()
    ? todos.filter((todo) => todo.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : todos;
  switch (filter) {
    case "completed":
      return filteredBySearch.filter((todo) => todo.completed);
    case "uncompleted":
      return filteredBySearch.filter((todo) => !todo.completed);
    default:
      return filteredBySearch;
  }
};

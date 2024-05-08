import { RootState } from "./store.ts";

export const todosSelector = (state: RootState) => state.TodosReducer;
export const selectCompletedTasksCount = (state: RootState) =>
  state.TodosReducer.todos.filter((todo) => todo.completed).length;

export const selectUncompletedTasksCount = (state: RootState) =>
  state.TodosReducer.todos.filter((todo) => !todo.completed).length;

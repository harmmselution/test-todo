import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Filter = "all" | "completed" | "uncompleted";

export interface ITodo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TodosSlice {
  todos: ITodo[];
  filter: Filter;
  searchQuery: string;
}

const initialState: TodosSlice = {
  todos: [],
  filter: "all",
  searchQuery: "",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodosHandler: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    toggleTodoStatus: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { reducer: TodosReducer, actions: todosActions } = todosSlice;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TodosSlice {
  todos: ITodo[];
  completedNumber: number;
}

const initialState: TodosSlice = {
  todos: [],
  completedNumber: 0,
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
  },
});

export const { reducer: TodosReducer, actions: todosActions } = todosSlice;

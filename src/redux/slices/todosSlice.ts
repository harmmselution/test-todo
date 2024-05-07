import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
  id: number;
  title: string;
  description: string;
}

interface TodosSlice {
  todos: ITodo[];
}

const initialState: TodosSlice = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodosHandler: (state, action: PayloadAction<ITodo>) => {
      state.todos = [action.payload];
    },
  },
});

export const { reducer: TodosReducer, actions: todosActions } = todosSlice;

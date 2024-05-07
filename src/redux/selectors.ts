import { RootState } from "./store.ts";

export const todosSelector = (state: RootState) => state.TodosReducer;

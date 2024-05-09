import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TodosReducer } from "./slices/todosSlice.ts";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const rootReducer = combineReducers({
  TodosReducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["TodosReducer"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//create persist config in order to connect our redux store with localstorage.So todosReducer is added to the whitelist;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], //ignore this actions to synchronize correctly with redux-toolkit
      },
    }),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

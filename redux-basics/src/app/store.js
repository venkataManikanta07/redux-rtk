import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import { productApi } from "./service/dummyData";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware), // No need to import separately
});

setupListeners(store.dispatch);

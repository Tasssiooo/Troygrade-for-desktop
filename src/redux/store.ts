import { configureStore } from "@reduxjs/toolkit";

import handleReducer from "./reducers/handleSlice";

export const store = configureStore({
  reducer: {
    handle: handleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

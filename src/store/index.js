import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./notes";

export const store = configureStore({
  reducer: {
    notes: noteReducer,
  },
});

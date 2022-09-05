import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  //   {
  //     id: "",
  //     title: "",
  //     description: "",
  //     labels: [],
  //   },
];

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addnote } = noteSlice.actions;

export default noteSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  //   {
  //     id: "",
  //     title: "",
  //     description: "",
  //     labels: [],
  //     pinned: false
  //   },
];

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    editNote: (state, action) => {
      state.push(action.payload);
    },
    pinNote: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, editNote, pinNote } = noteSlice.actions;

export default noteSlice.reducer;

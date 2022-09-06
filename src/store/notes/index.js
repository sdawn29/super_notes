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
      console.log(state);
    },
    editNote: (state, action) => {
      state.push(action.payload);
    },
    pinNote: (state, action) => {
      let newState = state.map((note) => {
        if (note.id === action.payload.id) {
          return { ...note, pinned: true };
        }
        return note;
      });
      return newState;
    },
    unPinNote: (state, action) => {
      let newState = state.map((note) => {
        if (note.id === action.payload.id) {
          return { ...note, pinned: false };
        }
        return note;
      });
      return newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, editNote, pinNote, unPinNote } = noteSlice.actions;

export default noteSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    searchText: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push({
        id: Date.now(),
        title: action.payload.title,
        text: action.payload.text,
      });
    },

    deleteNote: (state, action) => {
      state.items = state.items.filter((note) => note.id !== action.payload);
    },
    

    searchNote: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { addNote, deleteNote, searchNote } = Slice.actions;
export default Slice.reducer;
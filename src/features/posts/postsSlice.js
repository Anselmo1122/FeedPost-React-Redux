import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Title of post 1",
    content: "This post 1 is about...",
  },
  {
    id: 2,
    title: "Title of post 2",
    content: "This post 2 is about...",
  }
];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
});

export default postsSlice.reducer;


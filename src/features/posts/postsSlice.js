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
  reducers: {
    addPost(state, action) {
      state.push(action.payload)
    },
    updatePost(state, action) {
      const { id, title, content } = action.payload;
      const post = state.find( post => post.id === id );
      post.title = title;
      post.content = content;
    }
  }
});

export const { addPost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;


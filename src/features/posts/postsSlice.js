import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
  {
    id: 1,
    title: "Title of post 1",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    content: "This post 1 is about...",
    userId: '1',
  },
  {
    id: 2,
    title: "Title of post 2",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    content: "This post 2 is about...",
    userId: '2',
  }
];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            userId
          }
        }
      }
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


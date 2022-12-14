import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
  {
    id: 1,
    title: "Title of post 1",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    content: "This post 1 is about...",
    userId: '1',
    reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}
  },
  {
    id: 2,
    title: "Title of post 2",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    content: "This post 2 is about...",
    userId: '2',
    reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}
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
      prepare(title, content, userId, reactions) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            userId,
            reactions
          }
        }
      }
    },
    updatePost(state, action) {
      const { id, title, content } = action.payload;
      const post = state.find( post => post.id === id );
      post.title = title;
      post.content = content;
    },
    addReaction(state, action) {
      const { postId, reaction } = action.payload
      const existingPost = state.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    }
  }
});

export const { addPost, updatePost, addReaction } = postsSlice.actions;

export default postsSlice.reducer;


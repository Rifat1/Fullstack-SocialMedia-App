import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    loadPosts: (state, action) => {
      state.posts = action.payload;
    },
    removePost: (state) => {
      state.posts = null;
    },
  },
});

export const { loadPosts, removePost } = postsSlice.actions;

export default postsSlice.reducer;

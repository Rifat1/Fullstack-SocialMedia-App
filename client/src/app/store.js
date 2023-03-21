import { configureStore } from "@reduxjs/toolkit";
import errorsReducer from "../features/errors/errorsSlice";
import currentUserReducer from "../features/currentUser/currentUserSlice";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    errors: errorsReducer,
    currentUser: currentUserReducer,
    posts: postsReducer,
  },
});

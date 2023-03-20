import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import errorsReducer from "../features/errors/errorsSlice";
import currentUserReducer from "../features/currentUser/currentUserSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    errors: errorsReducer,
    currentUser: currentUserReducer,
  },
});

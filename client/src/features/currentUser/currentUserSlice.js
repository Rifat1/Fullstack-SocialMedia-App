import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false, // true if authenticated
  user: {}, // user info when authenticated
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      console.log(action.payload);
      state.isAuthenticated = Object.keys(action.payload).length > 0;
      console.log(state.isAuthenticated);
      state.user = action.payload;
    },
  },
});

export const { setCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;

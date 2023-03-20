import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
};

const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    addError: (state, action) => {
      state.message = action.payload;
    },
    removeError: (start) => {
      start.message = null;
    },
  },
});

export const { addError, removeError } = errorsSlice.actions;

export default errorsSlice.reducer;

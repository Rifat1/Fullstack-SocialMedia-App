import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorMessage: null,
};

const errorsSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    addError: (state, action) => {
      state.errorMessage = action.payload;
    },
    removeError: (state) => {
      state.errorMessage = null;
    },
  },
});

export const { addError, removeError } = errorsSlice.actions;

export default errorsSlice.reducer;

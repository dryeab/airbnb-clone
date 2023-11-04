import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hidden: true,
};

const slice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    hideHumbergerMenu(state) {
      state.hidden = true;
    },
    displayHumbergerMenu(state) {
      console.log("Hello I am called");
      state.hidden = false;
    },
  },
});

export const { hideHumbergerMenu, displayHumbergerMenu } = slice.actions;
export default slice.reducer;

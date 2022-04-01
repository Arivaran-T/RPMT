import { createSlice } from "@reduxjs/toolkit";

const initial = {
  mode: localStorage.getItem("mode"),
};

const themeStore = createSlice({
  name: "themeStore",
  initialState: initial,
  reducers: {
    setMode(state, action) {
      state.mode = action.payload.mode;

      localStorage.setItem("mode", state.mode);
    },
  },
});

export default themeStore;

export const { setMode } = themeStore.actions;

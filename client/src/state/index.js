import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "2344343665b7f7000e",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode == "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;
export default globalSlice.reducer;

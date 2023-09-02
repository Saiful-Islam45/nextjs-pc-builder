import { createSlice } from "@reduxjs/toolkit";

const PcBuilderSlicer = createSlice({
  name: "PcBuilder",
  initialState: {},
  reducers: {
    addToBuilder: (state, action) => {
      state[action.payload.category] = action.payload;
    },
    removeFromBuilder: (state, action) => {
      state[action.payload.category] = null;
    },
    clearBuilder: () => {
      return {};
    }
  }
});
export const { addToBuilder, removeFromBuilder, clearBuilder } =
  PcBuilderSlicer.actions;
export default PcBuilderSlicer.reducer;

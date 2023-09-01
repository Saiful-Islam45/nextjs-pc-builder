import { createSlice } from "@reduxjs/toolkit";

const PcBuilderSlicer = createSlice({
  name: "PcBuilder",
  initialState: {},
  reducers: {
    addToBuilder: (state, action) => {
      state = {
        ...state,
        [action.payload.category]: action.payload
      };
    },
    removeFromBuilder: (state, action) => {
      state = {
        ...state,
        [action.payload.category]: null
      };
    }
  }
});
export const { addToBuilder, removeFromBuilder } = PcBuilderSlicer.actions;
export default PcBuilderSlicer.reducer;

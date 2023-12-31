import { configureStore } from "@reduxjs/toolkit";
import PcBuilderSlicer from "./reducers/PcBuilder/pcBuilderSlice"

export const store = configureStore({
  reducer: { pcBuilder: PcBuilderSlicer }
});


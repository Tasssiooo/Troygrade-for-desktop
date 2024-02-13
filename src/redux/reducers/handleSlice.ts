import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { handleOpenCodeEditor } from "../actions/handleActions";

interface States {
  activeFile: string;
}

const initialState: States = {
  activeFile: "",
};

export const handleSlice = createSlice({
  name: "handle",
  initialState,
  reducers: {
    newWindow: handleOpenCodeEditor,
  },
});

export const { newWindow } = handleSlice.actions;

export default handleSlice.reducer;

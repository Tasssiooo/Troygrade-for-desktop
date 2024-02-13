import { createSlice } from "@reduxjs/toolkit";
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
    codeWindow: handleOpenCodeEditor,
  },
});

export const { codeWindow } = handleSlice.actions;

export default handleSlice.reducer;

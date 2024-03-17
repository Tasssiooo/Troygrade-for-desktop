import { Entry, FailedFile, Settings } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface States {
  files: Entry[];
  fileSettings: Settings[];
  failedFiles: FailedFile[];
  activeFile?: Entry;
  selectedFiles: string[];
  editorChanges: string;
}

const initialState: States = {
  files: [],
  fileSettings: [
    {
      assetsPath: "ASSETS/Characters/[character name]/Skins/[skin]/Particles",
      filePath: "Characters/[character name]/Skins/[skin number]/Particles",
      namesOnly: false,
      settingsPreset: "Default",
      updateFileTypes: true,
    },
  ],
  failedFiles: [],
  activeFile: undefined,
  selectedFiles: [],
  editorChanges: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    files: (state, action: PayloadAction<Entry[]>) => {
      return {
        ...state,
        files: action.payload,
      };
    },
    fileSettings: (state, action: PayloadAction<Settings[]>) => {
      return {
        ...state,
        fileSettings: action.payload,
      };
    },
    failedFiles: (state, action: PayloadAction<FailedFile[]>) => {
      return {
        ...state,
        failedFiles: action.payload,
      };
    },
    activeFile: (state, action: PayloadAction<Entry | undefined>) => {
      if (action.payload) {
        localStorage.setItem("editor-title", action.payload.name);
        localStorage.setItem("editor-code", action.payload.content);
      }
      return {
        ...state,
        activeFile: action.payload,
      };
    },
    selectedFiles: (state, action: PayloadAction<string[]>) => {
      return {
        ...state,
        selectedFiles: action.payload,
      };
    },
    editorChanges: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        editorChanges: action.payload,
      };
    },
  },
});

export const {
  files,
  fileSettings,
  failedFiles,
  activeFile,
  selectedFiles,
  editorChanges,
} = appSlice.actions;

export default appSlice.reducer;

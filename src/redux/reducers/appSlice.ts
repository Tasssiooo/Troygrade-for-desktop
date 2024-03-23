import { Entry, FailedFile } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Method = "single" | "batch";

interface Config {
  show: boolean;
  method: Method;
}

interface Filter {
  show: boolean;
  content: string;
}

export interface States {
  files: Entry[];
  failedFiles: FailedFile[];
  activeFile?: Entry;
  selectedFiles: string[];
  editorChanges: string;
  continueModal: Config;
  filter: Filter;
}

const initialState: States = {
  files: [],
  failedFiles: [],
  activeFile: undefined,
  selectedFiles: [],
  editorChanges: "",
  continueModal: {
    show: false,
    method: "single",
  },
  filter: {
    show: false,
    content: "",
  },
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
    continueModal: (state, action: PayloadAction<Config>) => {
      return {
        ...state,
        continueModal: action.payload,
      };
    },
    filter: (state, action: PayloadAction<Filter>) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const {
  files,
  failedFiles,
  activeFile,
  selectedFiles,
  editorChanges,
  continueModal,
  filter,
} = appSlice.actions;

export default appSlice.reducer;

import { Entry } from "../types";

import { reactive } from "vue";

interface appState {
  files: Entry[] | never;
  activeFile: Entry | null;
  selectedFiles: string[] | never;
  editorChanges: string;
  filter: {
    show: boolean;
    value: string;
  };
}

const appState: appState = reactive({
  files: [],
  activeFile: null,
  selectedFiles: [],
  editorChanges: "",
  filter: {
    show: false,
    value: "",
  },
});

export default appState;

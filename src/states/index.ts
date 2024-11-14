import { Entry } from "../types";

import { reactive } from "vue";

interface appState {
  files: Entry[] | never;
  activeFile: Entry | null;
  selectedFiles: Entry[] | never;
  editorChanges: string;
}

const appState: appState = reactive({
  files: [],
  activeFile: null,
  selectedFiles: [],
  editorChanges: "",
});

export default appState;

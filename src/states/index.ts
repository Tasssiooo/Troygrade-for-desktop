import { reactive } from "vue";
import { Entry } from "../types";

interface appState {
  files: Entry[] | never;
  failedFiles: Entry[] | never;
  activeFile: Entry | null;
  selectedFiles: Entry[] | never;
  editorChanges: string;
}

const appState: appState = reactive({
  files: [],
  failedFiles: [],
  activeFile: null,
  selectedFiles: [],
  editorChanges: "",
});

export default appState;

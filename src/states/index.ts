import { Entry } from "../types";

import { reactive } from "vue";

import { EditorFromTextArea } from "codemirror";

interface appState {
  files: Entry[] | never;
  activeFile: Entry | null;
  selectedFiles: string[] | never;
  editor: EditorFromTextArea | null;
  filter: {
    show: boolean;
    value: string;
  };
}

const appState: appState = reactive({
  files: [],
  activeFile: null,
  selectedFiles: [],
  editor: null,
  filter: {
    show: false,
    value: "",
  },
});

export default appState;

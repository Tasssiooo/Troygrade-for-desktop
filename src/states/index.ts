import { Files, Modals, Tools } from "~/types/index";

import { reactive } from "vue";

/* 
  Controls all the states related to files:
  
  *files* is an array of files (Entry[]);
  *activeFile* is the file chosen when you click (Entry);
  *selectedFiles* is an array of IDs (string[]);
*/
const FileState: Files = reactive({
  files: [],
  activeFile: null,
  selectedFiles: [],
});

/* 
  Controls all the states related to the tools (filter and editor):
  
  *editor* is a CodeMirror's EditorFromTextArea instance (EditorFromTextArea);
  *filter* has two states: show is whether the filter appears (boolean) and value is the filter input value (string);
*/
const ToolState: Tools = reactive({
  editor: null,
  filter: {
    show: false,
    value: "",
  },
});

/* 
  Controls all the states related to the universal modals:
  
  *settings* has two states: open is whether to show the modal (boolean) and method is the operation type (batch or single);
  *delete* whether to show the delete modal (boolean);
*/
const ModalState: Modals = reactive({
  settings: {
    open: false,
    method: "single",
  },
  delete: false,
});

export { FileState, ToolState, ModalState };

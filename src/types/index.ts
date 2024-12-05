import { EditorFromTextArea } from "codemirror";

type FileType =
  | "MIG_BIN"
  | "CONV_TROYBIN"
  | "CONV_BIN"
  | "TROYBIN"
  | "UNKNOWN_FILE_TYPE";

interface Entry {
  id: string;
  name: string;
  content: ArrayBuffer | Uint8Array | string;
  type: FileType;
}
interface Settings {
  assetsPath: string;
  filePath: string;
  namesOnly: boolean;
  settingsPreset: string;
  updateFileTypes: boolean;
}

//State interfaces
interface Files {
  files: Entry[];
  activeFile: Entry | null;
  selectedFiles: Entry[];
}

interface Tools {
  editor: EditorFromTextArea | null;
  filter: {
    show: boolean;
    value: string;
  };
}

interface Modals {
  settings: {
    open: boolean;
    method: "single" | "batch";
  };
  delete: boolean;
}

export type { FileType, Entry, Settings, Files, Tools, Modals };

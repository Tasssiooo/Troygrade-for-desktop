import { EditorFromTextArea } from "codemirror";

type FileType =
  | "MIG_BIN"
  | "CONV_TROYBIN"
  | "CONV_BIN"
  | "TROYBIN"
  | "UNKNOWN_FILE_TYPE";

type Method = "single" | "batch";

interface Entry {
  id: number;
  name: string;
  content: ArrayBuffer | Uint8Array | string;
  type: FileType;
}
interface Settings {
  assetsPath: string;
  filePath: string;
  namesOnly: boolean;
  updateFileTypes: boolean;
}

interface FileStore {
  all: Entry[];
  active: Entry | null;
  selected: number[];
  deleteBatch: () => void;
  delete: () => void;
  emptySelected: () => void;
  findEntry: (
    data: Entry[],
    target: number,
    low: number,
    high: number,
  ) => number;
  saveChanges: () => void;
  toggleSelectAll: () => void;
  toggleSelect: (id: number) => void;
  updateActive: (id: number) => void;
}

interface ToolStore {
  editor: EditorFromTextArea | null;
  filter: {
    show: boolean;
    value: string;
  };
  updateFilterValue: (value: string) => void;
  showFilter: (show: boolean) => void;
}

interface ModalStore {
  settings: {
    open: boolean;
    method: Method;
  };
  delete: {
    open: boolean;
    method: Method;
  };
  openDelete: (open: boolean, method?: Method) => void;
  openSettings: (open: boolean, method?: Method) => void;
}

export type { FileType, Entry, Settings, FileStore, ToolStore, ModalStore };

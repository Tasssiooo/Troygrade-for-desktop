export type FileType =
  | "MIG_BIN"
  | "CONV_TROYBIN"
  | "CONV_BIN"
  | "TROYBIN"
  | "UNKNOWN_FILE_TYPE";

export interface Entry {
  id: string;
  name: string;
  content: ArrayBuffer | Uint8Array | string;
  type: FileType;
}

export interface Settings {
  assetsPath: string;
  filePath: string;
  namesOnly: boolean;
  settingsPreset: string;
  updateFileTypes: boolean;
}

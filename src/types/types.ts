export type FileType =
  | "MIG_BIN"
  | "CONV_TROYBIN"
  | "CONV_BIN"
  | "TROYBIN"
  | "UNKNOWN_FILE_TYPE";

export interface Settings {
  assetsPath: string;
  filePath: string;
  namesOnly: boolean;
  updateFileTypes: boolean;
}

export interface Entry {
  id: string;
  name: string;
  content: any;
  type: FileType;
  originalFileID?: string;
}

export interface FailedFile {
  id: string;
  error: unknown;
  name: string;
  type: FileType;
}

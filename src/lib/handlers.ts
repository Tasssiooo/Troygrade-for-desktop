import { FileType, Entry } from "@/types/types";

import { v4 as uuid } from "uuid";

import TroybinConverter from "./TroybinConverter/Main";
import MigrateConvertedTroybin from "./TroybinMigrationTool/Main";

import {
  activeFile,
  files,
  failedFiles,
} from "@/redux/reducers/appSlice";
import { store } from "@/redux/store";

const fileSettings = store.getState().app.fileSettings;

export function handleConvertFiles(tbins: Entry[], tbinIDs: string[]) {
  const screwedFiles = [...store.getState().app.failedFiles];
  const newFiles = [...store.getState().app.files];

  for (let i = 0; i < tbins.length; i++) {
    let tbin = { ...tbins[i] };

    let convertedEntry: Entry = {
      id: "",
      name: "",
      content: "",
      type: "UNKNOWN_FILE_TYPE",
      originalFileID: "",
    };

    for (let j = 0; j < tbinIDs.length; j += 1) {
      if (tbin.id === tbinIDs[j]) {
        if (tbin.type === "CONV_TROYBIN") {
          tbin.name = tbins[i].name?.replace("_Converted", "");
          try {
            const fileContentConverted = MigrateConvertedTroybin(
              fileSettings[j].assetsPath,
              fileSettings[j].filePath,
              tbin,
              fileSettings[j].namesOnly,
              fileSettings[j].updateFileTypes
            );

            if (fileContentConverted !== null) {
              convertedEntry = {
                id: uuid(),
                name: `${tbin.name}_Migrated`,
                content: fileContentConverted,
                type: "MIG_BIN",
                originalFileID: tbin.id,
              };
            }

            if (tbinIDs.length === 1) {
            }
          } catch (err: any) {
            console.log(err);
            screwedFiles.push({
              id: tbin.id,
              error: err.message,
              name: tbins[i].name,
              type: tbin.type,
            });
          }
        } else if (tbin.type === "TROYBIN") {
          try {
            const fileContentConverted = TroybinConverter(tbin.content);

            convertedEntry = {
              id: uuid(),
              name: `${tbin.name}_Converted`,
              content: fileContentConverted,
              type: "CONV_TROYBIN",
              originalFileID: tbin.id,
            };

            if (tbinIDs.length === 1) {
            }
          } catch (err: any) {
            console.log(err);
            screwedFiles.push({
              id: tbin.id,
              error: err.message,
              name: tbin.name,
              type: tbin.type,
            });
          }
        } else {
          screwedFiles.push({
            id: tbin.id,
            error: "File type can not be converted",
            name: tbin.name,
            type: tbin.type,
          });
        }
      }
    }

    if (convertedEntry !== undefined) {
      newFiles.push(convertedEntry);
    }
  }

  store.dispatch(files(newFiles));
  store.dispatch(failedFiles(screwedFiles));
  store.dispatch(activeFile(newFiles[newFiles.length - 1]));
}

export function handleLoadFiles(input: FileList) {
  const tbinIDs: string[] = [];
  const tbinFiles: Entry[] = [];

  for (let i = 0; i < input?.length; i++) {
    const file = input[i];
    const reader = new FileReader();

    let fileType = "";

    if (file.type === "text/plain") {
      fileType = "TXT";
      reader.readAsText(file);
    } else {
      fileType = "TROYBIN";
      reader.readAsArrayBuffer(file);
    }

    reader.onload = (e) => {
      const id = uuid();
      const content = e.target?.result as any;

      let name = "";
      let type: FileType;

      if (fileType === "TXT") {
        name = file.name.replace(".txt", "");

        if (content[0] === "[") {
          type = "CONV_TROYBIN";
        } else if (content[0] === '"') {
          type = "MIG_BIN";
        } else if (content[0] === "#") {
          type = "CONV_BIN";
        } else {
          type = "UNKNOWN_FILE_TYPE";
        }
      } else {
        name = file.name.replace(".troybin", "");
        type = "TROYBIN";

        tbinIDs.push(id);
      }

      if (type !== "UNKNOWN_FILE_TYPE") {
        const file: Entry = {
          id,
          name,
          content,
          type,
        };

        tbinFiles.push(file);

        if (i === input?.length - 1 && tbinIDs.length > 0) {
          handleConvertFiles(tbinFiles, tbinIDs);
        }
      } else {
        console.log("File type is unknown!");
      }
    };
  }
}

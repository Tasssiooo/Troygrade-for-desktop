import { FileType, Entry, Settings } from "../types";

import { open } from "@tauri-apps/plugin-dialog";
import { readFile, BaseDirectory } from "@tauri-apps/plugin-fs";
import { basename, extname } from "@tauri-apps/api/path";

import { v4 as uuid } from "uuid";

import { toast } from "vue-sonner";

import TroybinConverter from "./TroybinConverter/Main";
import MigrateConvertedTroybin from "./TroybinMigrationTool/Main";

import appState from "../states";

function handleConvertFile(
  entry: Entry,
  settings: Settings = {
    assetsPath: "ASSETS/Characters/[character name]/Skins/[skin]/Particles",
    filePath: "Characters/[character name]/Skins/[skin number]/Particles",
    namesOnly: false,
    settingsPreset: "Default",
    updateFileTypes: true,
  },
) {
  if (entry.type === "CONV_TROYBIN") {
    entry.name = entry.name.replace("_Converted", "");

    try {
      const convertedContent = MigrateConvertedTroybin(
        settings.assetsPath,
        settings.filePath,
        entry,
        settings.namesOnly,
        settings.updateFileTypes,
      );

      if (convertedContent !== null) {
        appState.files.push({
          id: uuid(),
          name: `${entry.name}_Migrated`,
          content: convertedContent,
          type: "MIG_BIN",
        });
      }
    } catch (err: any) {
      toast.error(`Error ${entry.name}`, {
        description: err.message,
      });
    }
  } else if (entry.type === "TROYBIN") {
    try {
      const convertedContent = TroybinConverter(entry.content);

      if (convertedContent !== null) {
        appState.files.push({
          id: uuid(),
          name: `${entry.name}_Converted`,
          content: convertedContent,
          type: "CONV_TROYBIN",
        });
      }
    } catch (err: any) {
      toast.error(`Error ${entry.name}`, {
        description: err.message,
      });
    }
  } else {
    toast.error(`Error: ${entry.name}`, {
      description: `File type cannot be converted: ${entry.type}`,
    });
  }
}

async function handleLoadFiles() {
  const selected = await open({
    title: "Open a troybin or a plain text file formatted as bin or troybin",
    multiple: true,
    filters: [
      {
        name: "Troybin/Bin",
        extensions: ["troybin", "troy", "txt"],
      },
      {
        name: "All",
        extensions: ["*"],
      },
    ],
  });

  if (Array.isArray(selected)) {
    selected.forEach(async (path) => {
      const file = await readFile(path, {
        baseDir: BaseDirectory.Home,
      });

      const fileext = await extname(path);

      let filename = await basename(path);
      let filetype: FileType = "TROYBIN";

      if (fileext !== "troybin") {
        filename = filename.replace(fileext, "");

        const text = new TextDecoder().decode(file.buffer);

        switch (text[0]) {
          case "[":
            filetype = "CONV_TROYBIN";
            break;
          case '"':
            filetype = "MIG_BIN";
            break;
          case "#":
            filetype = "CONV_BIN";
            break;
          default:
            filetype = "UNKNOWN_FILE_TYPE";
            break;
        }
      } else {
        filename = filename.replace(".troybin", "");
      }

      if (filetype !== "UNKNOWN_FILE_TYPE") {
        handleConvertFile({
          id: uuid(),
          name: filename,
          content: file.buffer,
          type: filetype,
        });
      } else {
        toast.error("Error", {
          description: `Unknown file type: ${filename + fileext}`,
        });
      }
    });
  }
}

export { handleConvertFile, handleLoadFiles };

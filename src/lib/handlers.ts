import { FileType, Entry, Settings } from "~/types/index";

import { open } from "@tauri-apps/plugin-dialog";
import { readFile, BaseDirectory } from "@tauri-apps/plugin-fs";
import { basename, extname } from "@tauri-apps/api/path";

import { toast } from "vue-sonner";

import { fm } from "~/stores/index";

import TroybinConverter from "./TroybinConverter/Main";
import MigrateConvertedTroybin from "./TroybinMigrationTool/Main";

function handleConvertFile(
  entry: Entry,
  settings: Settings = {
    assetsPath: "ASSETS/Characters/[character name]/Skins/[skin]/Particles",
    filePath: "Characters/[character name]/Skins/[skin number]/Particles",
    namesOnly: false,
    updateFileTypes: true,
  },
) {
  if (entry.type === "CONV_TROYBIN") {
    try {
      const convertedContent = MigrateConvertedTroybin(
        settings.assetsPath,
        settings.filePath,
        entry,
        settings.namesOnly,
        settings.updateFileTypes,
      );

      if (convertedContent !== null) {
        fm.all.push({
          id: fm.all.length,
          name: entry.name.replace("_Converted", "_Migrated"),
          content: convertedContent,
          type: "MIG_BIN",
        });
      }
    } catch (err: any) {
      toast.error(`Error: ${entry.name}`, {
        description: err.message,
      });
    }
  } else if (entry.type === "TROYBIN") {
    try {
      const convertedContent = TroybinConverter(entry.content);

      if (convertedContent !== null) {
        fm.all.push({
          id: fm.all.length,
          name: `${entry.name}_Converted`,
          content: convertedContent,
          type: "CONV_TROYBIN",
        });
      }
    } catch (err: any) {
      toast.error(`Error: ${entry.name}`, {
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

      const ext = await extname(path);

      let name = await basename(path);
      let type: FileType = "TROYBIN";
      let content: ArrayBufferLike | string = file.buffer;

      if (ext !== "troybin") {
        name = name.replace(`.${ext}`, "");

        content = new TextDecoder().decode(content);

        switch (content[0]) {
          case "[":
            type = "CONV_TROYBIN";
            break;
          case '"':
            type = "MIG_BIN";
            break;
          case "#":
            type = "CONV_BIN";
            break;
          default:
            type = "UNKNOWN_FILE_TYPE";
            break;
        }
      } else {
        name = name.replace(".troybin", "");
      }

      if (type !== "UNKNOWN_FILE_TYPE") {
        handleConvertFile({
          id: 0,
          name,
          content,
          type,
        });
      } else {
        toast.error("Error", {
          description: `Unknown file type: ${name + ext}`,
        });
      }
    });
  }
}

export { handleConvertFile, handleLoadFiles };

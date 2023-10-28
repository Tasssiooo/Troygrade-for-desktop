import { writeTextFile, BaseDirectory } from "@tauri-apps/api/fs";
import { save, open } from "@tauri-apps/api/dialog";
import ActionButton from "./ActionButton";
import {
  IoOpenOutline,
  IoSave,
  IoArrowDownOutline,
  IoBuild,
  IoTrashBin,
} from "react-icons/io5";
import { useContext, useState } from "react";
import { HandlersContext, StatesContext } from "../../../App";

import TooltipTop from "../Tooltip/Tooltip-t";

const EditorActionsSection = () => {
  const { handleOpenNewWindow, handleSaveChanges } =
    useContext(HandlersContext);
  const { files, checkedFiles, activeFile, setShowModal, setCheckedFiles } =
    useContext(StatesContext);
  const [toggleTooltip, setToggleTooltip] = useState("");

  const saveFile = async () => {
    const newFile = checkedFiles.length > 0 ? checkedFiles : activeFile;
    if (Array.isArray(newFile)) {
      const selectDir = await open({
        directory: true,
        title: `Select a directory to save the files`,
      });
      newFile.forEach(async (fileID, i) => {
        let file = files.find((file) => file.id === fileID);
        await writeTextFile(
          `${selectDir}\\${file.fileName}.txt`,
          file.content,
          {
            dir: BaseDirectory.Document,
          }
        );
      });
      setCheckedFiles([]);
    } else {
      const saveDialog = await save({
        defaultPath: newFile?.fileName,
        filters: [
          {
            name: "Text",
            extensions: ["txt"],
          },
        ],
        title: `Save ${newFile?.type} as text`,
      });
      await writeTextFile(saveDialog, newFile?.content, {
        dir: BaseDirectory.Document,
      });
    }
  };

  return (
    <section className="w-full h-[15%] py-2.5" id="menu-editor-container">
      <div className="flex flex-row-reverse justify-start gap-3 items-end w-[93%] h-full">
        <ActionButton
          icon={
            <IoOpenOutline
              role="img"
              className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
            />
          }
          ariaLabel={"Open code in a new tab"}
          click={handleOpenNewWindow}
          val={"own"}
          tooltipText={"Open code in a new tab"}
        />
        <ActionButton
          icon={
            <IoSave
              role="img"
              className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
            />
          }
          ariaLabel={"Save changes"}
          click={handleSaveChanges}
          tooltipText={"Save changes"}
        />
        <ActionButton
          icon={
            <IoBuild
              role="img"
              className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
            />
          }
          ariaLabel={"Convert file(s)"}
          click={() => setShowModal("Convert")}
          tooltipText={"Convert file(s)"}
        />
        <ActionButton
          icon={
            <IoArrowDownOutline
              role="img"
              className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
            />
          }
          ariaLabel={"Save this file"}
          click={saveFile}
          tooltipText={"Save this file"}
        />
        <ActionButton
          icon={
            <IoTrashBin
              role="img"
              className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
            />
          }
          ariaLabel={"Delete file(s)"}
          click={() => setShowModal("Delete")}
          tooltipText={"Delete file(s)"}
        />
      </div>
    </section>
  );
};

export default EditorActionsSection;

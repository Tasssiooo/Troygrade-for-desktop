import { writeTextFile, BaseDirectory } from "@tauri-apps/api/fs";
import { save } from "@tauri-apps/api/dialog";
import ActionButton from "./ActionButton";
import {
  IoOpenOutline,
  IoSave,
  IoArrowDownOutline,
  IoBuild,
  IoTrashBin,
} from "react-icons/io5";
import { useContext } from "react";
import { HandlersContext, StatesContext } from "../../../App";

const EditorActionsSection = () => {
  const { handleOpenNewWindow, handleSaveChanges } = useContext(HandlersContext);
  const { checkedFiles, activeFile, setShowModal } = useContext(StatesContext);

  const saveFile = async () => {
    const saveDialog = await save({
      defaultPath: activeFile?.fileName,
      filters: [
        {
          name: "Text",
          extensions: ["txt"],
        },
      ],
      title: `Save ${activeFile?.type} as text`,
    });
    await writeTextFile(saveDialog, activeFile?.content, {
      dir: BaseDirectory.Download,
    });
  };

  return (
    <section
      className="flex flex-row justify-center w-full h-[15%] py-2.5"
      id="menu-editor-container"
    >
      <div className="flex flex-row justify-between items-center gap-x-2 mt-1 w-[93%] h-full">
        <div className="text-xl whitespace-nowrap text-[#e2b151]">
          <h2>
            {activeFile?.hasOwnProperty("id") &&
              activeFile?.fileName
                .replace("_Converted", " - Converted")
                .replaceAll("_", " ")}
          </h2>
        </div>
        <div className="flex flex-row-reverse justify-start gap-3 items-end w-[93%]">
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
            disabled={checkedFiles.length > 1 ? true : false}
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
            disabled={checkedFiles.length > 1 ? true : false}
          />
          <ActionButton
            icon={
              <IoBuild
                role="img"
                className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
              />
            }
            ariaLabel={"Convert this file"}
            click={() => setShowModal("Convert")}
            tooltipText={"Convert this file"}
            disabled={checkedFiles.length > 1 ? true : false}
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
            disabled={checkedFiles.length > 1 ? true : false}
          />
          <ActionButton
            icon={
              <IoTrashBin
                role="img"
                className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
              />
            }
            ariaLabel={"Delete this file"}
            click={() => setShowModal("Delete")}
            tooltipText={"Delete this file"}
            disabled={checkedFiles.length > 1 ? true : false}
          />
        </div>
      </div>
    </section>
  );
};

export default EditorActionsSection;

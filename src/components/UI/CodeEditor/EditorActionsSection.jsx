import ActionButton from "./ActionButton";
import {
  IoOpenOutline,
  IoSave,
  IoArrowDownOutline,
  IoBuild,
  IoTrashBin,
} from "react-icons/io5";
import { useContext } from "react";
import { HandlersContext } from "@/App";
import { BrowserWindow } from "@electron/remote";
import { BrowserWindow as TypeWindow } from "electron";
import { join } from "node:path";

const EditorActionsSection = () => {
  const { handleConvertFiles } = useContext(HandlersContext);

  let convertWindow: TypeWindow | undefined;

  function handleClick() {
    const window: any = BrowserWindow.getFocusedWindow();
    convertWindow = new BrowserWindow({
      title: "Convert file(s)",
      width: 1024,
      height: 576,
      resizable: false,
      modal: true,
      parent: window,
      show: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      },
    });
    convertWindow.loadFile(join(__dirname, "convertModal.html"));
    convertWindow.once('ready-to-show', () => {
      convertWindow?.show();
    })
  }

  return (
    <section className="w-full h-10 py-2.5" id="menu-editor-container">
      <div className="flex flex-row-reverse justify-start gap-3 items-end w-[93%] h-full px-4">
        <ActionButton
          icon={
            <IoOpenOutline
              role="img"
              className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
            />
          }
          ariaLabel={"Open code in a new tab"}
          click={() => handleClick()}
        />
        <ActionButton
          icon={
            <IoSave
              role="img"
              className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
            />
          }
          ariaLabel={"Save changes"}
          click={() => {}}
        />
        <ActionButton
          icon={
            <IoBuild
              role="img"
              className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
            />
          }
          ariaLabel={"Convert this file"}
          click={() => {}}
        />
        <ActionButton
          icon={
            <IoArrowDownOutline
              role="img"
              className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
            />
          }
          ariaLabel={"Save this file"}
          click={() => {}}
        />
        <ActionButton
          icon={
            <IoTrashBin
              role="img"
              className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
            />
          }
          ariaLabel={"Delete this file"}
          click={() => {}}
        />
      </div>
    </section>
  );
};

export default EditorActionsSection;

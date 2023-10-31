import { IoArrowDownOutline, IoBuild, IoTrashBin } from "react-icons/io5";

import { writeTextFile, BaseDirectory } from "@tauri-apps/api/fs";
import { open } from "@tauri-apps/api/dialog";

import { StatesContext } from "../../../../../App";
import { useContext } from "react";

const ActionsList = ({ setToggleActionsList }) => {
  const { files, checkedFiles, setShowModal, setCheckedFiles } =
    useContext(StatesContext);

  const saveFiles = async () => {
    const selectDir = await open({
      directory: true,
      title: `Select a directory to save the files`,
    });
    checkedFiles.forEach(async (id) => {
      let file = files.find((file) => file.id === id);
      await writeTextFile(`${selectDir}\\${file.fileName}.txt`, file.content, {
        dir: BaseDirectory.Download,
      });
    });
    setCheckedFiles([]);
  };
  return (
    <div className="absolute top-[6.4rem] left-[7.8rem] w-36 h-22 z-[999]">
      <ul
        className="flex flex-col relative transition-all box-border bg-[#010a13] w-full h-full border-2 border-transparent"
        style={{
          borderImage:
            "linear-gradient(to bottom, #785a28 0, #463714 50%, #463714 100%) 1 stretch",
        }}
      >
        <li
          role="button"
          className="px-[10px] m-0 h-9 flex gap-1.5 items-center whitespace-nowrap relative cursor-pointer text-[#cdbe91] hover:text-[#f0e6d2] hover:bg-[#1e2328]"
          onClick={() => {
            saveFiles();
            setToggleActionsList(false);
          }}
        >
          <IoArrowDownOutline className="text-lg" />
          <p className="text-sm">Save files</p>
        </li>
        <li
          role="button"
          className="px-[10px] m-0 h-9 flex gap-2 items-center whitespace-nowrap relative cursor-pointer text-[#cdbe91] hover:text-[#f0e6d2] hover:bg-[#1e2328]"
          onClick={() => {
            setShowModal("Convert");
            setToggleActionsList(false);
          }}
        >
          <IoBuild />
          <p className="text-sm">Convert files</p>
        </li>
        <li
          role="button"
          className="px-[10px] m-0 h-9 flex gap-2 items-center whitespace-nowrap relative cursor-pointer text-[#cdbe91] hover:text-[#f0e6d2] hover:bg-[#1e2328]"
          onClick={() => {
            setShowModal("Delete");
            setToggleActionsList(false);
          }}
        >
          <IoTrashBin />
          <p className="text-sm">Delete files</p>
        </li>
      </ul>
    </div>
  );
};

export default ActionsList;

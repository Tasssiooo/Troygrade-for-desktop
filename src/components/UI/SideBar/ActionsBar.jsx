import { useContext } from "react";
import { HandlersContext, StatesContext } from "@/App";

const ActionsBar = () => {
  const { handleLoadFiles } = useContext(HandlersContext);
  const { files } = useContext(StatesContext);

  return (
    <nav id="actions-container">
      <div className="relative h-[33px]" id="actions-bar">
        <div className="flex h-full mt-0.5 relative">
          <ul
            className="flex justify-end items-center h-full list-none -mt-0.5 overflow-hidden relative w-full"
            id="buttons"
          >
            <li className="text-[#a09b8c] flex-[1] px-[10px] leading-4 uppercase tracking-[.075em] text-xs">
              Actions
            </li>
            <li
              className="bg-[#c8aa6e] flex-shrink-0 h-full w-[30px] cursor-pointer filter-button"
              role="button"
              aria-label="Look for files in the list"
            ></li>
            <li id="add">
              <label
                className="bg-[#c8aa6e] flex-shrink-0 h-full w-[30px] block cursor-pointer add-button"
                htmlFor="add-file"
              >
                Add files
              </label>
              <input
                disabled={files.length === 20}
                type="file"
                id="add-file"
                accept=".txt, .troybin"
                multiple
                onChange={(e) => handleLoadFiles(e.target.files)}
                hidden
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ActionsBar;

import { useContext, useEffect, useState } from "react";
import { HandlersContext, StatesContext } from "../../../../App";

const ActionsBar = () => {
  const [toggleSelectAll, setToggleSelectAll] = useState(false);
  const { handleLoadFiles } = useContext(HandlersContext);
  const { files, setCheckedFiles, checkedFiles } = useContext(StatesContext);

  useEffect(() => {
    if (toggleSelectAll) {
      const newCheckedFiles = [];
      files.forEach((file) => newCheckedFiles.push(file.id));
      setCheckedFiles(newCheckedFiles);
    } else {
      setCheckedFiles([]);
    }
  }, [toggleSelectAll]);

  return (
    <nav id="actions-container">
      <div className="relative h-[33px]" id="actions-bar">
        <div className="flex h-full mt-0.5 relative">
          <div
            className="flex flex-row justify-between items-center h-full -mt-0.5 overflow-hidden relative w-full pl-1.5"
            id="buttons"
          >
            <div
              className="w-5 h-5 mr-1.5 flex-shrink-0 cursor-pointer"
              role="checkbox"
              id={files.length > 0 && checkedFiles.length === files.length ? "select-all-on" : "select-all"}
              onClick={() => setToggleSelectAll((prev) => !prev)}
            ></div>
            <label
              className="w-full text-sm cursor-pointer"
              htmlFor={
                checkedFiles.length === files.length
                  ? "select-all-on"
                  : "select-all"
              }
            >
              Select All
            </label>
            <div className="flex justify-end items-center h-full list-none -mt-0.5 overflow-hidden relative w-full">
              <div
                className="bg-[#c8aa6e] flex-shrink-0 h-full w-[30px] cursor-pointer filter-button"
                role="button"
                aria-label="Look for files in the list"
              ></div>
              <div id="add">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ActionsBar;

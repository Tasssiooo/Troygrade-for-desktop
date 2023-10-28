import { useContext, useEffect, useState } from "react";
import { HandlersContext, StatesContext } from "../../../../App";

import TooltipBottom from "../../Tooltip/Tooltip-b";
import SearchBar from "./SearchBar";

const ActionsBar = () => {
  const [toggleSelectAll, setToggleSelectAll] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleTooltip, setToggleTooltip] = useState("");

  const { handleLoadFiles } = useContext(HandlersContext);
  const { files, setCheckedFiles, checkedFiles } = useContext(StatesContext);

  const searchInput = document.getElementById("filter");

  useEffect(() => {
    if (toggleSelectAll) {
      const newCheckedFiles = files.map((obj) => obj.id);
      /* files.forEach((file) => newCheckedFiles.push(file.id)); */
      setCheckedFiles(newCheckedFiles);
    } else {
      setCheckedFiles([]);
    }
  }, [toggleSelectAll]);

  return (
    <nav id="actions-container">
      <div className="relative h-[33px]" id="actions-bar">
        <div className="flex h-full mt-0.5 relative">
          <SearchBar
            toggleFilter={toggleFilter}
            setToggleFilter={setToggleFilter}
          />
          <div
            className="flex flex-row justify-between items-center h-full -mt-0.5 overflow-hidden relative w-full pl-1.5"
            id="buttons"
            style={{ display: toggleFilter ? "none" : "flex" }}
          >
            <div
              className="w-5 h-5 mr-1.5 flex-shrink-0 cursor-pointer"
              role="checkbox"
              id={
                files.length > 0 && checkedFiles.length === files.length
                  ? "select-all-on"
                  : "select-all"
              }
              onClick={() => setToggleSelectAll((prev) => !prev)}
            ></div>
            <label
              className="w-full text-sm cursor-pointer hover:text-[#dbdbdb]"
              htmlFor={
                checkedFiles.length === files.length
                  ? "select-all-on"
                  : "select-all"
              }
              id="select-label"
              onClick={() => setToggleSelectAll((prev) => !prev)}
            >
              Select All
            </label>
            <div
              className="flex justify-end items-center h-full list-none -mt-0.5 overflow-hidden relative w-full"
              id="actions"
              style={{ display: toggleFilter ? "none" : "flex" }}
            >
              <div
                className="bg-[#c8aa6e] hover:bg-[#f3e0bd] flex-shrink-0 h-full w-[30px] cursor-pointer filter-button"
                role="button"
                aria-label="Look for files in the list"
                id="search-button"
                onClick={() => {
                  setToggleFilter(true);
                  setTimeout(() => {
                    searchInput.focus();
                  }, 200);
                }}
                onMouseEnter={() => setToggleTooltip("search")}
                onMouseLeave={() => setToggleTooltip("")}
              ></div>
              {toggleTooltip === "search" && <TooltipBottom tip={"Filter"} />}
              <div
                id="add"
                onMouseEnter={() => setToggleTooltip("add")}
                onMouseLeave={() => setToggleTooltip("")}
              >
                <label
                  className="bg-[#c8aa6e] hover:bg-[#f3e0bd] flex-shrink-0 h-full w-[30px] block cursor-pointer add-button"
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
              {toggleTooltip === "add" && <TooltipBottom tip={"Add files"} />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ActionsBar;

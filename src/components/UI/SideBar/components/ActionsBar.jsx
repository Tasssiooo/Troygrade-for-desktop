import { useContext, useEffect, useState } from "react";
import { HandlersContext, StatesContext } from "../../../../App";

import TooltipBottom from "../../Tooltip/Tooltip-b";
import SearchBar from "./SearchBar";
import SelectAll from "./Actions/SelectAll";
import Search from "./Actions/Search";
import AddFiles from "./Actions/AddFiles";
import BatchActions from "./Actions/BatchActions";
import ActionsList from "./Actions/ActionsList";

const ActionsBar = () => {
  const [toggleSelectAll, setToggleSelectAll] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [toggleTooltip, setToggleTooltip] = useState("");
  const [toggleActionsList, setToggleActionsList] = useState(false);

  const { handleLoadFiles } = useContext(HandlersContext);
  const { files, setCheckedFiles, checkedFiles } = useContext(StatesContext);

  useEffect(() => {
    if (toggleSelectAll) {
      const newCheckedFiles = files.map((obj) => obj.id);
      setCheckedFiles(newCheckedFiles);
    } else if (checkedFiles.length === files.length) {
      setCheckedFiles([]);
    }
  }, [toggleSelectAll]);

  useEffect(() => {
    if (checkedFiles.length === 0) {
      setToggleSelectAll(false);
    } else if (checkedFiles.length === files.length) {
      setToggleSelectAll(true);
    }
  }, [checkedFiles]);

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
            <SelectAll
              checkedFiles={checkedFiles}
              files={files}
              setToggleSelectAll={setToggleSelectAll}
            />
            <div
              className="flex justify-end items-center h-full list-none -mt-0.5 overflow-hidden relative w-full"
              id="actions"
              style={{ display: toggleFilter ? "none" : "flex" }}
            >
              <BatchActions
                setToggleTooltip={setToggleTooltip}
                setToggleActionsList={setToggleActionsList}
                checkedFiles={checkedFiles}
              />
              {toggleTooltip === "batch" && !toggleActionsList && (
                <TooltipBottom tip={"Batch actions"} />
              )}
              <Search
                setToggleFilter={setToggleFilter}
                setToggleTooltip={setToggleTooltip}
              />
              {toggleTooltip === "search" && <TooltipBottom tip={"Filter"} />}
              <AddFiles
                handleLoadFiles={handleLoadFiles}
                files={files}
                setToggleTooltip={setToggleTooltip}
              />
              {toggleTooltip === "add" && <TooltipBottom tip={"Add files"} />}
            </div>
          </div>
        </div>
      </div>
      {toggleActionsList && (
        <ActionsList setToggleActionsList={setToggleActionsList} />
      )}
    </nav>
  );
};

export default ActionsBar;

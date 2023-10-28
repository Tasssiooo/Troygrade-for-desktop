import { useContext } from "react";
import { IndexContext } from "../../SettingsModal";

const Checkboxes = ({
  forAll,
  setForAll,
  updateTypes,
  setUpdateTypes,
  showNames,
  setShowNames,
}) => {
  const { selectedFiles } = useContext(IndexContext);
  return (
    <>
      <div className="flex gap-1 items-center my-2" id="checkbox-container-1">
        <label
          className={`w-[14px] h-[14px] cursor-pointer shrink-0 bg-[url(./assets/images/checkbox-spritesheet.png)] ${
            forAll && "bg-[0px_-28px]"
          } hover:${forAll ? "bg-[0px_-42px]" : "bg-[0px_-14px]"}`}
          id="checkbox"
          htmlFor="setForAll"
        >
          <span className="absolute cursor-pointer -mt-[1px] ml-[17px] text-xs text-[#d7d7d7] hover:text-white">
            Set this configuration for all files
          </span>
        </label>
        <input
          type="checkbox"
          name="setForAll"
          id="setForAll"
          disabled={selectedFiles.length === 1 ? true : false}
          value={forAll}
          onChange={() => setForAll((prev) => !prev)}
          className="opacity-0 pointer-events-none"
          hidden
        />
      </div>
      <div className="flex gap-1 items-center my-2" id="checkbox-container-2">
        <label
          className={`w-[14px] h-[14px] cursor-pointer shrink-0 bg-[url(./assets/images/checkbox-spritesheet.png)] ${
            showNames && "bg-[0px_-28px]"
          } hover:${showNames ? "bg-[0px_-42px]" : "bg-[0px_-14px]"}`}
          id="checkbox"
          htmlFor="showNames"
        >
          <span className="absolute cursor-pointer -mt-[1px] ml-[17px] text-xs text-[#d7d7d7] hover:text-white">
            Only show property names in "Unknown Hashes" section
          </span>
        </label>
        <input
          type="checkbox"
          name="showNames"
          id="showNames"
          value={showNames}
          onChange={() => setShowNames((prev) => !prev)}
          className="opacity-0 pointer-events-none"
          hidden
        />
      </div>
      <div className="flex gap-1 items-center my-2" id="checkbox-container-2">
        <label
          className={`w-[14px] h-[14px] cursor-pointer shrink-0 bg-[url(./assets/images/checkbox-spritesheet.png)] ${
            updateTypes && "bg-[0px_-28px]"
          } hover:${updateTypes ? "bg-[0px_-42px]" : "bg-[0px_-14px]"}`}
          id="checkbox"
          htmlFor="updateTypes"
        >
          <span className="absolute cursor-pointer -mt-[1px] ml-[17px] text-xs text-[#d7d7d7] hover:text-white">
            Update file types used in properties with assets
          </span>
        </label>
        <input
          type="checkbox"
          name="updateTypes"
          id="updateTypes"
          value={updateTypes}
          onChange={() => setUpdateTypes((prev) => !prev)}
          className="opacity-0 pointer-events-none"
          hidden
        />
      </div>
    </>
  );
};

export default Checkboxes;

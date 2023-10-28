import { useState } from "react";
import { IoHelpCircle } from "react-icons/io5";
import BigTooltip from "../../../Tooltip/BigTooltip";

const PathInputFields = ({
  assetsPath,
  setAssetsPath,
  filePath,
  setFilePath,
}) => {
  const [toggleTooltip, setToggleTooltip] = useState("");
  return (
    <div className="w-full h-full overflow-hidden">
      <div
        className="flex flex-col shrink-0 my-[5px] overflow-hidden"
        id="assets-path-input-container"
      >
        <span className="text-[#d7d7d7] text-sm inline-flex items-center gap-1">
          Assets path{" "}
          <IoHelpCircle
            role="contentinfo"
            className="text-lg"
            onMouseEnter={() => setToggleTooltip("assets")}
            onMouseLeave={() => setToggleTooltip("")}
          />
          {toggleTooltip === "assets" && (
            <div className="w-[16.1%] absolute top-[260px]">
              <BigTooltip
                tip={
                  <>
                    <p>
                      In bin format, this will be the path for textures, models, etc.
                    </p>
                    <p>
                      Example:
                      "ASSETS/Characters/Riven/Skins/Base/Particles/Flare-Rainbow_white_10.dds"
                    </p>
                    <p className="text-xs relative top-2">Obs: That is the pattern for champions or mobs.</p>
                  </>
                }
              />
            </div>
          )}
        </span>
        <div
          className="flex items-center gap-1 flex-row grow justify-start overflow-hidden"
          id="input-container-assets"
        >
          <input
            className="border border-[hsla(45,10%,59%,.4)] bg-transparent w-full outline-none px-1 py-0.5 text-sm"
            name="assets"
            id="assets"
            spellCheck="false"
            value={assetsPath}
            aria-label="assets path"
            onChange={(e) => setAssetsPath(e.target.value)}
          />
          <label
            htmlFor="assets"
            className="w-[20px] h-[20px] cursor-pointer bg-contain bg-no-repeat bg-[50%] bg-[url(./assets/images/icon-edit.png)]"
          ></label>
        </div>
      </div>
      <div
        className="flex flex-col shrink-0 my-[5px] overflow-hidden"
        id="file-path-input-container"
      >
        <span className="text-[#d7d7d7] text-sm inline-flex items-center gap-1">
          File path{" "}
          <IoHelpCircle
            role="contentinfo"
            className="text-lg"
            onMouseEnter={() => setToggleTooltip("file")}
            onMouseLeave={() => setToggleTooltip("")}
          />
          {toggleTooltip === "file" && (
            <div className="w-[12.6%] absolute top-[310px]">
              <BigTooltip
                tip={
                  <>
                    <p>
                      In bin format, every particle has a link that is followed
                      by "VfxSystemDefinitionData", that link is similar to a
                      path.
                    </p>
                    <p>
                      Example:
                      "Characters/Riven/Skins/Skin0/Particles/Riven_Base_R_Buff_L_Hand"
                    </p>
                    <p className="text-xs relative top-2">Obs: That is the pattern for champions or mobs.</p>
                  </>
                }
              />
            </div>
          )}
        </span>
        <div
          className="flex items-center gap-1 flex-row grow justify-start overflow-hidden"
          id="input-container-file"
        >
          <input
            className="border border-[hsla(45,10%,59%,.4)] bg-transparent w-full outline-none px-1 py-0.5 text-sm"
            name="file"
            id="file"
            value={filePath}
            spellCheck="false"
            aria-label="file path"
            onChange={(e) => setFilePath(e.target.value)}
          />
          <label
            htmlFor="file"
            className="w-[20px] h-[20px] cursor-pointer bg-contain bg-no-repeat bg-[50%] bg-[url(./assets/images/icon-edit.png)]"
          ></label>
        </div>
      </div>
    </div>
  );
};

export default PathInputFields;

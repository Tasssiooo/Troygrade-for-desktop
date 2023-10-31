import { IoBug, IoLogoGithub, IoInformationCircle } from "react-icons/io5";
import { useContext, useState } from "react";
import { StatesContext } from "../../../../App";
import TooltipTop from "../../Tooltip/Tooltip-t";
import TooltipRight from "../../Tooltip/Tooltip-r";

const MenuBar = () => {
  const { setShowModal } = useContext(StatesContext);
  const [toggleTooltip, setToggleTooltip] = useState("");
  const appVersion = "0.0.2";

  return (
    <div
      role="menubar"
      className="relative left-[1px] bottom-[1px] flex gap-0.5 w-52 h-8 text-[#3c3c41] items-center text-[11px] tracking-[.1em]"
      style={{ borderTop: "thin solid #1e282d" }}
      id="menu-panel"
    >
      <button
        className="relative bg-[#010a13] cursor-pointer border-none p-0 outline-none"
        aria-label="about"
        id="about"
        onClick={() => setShowModal("About")}
      >
        <div
          className="menu-bar-btn"
          onMouseEnter={() => setToggleTooltip("about")}
          onMouseLeave={() => setToggleTooltip("")}
        >
          <IoInformationCircle
            role="img"
            className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
          />
        </div>
        {toggleTooltip === "about" && <TooltipRight tip={"About"} />}
      </button>
      <a
        href="https://github.com/Tasssiooo/Troygrade-for-desktop/issues"
        rel="noopener noreferrer"
        target="_blank"
        className="relative z-10 bg-[#010a13] cursor-pointer border-none p-0 outline-none"
        aria-label="report a bug"
        id="bug"
      >
        <div
          className="menu-bar-btn"
          onMouseEnter={() => setToggleTooltip("bug")}
          onMouseLeave={() => setToggleTooltip("")}
        >
          <IoBug
            role="img"
            className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
          />
        </div>
        {toggleTooltip === "bug" && <TooltipTop tip={"Report an issue"} />}
      </a>
      <div
        className="flex-[1] overflow-hidden text-center whitespace-nowrap"
        id="app-version"
      >
        {appVersion}
      </div>
      <a
        href="https://github.com/Tasssiooo/Troygrade-for-desktop"
        rel="noopener noreferrer"
        target="_blank"
        className="relative z-10 bg-[#010a13] cursor-pointer border-none p-0 outline-none"
        aria-label="Github repository"
        id="github"
      >
        <div
          className="menu-bar-btn"
          onMouseEnter={() => setToggleTooltip("github")}
          onMouseLeave={() => setToggleTooltip("")}
        >
          <IoLogoGithub
            role="img"
            className="w-7 h-5 py-0.5 outline-2 outline-none outline-[#141a21]"
          />
        </div>
        {toggleTooltip === "github" && <TooltipTop tip={"Github repository"} />}
      </a>
    </div>
  );
};

export default MenuBar;

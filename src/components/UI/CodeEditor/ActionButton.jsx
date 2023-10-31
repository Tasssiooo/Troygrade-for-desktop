import { useState } from "react";
import TooltipTop from "../Tooltip/Tooltip-t";

const ActionButton = ({ icon, ariaLabel, click, val, tooltipText, disabled }) => {
  const [toggleTooltip, setToggleTooltip] = useState("");
  return (
    <button
      className="bg-[#010a13] cursor-pointer border-none p-0 outline-none w-max"
      aria-label={ariaLabel}
      id="action-button"
      onClick={click}
      disabled={disabled}
    >
      <div
        className="menu-bar-btn hover:border"
        onMouseEnter={() => setToggleTooltip(val)}
        onMouseLeave={() => setToggleTooltip("")}
      >
        {icon}
      </div>
      { toggleTooltip === val && <TooltipTop tip={tooltipText} /> }
    </button>
  );
};

export default ActionButton;

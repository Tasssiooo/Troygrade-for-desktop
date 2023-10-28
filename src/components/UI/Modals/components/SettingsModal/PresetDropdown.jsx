import { useState } from "react";

const PresetDropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <div className="inline-block w-full" id="preset-dropdown">
      <div
        className="inline-flex flex-col relative cursor-pointer w-full text-[#a09b8c] leading-4 tracking-[0.025em]"
        id="ui-dropdown"
      >
        <div
          className="flex box-border pb-[10px] w-full pt-[7px] px-[5px] items-center bg-[rgba(30,35,40,0.5)] border border-transparent transition-all"
          id="ui-dropdown-current"
          role="button"
          onClick={() => setToggleDropdown((prev) => !prev)}
        >
          <div
            className="w-full overflow-hidden text-ellipsis whitespace-nowrap py-0.5"
            id="ui-dropdown-current-content"
          >
            Custom settings
          </div>
        </div>
        {toggleDropdown && (
          <div
            className="flex box-border w-full absolute top-full z-20 overflow-hidden bg-[rgba(30,35,40,0.5)] border border-transparent"
            id="ui-dropdown-options-container"
            style={{
              borderImage: "linear-gradient(to top, #695625, #463714) 1",
            }}
          >
            <ul
              className="list-none box-border min-w-full bg-[#010a13] h-full"
              id="dropdown-options"
            >
              <li className="py-2.5 px-[5px] hover:bg-[#2e2e2e] hover:text-[#f3f0e6]">
                Default settings
              </li>
              <li className="py-2.5 px-[5px] hover:bg-[#2e2e2e] hover:text-[#f3f0e6]">
                Custom settings
              </li>
              <li className="py-2.5 px-[5px] hover:bg-[#2e2e2e] hover:text-[#f3f0e6] text-center">
                +
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PresetDropdown;

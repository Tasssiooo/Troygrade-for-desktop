import React from "react";
import { useState, useContext, useEffect } from "react";
import RosterElement from "./RosterElement";
import { StatesContext } from "../../../App";

const RosterGroup = ({ id, name }) => {
  const { files } = useContext(StatesContext);
  const [toggle, setToggle] = useState(false);

  const close = {
    border: "4px solid transparent",
    borderTopColor: "#a09b8c",
    transform: "rotate(-90deg)",
    marginTop: "-1px",
  };
  const open = {
    border: "4px solid transparent",
    borderTopColor: "#a09b8c",
    transformOrigin: "50% 25%",
  };

  useEffect(() => {
    if (files.find((obj) => obj.type === id)) {
      setToggle(true);
    }
  }, [files]);

  return (
    <div id="roster-group">
      <div
        className="relative hover:bg-[#808080]"
        id="files"
        onClick={() => setToggle((prev) => !prev)}
      >
        <div className="h-6 cursor-pointer flex mb-1 text-[#a09b8c] hover:text-[#fffefb] bg-[rgba(1,10,19,0.45)] uppercase text-xs leading-4 tracking-[0.075em]">
          <div
            className="flex justify-end w-[18px] opacity-[1]"
            id="arrow-container"
          >
            <div
              className="flex items-center justify-center outline-none border-[0] bg-none min-w-[8px] min-h-[8px] box-border cursor-pointer"
              id="arrow"
            >
              <div
                className="mt-0.5"
                style={toggle ? open : close}
                id="arrow-toggle"
              ></div>
            </div>
          </div>
          <div className="flex w-full h-full overflow-hidden" id="group-name">
            <div className="relative flex items-center px-[9px] w-full box-border">
              <div
                className="flex-[1] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap"
                id="group-label"
              >
                <span>{name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toggle && files.map((obj, i) => obj.type === id && <RosterElement key={obj.fileName + `${i}`} file={obj} />)}
    </div>
  );
};

export default RosterGroup;

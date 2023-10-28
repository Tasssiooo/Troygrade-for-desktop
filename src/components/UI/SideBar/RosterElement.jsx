import { useContext } from "react";
import { StatesContext } from "@/App";
import troyIcon from "@/assets/images/heimerdinger_circle_old.png";
import binIcon from "@/assets/images/heimerdinger_circle_new.png";

const RosterElement = ({ file }) => {
  const { setActiveFile, setEditorText } = useContext(StatesContext);
  return (
    <div
      className="flex items-end relative cursor-pointer select-none hover:bg-[#5c5c5ca4]"
      id="roster-li"
      onClick={() => setActiveFile(file)}
    >
      <div className="flex items-center h-12 w-full box-border">
        <div
          className="w-8 h-8 flex-shrink-0 mr-0.5 ml-2 flex relative box-border pointer-events-none"
          id="file-icon"
        >
          <img
            src={file.type === "CONV_TROYBIN" ? troyIcon : binIcon}
            alt={file.type === "CONV_TROYBIN" ? "troybin icon" : "bin icon"}
            className="absolute overflow-hidden rounded-[50%] box-border w-full h-full bg-[#010a13] border-2 border-solid border-transparent"
            id="icon-image"
          />
          <div
            className="w-full h-full bg-roster-icon-ring absolute bg-cover"
            id="icon-ring"
          ></div>
        </div>
        <div
          className="overflow-hidden flex flex-col justify-center flex-[1] -mt-[1px] ml-1"
          id="li-name-wrapper"
        >
          <p
            className="text-[#5b5a56] overflow-hidden text-ellipsis whitespace-nowrap text-sm leading-5 tracking-[0.025em]"
            id="name"
          >
            {file.fileName}
          </p>
          <div className="flex flex-col overflow-hidden" id="file-status">
            <div className="inline-flex whitespace-nowrap flex-auto text-xs">
              <span className="overflow-hidden text-ellipsis whitespace-nowrap min-w-[20px] flex-initial relative">
                {file.type}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosterElement;

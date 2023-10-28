import { useContext, useState, useEffect } from "react";
import { StatesContext } from "../../../../App";
import { IoCheckmarkCircle } from "react-icons/io5";
import troyIcon from "../../../../assets/images/heimerdinger_circle_old.png";
import binIcon from "../../../../assets/images/heimerdinger_circle_new.png";

const RosterElement = ({ id, file }) => {
  const { setActiveFile, activeFile, files, setEditorText, checkedFiles, setCheckedFiles } =
    useContext(StatesContext);
  const [toggleCheckbox, setToggleCheckBox] = useState(false);

  useEffect(() => {
    if (toggleCheckbox) {
      setCheckedFiles((prev) => [...prev, id]);
    } else {
      const checked = [...checkedFiles];
      const filtered = checked.filter((str) => str !== id);
      setCheckedFiles(filtered);
    }
  }, [toggleCheckbox]);

  return (
    <div
      className="flex items-end relative cursor-pointer select-none transition-colors hover:bg-[#696969b7]"
      id="roster-li"
      style={{ backgroundColor: activeFile?.id === id && "#74747465" }}
      onClick={() => {
        setActiveFile(file);
        setEditorText(file?.content);
      }}
    >
      <div className="flex items-center h-12 w-full box-border">
        <div
          className="w-8 h-8 flex-shrink-0 mr-0.5 ml-2 flex relative box-border z-[999]"
          id="file-icon"
          role="checkbox"
          onClick={() => setToggleCheckBox((prev) => !prev)}
        >
          {toggleCheckbox && file.id === id && checkedFiles.length || checkedFiles.length === files.length ? (
            <IoCheckmarkCircle
              role="img"
              alt={file.type === "CONV_TROYBIN" ? "troybin icon" : "bin icon"}
              className="absolute overflow-hidden rounded-[50%] box-border w-full h-full text-[#c99c3f] border-2 border-solid border-transparent"
              id="icon-image"
            />
          ) : (
            <img
              src={file.type === "CONV_TROYBIN" ? troyIcon : binIcon}
              alt={file.type === "CONV_TROYBIN" ? "troybin icon" : "bin icon"}
              className="absolute overflow-hidden rounded-[50%] box-border w-full h-full bg-[#010a13] border-2 border-solid border-transparent"
              id="icon-image"
            />
          )}
          <div
            className="w-full h-full bg-roster-icon-ring absolute bg-cover"
            id="icon-ring"
          ></div>
        </div>
        <div
          className="overflow-hidden flex flex-col justify-center flex-[1] pr-3 -mt-[1px] ml-1"
          id="li-name-wrapper"
        >
          <p
            className="text-[#5b5a56] overflow-hidden text-ellipsis whitespace-nowrap text-sm leading-5 tracking-[0.025em]"
            id="name"
            style={{ color: activeFile?.id === id && "#cdbe91" }}
          >
            {file.fileName}
          </p>
          <div className="flex flex-col overflow-hidden" id="file-status">
            <div className="inline-flex whitespace-nowrap flex-auto text-xs">
              <span
                className="overflow-hidden text-ellipsis whitespace-nowrap min-w-[20px] flex-initial relative transition-colors"
                style={{ color: activeFile?.id === id && "#DBDBDB" }}
              >
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

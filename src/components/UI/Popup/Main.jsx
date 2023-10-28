import { useContext } from "react";
import { StatesContext } from "../../../App";

import { IoCloseOutline } from "react-icons/io5";

const Popup = () => {
  const { failedConverts, setFailedConverts } = useContext(StatesContext);

  return (
    <div
      className="fixed flex justify-center z-[1200] right-0 bottom-7 w-[816px] h-max transition-opacity"
      style={{
        opacity: failedConverts.length > 0 ? "1" : "0",
        visibility: failedConverts.length > 0 ? "visible" : "hidden",
      }}
    >
      <div
        className="w-[90%] border-[thin] bg-[#1e2328]"
        role="alert"
        id="error-popup"
      >
        <header className="flex flex-row justify-between items-start p-4 text-xl">
          <h2>
            Error: {failedConverts.length} File
            {failedConverts.length > 1 && "s"} failed
          </h2>
          <button
            aria-label="close popup"
            onClick={() => setFailedConverts([])}
          >
            <IoCloseOutline role="img" alt="close-icon" className="text-2xl" />
          </button>
        </header>
        <ul className="p-4 pt-0 max-h-[85px] overflow-y-auto" id="failed-files-list">
          {failedConverts.map((obj) => (
            <li className="py-1 border-b" key={obj.id}>
              <p>Failed file ID: {obj.id}</p>
              <p>Failed file Name: {obj.fileName}</p>
              <p>Failed file Type: {obj.type}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Popup;

import { useContext, useState, createContext } from "react";
import { StatesContext } from "../../../App";

import CloseDialogButton from "./components/CloseDialogButton";
import CurrentFileInfo from "./components/SettingsModal/CurrentFileInfo";
import SettingsSection from "./components/SettingsModal/SettingsSection";

export const IndexContext = createContext(null);

const SettingsModal = () => {
  const { showModal, checkedFiles, activeFile, files } = useContext(StatesContext);
  const [index, setIndex] = useState(0);

  const selectedFiles = [];

  checkedFiles.length > 0
    ? files.forEach((obj) => {
        checkedFiles.forEach((id) => {
          if (obj.id === id) {
            selectedFiles.push(obj);
          }
        });
      })
    : selectedFiles.push(activeFile);

  return (
    <div
      className="fixed z-[999] flex items-center justify-center inset-0 invisible opacity-0 transition-opacity"
      style={{
        opacity: showModal === "ConvertSettings" && "1",
        visibility: showModal === "ConvertSettings" && "visible",
      }}
    >
      <section
        className="bg-[#010a13] box-border flex flex-col w-[800px] border border-transparent shadow-dialog p-4"
        id="dialog"
        role="dialog"
      >
        <header className="flex items-center border-b-[thin] border-b-[#1e282d] h-10 mx-2">
          <h1 className="block text-[#f0e6d2] text-lg tracking-[.05em] leading-[22px] uppercase">
            Set files for conversion
          </h1>
          <CloseDialogButton position={"left-[67.5%]"} />
        </header>
        <div className="flex flex-row w-full p-2.5">
          <CurrentFileInfo files={selectedFiles} index={index} />
          <IndexContext.Provider value={{ index, setIndex, selectedFiles }}>
            <SettingsSection />
          </IndexContext.Provider>
        </div>
      </section>
    </div>
  );
};

export default SettingsModal;

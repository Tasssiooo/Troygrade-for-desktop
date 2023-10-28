import { useContext } from "react";
import CloseDialogButton from "./components/CloseDialogButton";
import DialogButton from "./components/DialogButton";
import { HandlersContext, StatesContext } from "../../../App";

const ConvertModal = () => {
  const { handleDeleteFiles } = useContext(HandlersContext);
  const { setShowModal, showModal, checkedFiles, activeFile } =
    useContext(StatesContext);
  return (
    <div
      className="fixed z-[999] flex items-center justify-center inset-0 invisible opacity-0 transition-opacity"
      style={{
        opacity: showModal === "Delete" && "1",
        visibility: showModal === "Delete" && "visible",
      }}
    >
      <section
        className="bg-[#010a13] box-border flex flex-col w-[500px] border border-transparent shadow-dialog p-4"
        id="dialog"
        role="dialog"
      >
        <header className="flex items-center border-b-[thin] border-b-[#1e282d] h-10 mx-2">
          <h1 className="block text-[#f0e6d2] text-lg tracking-[.05em] leading-[22px] uppercase">
            Convert files
          </h1>
          <CloseDialogButton position={"left-[71%]"} />
        </header>
        <div className="flex flex-col gap-2 mx-2 py-4">
          <p>
            You are about to delete{" "}
            {checkedFiles.length > 0
              ? checkedFiles.length + " files."
              : [activeFile?.id].length + " file."}
            <br />
          </p>
          <p>How do you want to proceed?</p>
        </div>
        <div className="relative top-[15px] flex flex-row justify-between mx-2">
          <DialogButton
            name={"Delete"}
            click={() => {
              handleDeleteFiles();
              setShowModal("");
            }}
          />
          <DialogButton name={"Cancel"} click={() => setShowModal("")} />
        </div>
      </section>
    </div>
  );
};

export default ConvertModal;

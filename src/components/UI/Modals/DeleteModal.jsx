import { useContext } from "react";
import CloseDialogButton from "./components/CloseDialogButton";
import DialogButton from "./components/DialogButton";
import { HandlersContext, StatesContext } from "../../../App";

const ConvertModal = () => {
  const { handleChangeDialogAccept } = useContext(HandlersContext);
  const { setDialogOpen, dialogOpen, checkedFiles, activeFile } = useContext(StatesContext);
  return (
    <div
      className="fixed z-[999] flex items-center justify-center inset-0 invisible opacity-0 transition-opacity"
      style={{
        opacity: dialogOpen && "1",
        visibility: dialogOpen && "visible",
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
          <CloseDialogButton click={() => setDialogOpen(false)} />
        </header>
        <div className="flex flex-col gap-2 mx-2 py-4">
          <p>
            You are about to convert { checkedFiles.length > 0 ? checkedFiles.length : [activeFile?.id].length } file.
            <br />
            You can use the default settings or set the settings yourself.
          </p>
          <p>How do you want to proceed?</p>
        </div>
        <div className="relative top-[15px] flex flex-row justify-between mx-2">
          <DialogButton
            name={"Use default settings"}
            click={() => {
              handleChangeDialogAccept("convert_default");
              setDialogOpen(false);
            }}
          />
          <DialogButton
            name={"Continue"}
            click={() => handleChangeDialogAccept("convert")}
          />
        </div>
      </section>
    </div>
  );
};

export default ConvertModal;

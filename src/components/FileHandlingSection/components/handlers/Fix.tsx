import { DefaultButton } from "@/components/Globals/DefaultButton";
import { Wrench } from "@/components/Globals/Icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Globals/Tooltip";
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalTitle,
  ModalTrigger,
} from "@/components/Globals/Modal";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { continueModal } from "@/redux/reducers/appSlice";

import { handleConvertFiles } from "@/lib/handlers";

export default function Fix() {
  const active = useAppSelector((state) => state.app.activeFile);

  const dispatch = useAppDispatch();

  function handleDefaultSettings() {
    handleConvertFiles([active!], [active!.id]);
  }

  return (
    <>
      <Modal>
        <TooltipProvider delayDuration={250}>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModalTrigger asChild>
                <DefaultButton
                  disabled={
                    active && active.type === "CONV_TROYBIN" ? false : true
                  }
                  size="icon"
                >
                  <Wrench />
                </DefaultButton>
              </ModalTrigger>
            </TooltipTrigger>
            <TooltipContent className="right-2.5">Convert</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {/* Modal content */}
        <ModalContent>
          <ModalTitle>Convert files</ModalTitle>
          <div className="pointer-events-none">
            <p>You are about to convert 1 file.</p>
            <p>
              You can use the default settings or set the settings yourself.
            </p>
            <p className="my-2">How do you want to proceed?</p>
          </div>
          <div className="flex flex-row justify-between space-x-2 relative top-5">
            <ModalClose asChild>
              <DefaultButton onClick={handleDefaultSettings}>
                Use default settings
              </DefaultButton>
            </ModalClose>
            <ModalClose asChild>
              <DefaultButton
                onClick={() =>
                  dispatch(continueModal({ show: true, method: "single" }))
                }
              >
                Continue
              </DefaultButton>
            </ModalClose>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}

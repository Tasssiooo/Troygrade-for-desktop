import { DefaultButton } from "@/components/Globals/DefaultButton";
import { TrashBin } from "@/components/Globals/Icons";
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalTitle,
  ModalTrigger,
} from "@/components/Globals/Modal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Globals/Tooltip";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { activeFile, files } from "@/redux/reducers/appSlice";

export default function Delete() {
  const active = useAppSelector((state) => state.app.activeFile);
  const currentFiles = useAppSelector((state) => state.app.files);

  const dispatch = useAppDispatch();

  function handleDelete() {
    const resolved = currentFiles.filter((entry) => entry.id !== active?.id);
    dispatch(files([...resolved]));

    if (currentFiles.length > 0) {
      dispatch(activeFile(currentFiles[currentFiles.length - 1]));
    }
    dispatch(activeFile(undefined));
  }

  return (
    <Modal>
      {/* Tooltip */}
      <TooltipProvider delayDuration={250}>
        <Tooltip>
          <TooltipTrigger asChild>
            <ModalTrigger asChild>
              {/* Trigger (the actual action button) */}
              <DefaultButton disabled={active ? false : true} size="icon">
                <TrashBin />
              </DefaultButton>
            </ModalTrigger>
          </TooltipTrigger>
          <TooltipContent className="right-2.5">Delete</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      {/* Modal content */}
      <ModalContent className="w-96">
        <ModalTitle>Are you sure?</ModalTitle>
        <div className="pointer-events-none">
          <p>You are about to delete 1 file.</p>
          <p>How do you want to proceed?</p>
        </div>
        <div className="flex flex-row justify-between space-x-2 relative top-5">
          <ModalClose asChild>
            <DefaultButton>Cancel</DefaultButton>
          </ModalClose>
          <ModalClose asChild>
            <DefaultButton onClick={handleDelete}>Delete</DefaultButton>
          </ModalClose>
        </div>
      </ModalContent>
    </Modal>
  );
}

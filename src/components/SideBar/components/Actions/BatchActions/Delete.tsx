import { DefaultButton } from "@/components/Globals/DefaultButton";
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalTitle,
  ModalTrigger,
} from "@/components/Globals/Modal";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { activeFile, files, selectedFiles } from "@/redux/reducers/appSlice";

export default function Delete() {
  const selected = useAppSelector((state) => state.app.selectedFiles);
  const currentFiles = useAppSelector((state) => state.app.files);
  const active = useAppSelector((state) => state.app.activeFile);

  const dispatch = useAppDispatch();

  function handleDeleteBatch() {
    const resolved = currentFiles.filter(
      (entry, i) => entry.id !== selected[i]
    );

    selected.forEach((id) => {
      if (id === active?.id) {
        dispatch(activeFile(undefined));
      }
    });

    dispatch(selectedFiles([]));
    dispatch(files(resolved));
  }

  return (
    <Modal>
      <ModalTrigger className="size-full text-left">Delete</ModalTrigger>
      <ModalContent className="w-96">
        <ModalTitle>Are you sure?</ModalTitle>
        <div className="pointer-events-none">
          <p>You are about to delete {selected.length} files.</p>
          <p>How do you want to proceed?</p>
        </div>
        <div className="flex flex-row justify-between space-x-2 relative top-5">
          <ModalClose asChild>
            <DefaultButton>Cancel</DefaultButton>
          </ModalClose>
          <ModalClose asChild>
            <DefaultButton onClick={handleDeleteBatch}>Delete</DefaultButton>
          </ModalClose>
        </div>
      </ModalContent>
    </Modal>
  );
}

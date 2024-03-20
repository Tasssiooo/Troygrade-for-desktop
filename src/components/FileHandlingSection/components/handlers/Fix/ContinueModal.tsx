import { Modal, ModalContent, ModalTitle } from "@/components/Globals/Modal";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { continueModal } from "@/redux/reducers/appSlice";
import PathInput from "./components/PathInput";
import Footer from "./components/Footer";
import CheckboxInput from "./components/CheckboxInput";
import PresetsDropdown from "./components/PresetsDropdown";

export default function ContinueModal() {
  const isOpen = useAppSelector((state) => state.app.continueModal);

  const dispatch = useAppDispatch();

  return (
    <Modal open={isOpen} onOpenChange={(e) => dispatch(continueModal(e))}>
      <ModalContent>
        <ModalTitle>Set files for conversion</ModalTitle>
        <div className="grid grid-flow-col">
          <div className="pointer-events-non min-w-64 space-y-2">
            <div className="text-[#cdbe91] w-full text-lg bg-[#cdbe9136] text-left h-auto min-h-[24px] leading-4 border-l-[3px] border-l-[#c89b3c] p-1 indent-1">
              <span>Current file</span>
            </div>
            <ul className="text-sm space-y-1.5">
              <li>ID:</li>
              <li>Name:</li>
              <li>Type:</li>
              <li>Position: 1/1</li>
            </ul>
          </div>
          <div role="separator" className="w-[1px] h-full bg-border mx-2"></div>
          <div className="pointer-events-none min-w-max space-y-3">
            <PresetsDropdown />
            <div className="flex flex-col space-y-2 text-sm pointer-events-auto">
              <PathInput label="Assets path" />
              <PathInput label="File path" />
            </div>
            <div className="flex flex-col justify-center space-y-1 text-sm pointer-events-auto">
              <CheckboxInput label="Set this configuration for all files" />
              <CheckboxInput label='Only show property names in "Unknown Hashes" section' />
              <CheckboxInput label="Update file types used in properties with assets" />
            </div>
            <Footer />
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}

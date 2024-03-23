import { Modal, ModalContent, ModalTitle } from "@/components/Globals/Modal";
import { Checkbox } from "@/components/Globals/Checkbox";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { continueModal } from "@/redux/reducers/appSlice";

import PathInput from "./components/PathInput";
import Footer from "./components/Footer";
import CheckboxInput from "./components/CheckboxInput";

import { Settings } from "@/types/types";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const preset = {
  assetsPath: "ASSETS/Characters/[character name]/Skins/[skin]/Particles",
  filePath: "Characters/[character name]/Skins/[skin number]/Particles",
  namesOnly: false,
  updateFileTypes: true,
};

export default function ContinueModal() {
  const [index, setIndex] = useState(0);
  const [forAll, setForAll] = useState(false);

  const config = useAppSelector((state) => state.app.continueModal);
  const files = useAppSelector((state) => state.app.files);
  const activeFile = useAppSelector((state) => state.app.activeFile);
  const selected = useAppSelector((state) => state.app.selectedFiles);

  const filesIDs =
    config.method === "batch" ? selected : [activeFile ? activeFile.id : ""];

  const currentID = filesIDs[index];
  const currentFile = files.find((entry) => entry.id === currentID);

  const dispatch = useAppDispatch();

  const [settings, setSettings] = useState<Settings[]>([preset]);

  useEffect(() => {
    setSettings(filesIDs.map(() => preset));
  }, [config]);

  return (
    <Modal
      open={config.show}
      onOpenChange={(e) => {
        setIndex(0);
        setSettings(filesIDs.map(() => preset));
        dispatch(continueModal({ ...config, show: e }));
      }}
    >
      <ModalContent>
        <ModalTitle>Set files for conversion</ModalTitle>
        <div className="grid grid-flow-col">
          <div className="pointer-events-non min-w-64 space-y-2">
            <div className="text-[#cdbe91] w-full text-lg bg-[#cdbe9136] text-left h-auto min-h-[24px] leading-4 border-l-[3px] border-l-[#c89b3c] p-1 indent-1">
              <span>Current file</span>
            </div>
            <ul className="text-sm space-y-1.5">
              <li>ID: {currentFile?.id}</li>
              <li>Name: {currentFile?.name}</li>
              <li>Type: {currentFile?.type}</li>
              <li>
                Position: {index + 1}/{filesIDs?.length}
              </li>
            </ul>
          </div>
          <div role="separator" className="w-[1px] h-full bg-border mx-2"></div>
          <div className="pointer-events-none min-w-max space-y-3">
            <div className="flex flex-col space-y-2 text-sm pointer-events-auto">
              <PathInput
                index={index}
                value={settings[index]?.assetsPath}
                setSettings={setSettings}
                label="Assets path"
              />
              <PathInput
                index={index}
                value={settings[index]?.filePath}
                setSettings={setSettings}
                label="File path"
              />
            </div>
            <div className="flex flex-col justify-center space-y-1 text-sm pointer-events-auto">
              <label
                htmlFor="all"
                className={cn("group", config.method === "single" && "hidden")}
              >
                <Checkbox
                  id="all"
                  className="mr-1"
                  onCheckedChange={() => setForAll((prev) => !prev)}
                />
                Set this configuration for all files
              </label>
              <CheckboxInput
                index={index}
                value={settings[index]?.namesOnly}
                setSettings={setSettings}
                label='Only show property names in "Unknown Hashes" section'
              />
              <CheckboxInput
                index={index}
                value={settings[index]?.updateFileTypes}
                setSettings={setSettings}
                label="Update file types used in properties with assets"
              />
            </div>
            <Footer
              ids={filesIDs}
              settings={settings}
              isForAll={forAll}
              index={{ index, setIndex }}
            />
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}

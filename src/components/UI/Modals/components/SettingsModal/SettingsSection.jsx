import { useEffect, useState } from "react";

import PathInputFields from "./PathInputFields";
import PresetDropdown from "./PresetDropdown";
import Checkboxes from "./Checkboxes";
import ButtonField from "./ButtonsField";

const SettingsSection = () => {
  /* Set paths */
  const [assetsPath, setAssetsPath] = useState("path/to/assets");
  const [filePath, setFilePath] = useState("path/to/file");
  /* Toggle checkboxes */
  const [forAll, setForAll] = useState(false);
  const [updateTypes, setUpdateTypes] = useState(true);
  const [showNames, setShowNames] = useState(false);
  /* Preset selected in the dropdown list */
  const [selectedPreset, setSelectedPreset] = useState({
    id: 2,
    preset: "Custom path",
    paths: {
      assets: "path/to/assets",
      file: "path/to/file",
    },
  });
  /* Presets array */
  const [presets, setPresets] = useState(
    JSON.parse(localStorage.getItem("presets")) || [
      {
        id: 1,
        preset: "Default path",
        paths: {
          assets: "ASSETS/Characters/[character name]/Skins/[skin]/Particles",
          file: "Characters/[character name]/Skins/[skin number]/Particles",
        },
      },
      {
        id: 2,
        preset: "Custom path",
        paths: {
          assets: "path/to/assets",
          file: "path/to/file",
        },
      },
    ]
  );
  /* useEffect to store created presets in cache */
  useEffect(() => {
    localStorage.setItem("presets", JSON.stringify(presets));
  }, [presets]);

  return (
    <section className="px-2 w-3/5">
      <div className="flex flex-col">
        <h2 className="text-xs border-b border-[#cca859] text-[#eddec1] pb-0.5 mb-1">
          Choose a preset
        </h2>
        <PresetDropdown
          presets={presets}
          setPresets={setPresets}
          selectedPreset={selectedPreset}
          setSelectedPreset={setSelectedPreset}
          setFilePath={setFilePath}
          setAssetsPath={setAssetsPath}
        />
        <PathInputFields
          filePath={filePath}
          setFilePath={setFilePath}
          assetsPath={assetsPath}
          setAssetsPath={setAssetsPath}
        />
        <Checkboxes
          forAll={forAll}
          setForAll={setForAll}
          updateTypes={updateTypes}
          setUpdateTypes={setUpdateTypes}
          showNames={showNames}
          setShowNames={setShowNames}
        />
        <ButtonField
          forAll={forAll}
          setForAll={setForAll}
          updateTypes={updateTypes}
          setUpdateTypes={setUpdateTypes}
          showNames={showNames}
          setShowNames={setShowNames}
          assetsPath={assetsPath}
          filePath={filePath}
          selectedPreset={selectedPreset}
        />
      </div>
    </section>
  );
};

export default SettingsSection;

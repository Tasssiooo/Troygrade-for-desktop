import { IoArrowBack, IoArrowForward, IoBuild } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { StatesContext } from "../../../../../App";
import { IndexContext } from "../../SettingsModal";

import Button from "./Button";
import Warning from "./Warning";

const ButtonsField = ({
  forAll,
  setForAll,
  updateTypes,
  setUpdateTypes,
  showNames,
  setShowNames,
  assetsPath,
  filePath,
  selectedPreset,
}) => {
  const { index, setIndex, selectedFiles } = useContext(IndexContext);
  const { setFileSettings, checkedFiles } = useContext(StatesContext);
  const [newSettings, setNewSettings] = useState([]);
  const [warning, setWarning] = useState();
  console.log(newSettings);

  const pushSettings = () => {
    const setting = {
      id: index,
      assetsPath,
      filePath,
      namesOnly: showNames,
      settingsPreset: selectedPreset.preset,
      updateFileTypes: updateTypes,
    };

    if (!newSettings[index]) {
      setNewSettings((prev) => [...prev, setting]);
    } else {
      const newArr = newSettings.map((obj) => {
        if (obj.id === setting.id) {
          return setting;
        } else {
          return obj;
        }
      });
      setNewSettings(newArr);
    }
  };

  const handleStartConverting = () => {
    if (forAll) {
      const allSettings = [];
      const setting = {
        assetsPath,
        filePath,
        namesOnly: showNames,
        settingsPreset: selectedPreset.preset,
        updateFileTypes: updateTypes,
      };
      let i = 0;
      while (i < checkedFiles.length) {
        allSettings.push(setting);
        i++;
      }
      setFileSettings(allSettings);
      setForAll(false);
    } else if (index === selectedFiles.length - 1 || selectedFiles.length === 1) {
      pushSettings();
    } else {
      const warningContainer = document.getElementById("file-settings-warning");
      setWarning(warningContainer);
      setTimeout(() => {
        setWarning(null);
      }, 2600);
    }
  };

  useEffect(() => {
    if (newSettings.length === selectedFiles.length) {
      setFileSettings(newSettings);
      setNewSettings([]);
      setIndex(0);
    }
  }, [newSettings]);

  return (
    <div className="flex flex-col w-full mt-4">
      <div
        className="flex flex-row justify-between"
        id="back-next-buttons-container"
      >
        <Button
          icon={
            <>
              <span>
                <IoArrowBack />
              </span>
              <span>Back</span>
            </>
          }
          disabled={index === 0 || forAll ? true : false}
          click={() => setIndex((prev) => prev - 1)}
        />
        <Button
          icon={
            <>
              <span>
                <IoBuild />
              </span>
              <span>Start converting</span>
            </>
          }
          click={handleStartConverting}
        />
        <Button
          icon={
            <>
              <span>Next</span>
              <span>
                <IoArrowForward />
              </span>
            </>
          }
          disabled={index + 1 === selectedFiles.length || forAll ? true : false}
          click={() => {
            pushSettings();
            setIndex((prev) => prev + 1);
          }}
        />
        {
          warning && createPortal(<Warning state={warning} />, warning)
        }
      </div>
    </div>
  );
};

export default ButtonsField;

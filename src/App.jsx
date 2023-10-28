import { WebviewWindow } from "@tauri-apps/api/window";
import { useState, useEffect, createContext } from "react";
import { v4 as uuid } from "uuid";

import { SplashArtAmount } from "./components/UI/SplashArt/Main";

import TroybinConverter from "./components/TroybinConverter/Main";
import MigrateConvertedTroybin from "./components/TroybinMigrationTool/Main";

import WindowBar from "./components/UI/WindowBar/Main";
import EditorSection from "./components/UI/CodeEditor/EditorSection";
import Sidebar from "./components/UI/SideBar/Sidebar";
import Popup from "./components/UI/Popup/Main";

import ConvertModal from "./components/UI/Modals/ConvertModal";
import DeleteModal from "./components/UI/Modals/DeleteModal";
import AboutModal from "./components/UI/Modals/AboutModal";
import HelpModal from "./components/UI/Modals/HelpModal";
import SettingsModal from "./components/UI/Modals/SettingsModal";

export const HandlersContext = createContext(null);
export const StatesContext = createContext(null);

const App = () => {
  const [editorText, setEditorText] = useState("");
  const [activeFile, setActiveFile] = useState();
  const [failedConverts, setFailedConverts] = useState([]);
  const [search, setSearch] = useState("");
  const [files, setFiles] = useState([]);
  const [fileSettings, setFileSettings] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [checkedFiles, setCheckedFiles] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const [showModal, setShowModal] = useState("");

  //Disable context menu on right click
  document.body.oncontextmenu = (e) => e.preventDefault();

  useEffect(() => {
    if (selectedFiles.length > 0 || fileSettings.length > 0) {
      handleConvertFiles();
    }
  }, [selectedFiles, fileSettings]);

  const handleChangeDialogAccept = (action) => {
    const settings = [];

    switch (action) {
      case "convert":
        setShowModal("ConvertSettings");
        break;
      case "convert_default":
        const chosenFiles =
          checkedFiles.length > 0 ? checkedFiles : [activeFile.id];
        for (let i = 0; i < chosenFiles.length; i += 1) {
          const setting = {
            assetsPath:
              "ASSETS/Characters/[character name]/Skins/[skin]/Particles",
            filePath:
              "Characters/[character name]/Skins/[skin number]/Particles",
            namesOnly: false,
            settingsPreset: "Default",
            updateFileTypes: true,
          };

          settings.push(setting);
        }
        setFileSettings(settings);
        break;
    }
  };

  const chosenFile = activeFile;

  const handleConvertFiles = () => {
    const oldSelectedFiles =
      selectedFiles.length > 0
        ? selectedFiles
        : checkedFiles.length > 0
        ? checkedFiles
        : [chosenFile.id];

    const failedFiles = [];
    const filesNew = [];

    let activeFile;

    for (let i = 0; i < files.length; i += 1) {
      let file = files[i];

      let convertedEntry;
      let removeOriginal = false;

      for (let j = 0; j < oldSelectedFiles.length; j += 1) {
        if (file.id === oldSelectedFiles[j]) {
          if (file.type === "CONV_TROYBIN") {
            file.fileName = files[i].fileName.replace("_Converted", "");
            try {
              const fileContentConverted = MigrateConvertedTroybin(
                fileSettings[j].assetsPath,
                fileSettings[j].filePath,
                file,
                fileSettings[j].namesOnly,
                fileSettings[j].updateFileTypes
              );

              if (fileContentConverted !== null) {
                convertedEntry = {
                  id: uuid(),
                  fileName: `${file.fileName}_Migrated`,
                  content: fileContentConverted,
                  type: "MIG_BIN",
                  besen: file.besen,
                  originalFileID: file.id,
                };
              }

              if (oldSelectedFiles.length === 1) {
                activeFile = convertedEntry;
              }
            } catch (err) {
              console.log(err);
              failedFiles.push({
                id: file.id,
                error: err,
                fileName: files[i].fileName,
                type: file.type,
              });
            }
          } else if (file.type === "TROYBIN") {
            try {
              const fileContentConverted = TroybinConverter(file.content);

              convertedEntry = {
                id: uuid(),
                fileName: `${file.fileName}_Converted`,
                content: fileContentConverted,
                type: "CONV_TROYBIN",
                besen: file.besen,
                originalFileID: file.id,
              };
              removeOriginal = true;

              if (oldSelectedFiles.length === 1) {
                activeFile = convertedEntry;
              }
            } catch (err) {
              console.log(err);
              failedFiles.push({
                id: file.id,
                error: err,
                fileName: file.fileName,
                type: file.type,
              });
            }
          } else {
            failedFiles.push({
              id: file.id,
              error: "File type can not be converted",
              fileName: file.fileName,
              type: file.type,
            });
          }
        }
      }

      if (!removeOriginal) {
        filesNew.push(file);
      }

      if (convertedEntry !== undefined) {
        filesNew.push(convertedEntry);
      }
    }

    setFailedConverts(failedFiles);
    setFiles(filesNew);
    setFileSettings([]);
    setSelectedFiles([]);
    setCheckedFiles([]);
    setShowModal("");
    if (oldSelectedFiles.length === 1 && activeFile !== undefined) {
      setActiveFile(activeFile);
      setEditorText(activeFile.content);
      setShowEditor(false);
    }
  };

  const handleDeleteFiles = () => {
    const oldSelectedFiles =
      checkedFiles.length > 0 ? checkedFiles : [chosenFile.id];

    let newFiles = [];

    files.forEach((file) => {
      let deleteFile = false;
      oldSelectedFiles.forEach((f) => {
        if (file.id === f) {
          deleteFile = true;
        }
      });
      if (deleteFile === false) {
        newFiles.push(file);
      }
    });

    setFiles(newFiles);
    setActiveFile([]);
    setSelectedFiles([]);
    setCheckedFiles([]);
  };

  const handleLoadFiles = (fileInput) => {
    const troybinFilesIDs = [];

    for (let i = 0; i < fileInput?.length; i += 1) {
      const input = fileInput[i];
      const reader = new FileReader();

      let fileType = "";

      if (input.type === "text/plain") {
        fileType = "TXT";
        reader.readAsText(input);
      } else {
        fileType = "TROYBIN";
        reader.readAsArrayBuffer(input);
      }

      reader.onload = (e) => {
        const updatedFiles = files;
        const content = e.target?.result;
        const id = uuid();
        const besen = Math.floor(Math.random() * SplashArtAmount);
        let fileName;
        let type;

        if (fileType === "TXT") {
          fileName = input.name.replace(".txt", "");

          if (content[0] === "[") {
            type = "CONV_TROYBIN";
          } else if (content[0] === '"') {
            type = "MIG_BIN";
          } else if (content[0] === "#") {
            type = "CONV_BIN";
          } else {
            type = "UNKNOWN_FILE_TYPE";
          }
        } else {
          fileName = input.name.replace(".troybin", "");
          type = "TROYBIN";

          troybinFilesIDs.push(id);
        }

        if (type !== "UNKNOWN_FILE_TYPE") {
          const file = {
            id,
            fileName,
            content,
            type,
            besen,
          };

          updatedFiles.push(file);

          if (i === fileInput.length - 1 && troybinFilesIDs.length > 0) {
            setFiles(updatedFiles);
            setSelectedFiles(troybinFilesIDs);
          } else {
            setFiles(updatedFiles);
          }

          if (fileInput.length === 1) {
            setActiveFile(file);
            setShowEditor(false);
          }
        } else {
          console.log("File Type is unknown");
        }
      };
    }
  };

  const handleSaveChanges = () => {
    const index = files.findIndex((obj) => obj.id === activeFile.id);
    const toChange = files[index];
    toChange.content = editorText;
  };

  const handleOpenNewWindow = () => {
    const fileContent = activeFile?.content;
    const blob = new Blob(
      [`Particle: ${activeFile.fileName}\r\n\n\n${fileContent}`],
      { type: "text/plain" }
    );
    const link = URL.createObjectURL(blob);
    window.open(link);
  };

  return (
    <HandlersContext.Provider
      value={{
        handleLoadFiles,
        handleConvertFiles,
        handleOpenNewWindow,
        handleChangeDialogAccept,
        handleSaveChanges,
        handleDeleteFiles,
      }}
    >
      <StatesContext.Provider
        value={{
          files,
          editorText,
          activeFile,
          showModal,
          checkedFiles,
          failedConverts,
          search,
          setEditorText,
          setActiveFile,
          setShowModal,
          setSelectedFiles,
          setCheckedFiles,
          setFailedConverts,
          setSearch,
          setFileSettings
        }}
      >
        <WindowBar />
        <Sidebar />
        <EditorSection />
        <ConvertModal />
        <DeleteModal />
        <AboutModal />
        <SettingsModal />
        <Popup />
      </StatesContext.Provider>
    </HandlersContext.Provider>
  );
};

export default App;

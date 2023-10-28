import { useState, useEffect, createContext } from "react";
import { v4 as uuid } from "uuid";

import { SplashArtAmount } from "@/components/UI/SplashArt/Main";

import TroybinConverter from "./components/TroybinConverter/Main";
import MigrateConvertedTroybin from "./components/TroybinMigrationTool/Main";
import BinFileReader from "./components/BinFileReader/Main";

import EditorSection from "./components/UI/code-editor/EditorSection";
import Sidebar from "./components/UI/sidebar/Sidebar";

export const HandlersContext = createContext({});
export const StatesContext = createContext({});

const App = () => {
  const [editorText, setEditorText] = useState("");
  const [activeFile, setActiveFile] = useState();
  const [dialogOpen, setDialogOpen] = useState();
  const [failedConverts, setFailedConverts] = useState([]);
  const [fileContentDirty, setFileContentDirty] = useState();
  const [files, setFiles] = useState([]);
  const [fileSettings, setFileSettings] = useState([]);
  const [filter, setFilter] = useState();
  const [fixesToApply, setFixesToApply] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showEditor, setShowEditor] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState("");
  const [showMenu, setShowMenu] = useState();
  const [showModal, setShowModal] = useState("");

  useEffect(() => {
    if(selectedFiles.length > 0) {
      handleConvertFiles();
    }
  }, [selectedFiles])
  

  /*const handleChangeDialogAccept = (action, value) => {
    const { selectedFiles } = this.state;
    this.setState({ dialogOpen: value }, () => {
      const settings = [];

      switch (action) {
        case "convert":
          this.setState({ showModal: "convert" });
          break;
        case "convert_default":
          for (let i = 0; i < selectedFiles.length; i += 1) {
            const setting = {
              assetsPath: "Data/Particles",
              filePath: "Data/Particles",
              namesOnly: false,
              settingsPreset: "Default",
              updateFileTypes: true,
            };

            settings.push(setting);
          }

          this.setState(
            {
              fileSettings: settings,
            },
            () => this.handleConvertFiles()
          );
          break;
        case "download":
          this.handleDownloadFiles();
          break;
        case "delete":
          this.handleDeleteFiles();
          break;
        case "fix":
          this.handleFixFiles();
          break;
        case "save":
          this.handleSaveFile();
          break;
        default:
          break;
      }
    });
  };

  const handleChangeDialogVisible = (value) => {
    this.setState({ dialogOpen: value });
    this.handleChangeShowMenu({ anchor: null, menu: "" });
  };

  const handleChangeDrawer = () => {
    this.setState({ failedConverts: [] });
  };

  const handleChangeFileActive = (file) => {
    this.setState({ activeFile: file, showEditor: false });
  };

  const handleChangeFilesSelected = (e, fileID, selectedFileIndex) => {
    const { selectedFiles } = this.state;
    const dataSource = [...selectedFiles];
    const event = e || window.event;

    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }

    if (selectedFileIndex === -1) {
      dataSource.push(fileID);
    } else {
      dataSource.splice(selectedFileIndex, 1);
    }
    this.setState({ selectedFiles: dataSource });
  };

  const handleChangeFilesSelectedAll = () => {
    const { files, filter, search, selectedFiles } = this.state;
    const filteredFiles = getDataSource(files, filter, search);

    if (filteredFiles.length === selectedFiles.length) {
      this.setState({ selectedFiles: [] });
    } else {
      const result = [];

      for (let i = 0; i < filteredFiles.length; i += 1) {
        result.push(filteredFiles[i].id);
      }

      this.setState({ selectedFiles: result });
    }
  };*/

  const handleChangeFilter = (filter) => {
    setFilter(filter);
    setSelectedFiles([]);
  };

  /*const handleChangeLoading = (val) => {
    this.setState({ loading: val });
  };

  const handleChangeSearch = (searchNew) => {
    const { search } = this.state;

    if (searchNew !== search) {
      this.setState({ search: searchNew, selectedFiles: [] });
    }
  };

  const handleChangeSelectedFix = (val) => {
    this.setState({ fixesToApply: val });
  };

  const handleChangeShowInfoModal = (value) => {
    this.setState({ showInfoModal: value });
    this.handleChangeShowMenu({ anchor: null, menu: "" });
  };*/

  const handleChangeShowMenu = (event) => {
    setShowMenu(event);
  };

  const handleChangeShowModal = (value) => {
    setShowModal(value);
  };

  /*
  const handleChangeTheme = () => {
    const { handleChangeTheme } = this.props;

    handleChangeTheme();
    this.handleChangeShowMenu({ anchor: null, menu: "" });
  };
  */

  const handleClickImage = (value) => {
    if (activeFile) {
      setFileContentDirty(activeFile.content);
      setShowEditor(value);
    }
  };

  const handleFixFiles = () => {
    const oldSelectedFiles = selectedFiles;
    const failedFiles = [];
    const filesNew = [];
    let activeFile;

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];

      if (file.type === "CONV_BIN") {
        let convertedEntry;

        for (let j = 0; j < oldSelectedFiles.length; j += 1) {
          if (file.id === oldSelectedFiles[j]) {
            file.fileName = files[i].fileName
              .replace("_Migrated", "")
              .replace("_Fixed", "");

            try {
              let fileContent = file.content;

              for (let k = 0; k < fixesToApply.length; k += 1) {
                const updatedBin = BinFileReader(fixesToApply[k], fileContent);

                fileContent = updatedBin.result;
              }

              convertedEntry = {
                id: uuid(),
                fileName: `${file.fileName}_Fixed`,
                content: fileContent,
                type: "CONV_BIN",
                besen: file.besen,
                originalFileID: file.id,
              };

              activeFile = convertedEntry;
            } catch (err) {
              console.log(err);
              failedFiles.push({
                id: file.id,
                error: err,
                fileName: files[i].fileName,
                type: file.type,
              });
            }
          }
        }

        if (convertedEntry !== undefined) {
          filesNew.push(convertedEntry);
        }
      }

      filesNew.push(file);
    }

    setFailedConverts(failedFiles);
    setFiles(filesNew);
    setSelectedFiles([]);
    setShowModal("");
    if (oldSelectedFiles.length === 1 && activeFile !== undefined) {
      setActiveFile(activeFile);
      setShowEditor(false);
    }
  };

  const handleCombineFiles = () => {
    /* const { files, selectedFiles } = this.state;
    const oldSelectedFiles = selectedFiles;
    const failedFiles = [];
    const filesNew = [];
    let activeFile;

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];

      if (file.type === "CONV_BIN") {
        let convertedEntry;

        for (let j = 0; j < oldSelectedFiles.length; j += 1) {
          if (file.id === oldSelectedFiles[j]) {
            file.fileName = files[i].fileName.replace("_Migrated", "");

            try {
              const test = BinFileReader("listFix", file);
              console.log(test);

              if (fileContentCombined !== -1) {
                convertedEntry = {
                  id: uuid(),
                  fileName: `${fileSettings.file.fileName}_Combined`,
                  content: fileContentCombined,
                  type: "CONV_BIN",
                  besen: file.besen,
                  originalFileID: file.id
                };
              }

              activeFile = convertedEntry;
            } catch (err) {
              console.log(err);
              failedFiles.push({
                id: file.id,
                error: err,
                fileName: files[i].fileName,
                type: file.type
              });
            }
          }
        }

        if (convertedEntry !== undefined) {
          filesNew.push(convertedEntry);
        }
      } else {
        failedFiles.push({
          id: file.id,
          error:
            "Target file must be a converted .bin file. Use ritobin to convert .bin files to .txt",
          fileName: file.fileName,
          type: file.type
        });
      }
    } */
    return selectedFiles;
  };

  const handleConvertFiles = () => {
    const oldSelectedFiles = [...selectedFiles];
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
            console.log("I am here!")
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

    setFailedConverts(failedConverts);
    setFiles(filesNew);
    setFileSettings([]);
    setLoading(false);
    setSelectedFiles([]);
    setShowModal("");
    if (oldSelectedFiles.length === 1 && activeFile !== undefined) {
      setActiveFile(activeFile);
      setShowEditor(false);
    }
  };

  const handleDeleteFiles = () => {
    const oldSelectedFiles = [...selectedFiles];
    const newFiles = [];
    let hasActiveFile = false;

    for (let i = 0; i < files.length; i += 1) {
      let deleteFile = false;

      for (let j = 0; j < oldSelectedFiles.length; j += 1) {
        if (files[i].id === oldSelectedFiles[j]) {
          if (activeFile && files[i].id === activeFile.id) {
            hasActiveFile = true;
          }

          deleteFile = true;
        }
      }

      if (deleteFile === false) {
        newFiles.push(files[i]);
      }
    }

    setFiles(newFiles);
    setSelectedFiles([]);

    if (hasActiveFile) {
      setActiveFile(undefined);
      setShowEditor(false);
    }
  };

  const handleDownloadFiles = () => {
    const oldSelectedFiles = [...selectedFiles];
    const downloadFiles = [];

    for (let i = 0; i < files.length; i += 1) {
      for (let j = 0; j < oldSelectedFiles.length; j += 1) {
        if (files[i].id === oldSelectedFiles[j]) {
          const fileToDownload = files[i];

          const blob = new Blob([fileToDownload.content], {
            type: "text/plain",
          });
          const downloadLink = URL.createObjectURL(blob);

          let link = document.createElement("a");
          link.href = downloadLink;
          link.download = `${fileToDownload.fileName}.${
            fileToDownload.type === "TROYBIN" ? "troybin" : "txt"
          }`;
          link.target = "_blank";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          //link = null;

          downloadFiles.push(files[i]);
        }
      }
    }
    setSelectedFiles([]);
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
            handleChangeFilter(0);
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

  const handleSaveFile = () => {
    const fileToUpdate = selectedFiles[0];
    const filesNew = [];

    let activeFile;

    for (let i = 0; i < files.length; i += 1) {
      const file = files[i];

      if (file.id === fileToUpdate) {
        let newFile = file;
        newFile.content = fileContentDirty;
        activeFile = newFile;

        filesNew.push(newFile);
      } else {
        filesNew.push(file);
      }
    }

    setActiveFile(activeFile);
    setShowEditor(false);
    setFiles(filesNew);
    setLoading(false), setShowModal("");
  };

  const handleSaveDirty = (event) => {
    setFileContentDirty(event.target.value);
  };

  const handleStartConvert = (settings) => {
    setFileSettings(settings);
    setLoading(true);
    handleConvertFiles();
  };

  const handleOpenNewTab = () => {
    const fileIndex = files.findIndex((file) => file.id === selectedFiles[0]);
    const fileContent = files[fileIndex].content;

    if (fileIndex !== -1) {
      const blob = new Blob([fileContent], { type: "text/plain" });
      const downloadLink = URL.createObjectURL(blob);

      window.open(downloadLink);
    }

    handleChangeShowMenu({ anchor: null, menu: "" });
  };

  return (
    <HandlersContext.Provider value={{ handleLoadFiles, handleStartConvert, handleConvertFiles }}>
      <StatesContext.Provider
        value={{ files, editorText, activeFile, setEditorText, setActiveFile }}
      >
        <Sidebar />
        <EditorSection />
      </StatesContext.Provider>
    </HandlersContext.Provider>
  );
};

export default App;

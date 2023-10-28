import CreateBin from "./MigrateSteps/CreateBin";
import ReadTroybin from "./MigrateSteps/ReadTroybin";
import UpdateEmitters from "./MigrateSteps/UpdateEmitters";
import WriteBin from "./MigrateSteps/WriteBin";

const MigrateConvertedTroybin = (
  defaultAssetsPath,
  defaultFilePath,
  file,
  namesOnly,
  updateFileTypes
) => {
  const troybinStructure = ReadTroybin(
    defaultAssetsPath,
    namesOnly,
    file.content,
    file.fileName,
    updateFileTypes
  );

  const updatedEmitters = UpdateEmitters(troybinStructure.emitters);
  const updatedTroybin = {
    emitters: updatedEmitters,
    fileName: troybinStructure.fileName,
    system: troybinStructure.system,
    unknown: troybinStructure.unknown
  };

  const binStructure = CreateBin(updatedTroybin, defaultFilePath);

  const finalBin = WriteBin(binStructure, defaultFilePath);

  return finalBin;
};

export default MigrateConvertedTroybin;

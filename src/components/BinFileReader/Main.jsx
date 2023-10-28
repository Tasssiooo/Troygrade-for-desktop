import ApplyBinFix from "./components/ApplyBinFix";
import ReadBin from "./components/ReadBin";

const BinFileReader = (changes, fileContent) => {
  const getBinMetaData = ReadBin(fileContent);
  const applyFix = ApplyBinFix(changes, fileContent, getBinMetaData);

  return applyFix;
};

export default BinFileReader;

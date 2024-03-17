import SideBar from "./components/SideBar";
import FileHandlingSection from "./components/FileHandlingSection";

import { useToast } from "./components/Globals/use-toast";

import { useAppSelector } from "./redux/hooks";
import { useEffect } from "react";

export default function App() {
  const { toast } = useToast();

  const failedFiles = useAppSelector((state) => state.app.failedFiles);

  useEffect(() => {
    if (failedFiles.length > 0) {
      failedFiles.forEach((entry) => {
        toast({
          title: `Error: ${entry.name} - ${entry.type}`,
          description: `${entry.error}`,
        });
      });
    }
  }, [failedFiles]);

  return (
    <>
      <SideBar />
      <FileHandlingSection />
    </>
  );
}

import SideBar from "../components/SideBar";
import FileHandlingSection from "../components/FileHandlingSection";
import ContinueModal from "../components/FileHandlingSection/components/handlers/Fix/ContinueModal";

import { toast } from "sonner";

import { useAppSelector } from "../redux/hooks";
import { useEffect } from "react";

export default function App() {
  const failedFiles = useAppSelector((state) => state.app.failedFiles);

  useEffect(() => {
    if (failedFiles.length > 0) {
      failedFiles.forEach((entry) => {
        toast(`Error: ${entry.name} - ${entry.type}`, {
          description: `${entry.error}`,
          action: {
            label: "Close",
            onClick: () => console.log("Close"),
          },
        });
      });
    }
  }, [failedFiles]);

  return (
    <>
      <SideBar />
      <FileHandlingSection />
      <ContinueModal />
    </>
  );
}

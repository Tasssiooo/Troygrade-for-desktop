import { DefaultButton } from "@/components/Globals/DefaultButton";
import { FloppyDisk } from "@/components/Globals/Icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Globals/Tooltip";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { files } from "@/redux/reducers/appSlice";

export default function SaveChanges() {
  const active = useAppSelector((state) => state.app.activeFile);
  const entries = useAppSelector((state) => state.app.files);
  const changes = useAppSelector((state) => state.app.editorChanges);

  const dispatch = useAppDispatch();

  function handleSaveChanges() {
    if (changes) {
      const resolvedFiles = entries.map((entry) =>
        entry.id === active?.id ? { ...entry, content: changes } : entry
      );

      localStorage.setItem("editor-code", changes);

      dispatch(files(resolvedFiles));
    }
  }

  return (
    <TooltipProvider delayDuration={250}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DefaultButton
            disabled={active ? false : true}
            size="icon"
            onClick={handleSaveChanges}
          >
            <FloppyDisk />
          </DefaultButton>
        </TooltipTrigger>
        <TooltipContent className="right-2.5">Save changes</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

import Delete from "./handlers/Delete";
import SaveFile from "./handlers/SaveFile";
import SaveChanges from "./handlers/SaveChanges";
import Expand from "./handlers/Expand";
import Fix from "./handlers/Fix";

import { useAppSelector } from "@/redux/hooks";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Globals/Tooltip";

export default function Handlers() {
  const active = useAppSelector((state) => state.app.activeFile);
  return (
    <div className="flex flex-row items-center justify-between w-full h-[65px] px-4">
      <TooltipProvider delayDuration={250}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div>
              <span className="text-sm text-foreground-highlight relative top-1.5 truncate inline-block max-w-96">
                {active?.name}
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent>{active?.name}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="flex flex-row justify-end space-x-2.5 w-full">
        <Delete />
        <SaveFile />
        <Fix />
        <SaveChanges />
        <Expand />
      </div>
    </div>
  );
}

import * as Toolbar from "@radix-ui/react-toolbar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Globals/Tooltip";

import { open } from "@tauri-apps/api/dialog";

export default function ActionButtons() {
  async function openExplorer() {
    const selected = await open({
      multiple: true,
      filters: [
        {
          name: "Troybin",
          extensions: ["troybin", "troy"],
        },
      ],
      title: "Open .troybin file",
    });
    console.log(selected);
  }

  return (
    <div className="flex flex-row items-center">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Toolbar.Button asChild>
              <button type="button" className="action search"></button>
            </Toolbar.Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={0} side="bottom">
            Filter
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Toolbar.Button asChild>
              <button
                type="button"
                className="action add"
                onClick={openExplorer}
              ></button>
            </Toolbar.Button>
          </TooltipTrigger>
          <TooltipContent sideOffset={0} side="bottom">
            Add files
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

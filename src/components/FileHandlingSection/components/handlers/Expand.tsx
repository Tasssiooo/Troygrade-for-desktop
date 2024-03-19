import { DefaultButton } from "@/components/Globals/DefaultButton";
import { External } from "@/components/Globals/Icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Globals/Tooltip";

import { useAppSelector } from "@/redux/hooks";

import { WebviewWindow } from "@tauri-apps/api/window";

export default function Expand() {
  const active = useAppSelector((state) => state.app.activeFile);

  function handleOpenCodeEditor() {
    new WebviewWindow(active!.id, {
      title: "Troygrade: code editor",
      minWidth: 512,
      minHeight: 256,
      decorations: false,
      fullscreen: false,
      url: "#/code",
    });
  }

  return (
    <TooltipProvider delayDuration={250}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DefaultButton
            disabled={active ? false : true}
            size="icon"
            onClick={handleOpenCodeEditor}
          >
            <External />
          </DefaultButton>
        </TooltipTrigger>
        <TooltipContent className="right-2.5 z-[99]">
          Expand code editor
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

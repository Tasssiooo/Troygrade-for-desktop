import { DefaultButton } from "@/components/Globals/DefaultButton";
import {
  Download,
  External,
  FloppyDisk,
  TrashBin,
  Wrench,
} from "@/components/Globals/Icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Globals/Tooltip";

import { useAppDispatch } from "@/redux/hooks";

import { codeWindow } from "@/redux/reducers/handleSlice";

export default function Handlers() {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full h-[65px] px-4 pt-3.5">
      <div className="flex flex-row justify-end space-x-2.5 w-full">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DefaultButton size="icon">
                <TrashBin />
              </DefaultButton>
            </TooltipTrigger>
            <TooltipContent className="right-2.5">Delete</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DefaultButton size="icon">
                <Download />
              </DefaultButton>
            </TooltipTrigger>
            <TooltipContent className="right-2.5">Download</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DefaultButton size="icon">
                <Wrench />
              </DefaultButton>
            </TooltipTrigger>
            <TooltipContent className="right-2.5">Fix</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DefaultButton size="icon">
                <FloppyDisk />
              </DefaultButton>
            </TooltipTrigger>
            <TooltipContent className="right-2.5">Save</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <DefaultButton size="icon" onClick={() => dispatch(codeWindow())}>
                <External />
              </DefaultButton>
            </TooltipTrigger>
            <TooltipContent className="right-2.5">About</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

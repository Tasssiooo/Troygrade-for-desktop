import { DefaultButton } from "@/components/Globals/DefaultButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Globals/Tooltip";
import { InfoSign } from "@/components/Globals/Icons";

import LinkButtons from "./Footer/LinkButtons";
import AppVersion from "./Footer/AppVersion";

export default function Footer() {
  return (
    <div className="flex flex-row w-full h-8">
      <LinkButtons />
      <AppVersion />
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DefaultButton size="icon">
              <InfoSign />
            </DefaultButton>
          </TooltipTrigger>
          <TooltipContent>About</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

import { DefaultButton } from "@/components/Globals/DefaultButton";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/Globals/Tooltip";
import { GitHubIssues, GitHubLogo } from "@/components/Globals/Icons";

export default function LinkButtons() {
  return (
    <div className="flex flex-row space-x-1">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://github.com/Tasssiooo/Troygrade-for-desktop/issues"
              rel="external noopener noreferrer"
              target="_blank"
              className="inline-flex"
            >
              <DefaultButton size="icon">
                <GitHubIssues />
              </DefaultButton>
            </a>
          </TooltipTrigger>
          <TooltipContent>Report an issue</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://github.com/Tasssiooo/Troygrade-for-desktop"
              rel="external noopener noreferrer"
              target="_blank"
              className="inline-flex"
            >
              <DefaultButton size="icon">
                <GitHubLogo />
              </DefaultButton>
            </a>
          </TooltipTrigger>
          <TooltipContent>Github Repository</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

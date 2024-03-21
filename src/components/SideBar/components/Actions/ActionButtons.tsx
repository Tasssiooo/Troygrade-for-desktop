import * as Toolbar from "@radix-ui/react-toolbar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Globals/Tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/Globals/DropdownMenu";
import { ThreeDotsVertical } from "@/components/Globals/Icons";

import Delete from "./BatchActions/Delete";

import { handleLoadFiles } from "@/lib/handlers";
import { cn } from "@/lib/utils";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { continueModal } from "@/redux/reducers/appSlice";

import { useEffect, useState } from "react";

export default function ActionButtons() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const selected = useAppSelector((state) => state.app.selectedFiles);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selected.length < 1) {
      setOpenDropdown(false);
    }
  }, [selected]);

  return (
    <>
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
                <label htmlFor="explorer" role="button" className="action add">
                  <input
                    id="explorer"
                    type="file"
                    accept=".txt, .troybin"
                    multiple
                    hidden
                    onChange={(e) => handleLoadFiles(e.target.files!)}
                  />
                </label>
              </Toolbar.Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={0} side="bottom">
              Add files
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DropdownMenu
          open={openDropdown}
          onOpenChange={() => setOpenDropdown((prev) => !prev)}
        >
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toolbar.Button asChild>
                  <DropdownMenuTrigger
                    className={cn(
                      "mx-1.5",
                      selected.length > 1 ? "block" : "hidden"
                    )}
                  >
                    <ThreeDotsVertical />
                  </DropdownMenuTrigger>
                </Toolbar.Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={0} side="bottom">
                Batch actions
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <Delete />
            </DropdownMenuItem>
            <DropdownMenuItem>Save</DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() =>
                dispatch(continueModal({ show: true, method: "batch" }))
              }
            >
              Convert
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

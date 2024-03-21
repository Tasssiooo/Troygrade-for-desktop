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
import { continueModal, selectedFiles } from "@/redux/reducers/appSlice";

import { open } from "@tauri-apps/api/dialog";
import { writeTextFile, BaseDirectory, readTextFile } from "@tauri-apps/api/fs";

import { useEffect, useState } from "react";

import { toast } from "sonner";

export default function ActionButtons() {

  const [openDropdown, setOpenDropdown] = useState(false);

  const selected = useAppSelector((state) => state.app.selectedFiles);
  const files = useAppSelector((state) => state.app.files);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selected.length < 1) {
      setOpenDropdown(false);
    }
  }, [selected]);

  async function handleSaveBatch() {
    try {
      const selectDir = await open({
        directory: true,
        multiple: false,
        title: `Select a directory to save the files`,
      });

      if (typeof selectDir === "string") {
        selected.forEach(async (id) => {
          try {
            const file = files.find((entry) => entry.id === id);

            await writeTextFile(`${selectDir}/${file?.name}.txt`, file?.content, {
              dir: BaseDirectory.AppConfig,
            });

            const isThereContent = await readTextFile(
              `${selectDir}/${file?.name}.txt`,
              {
                dir: BaseDirectory.AppConfig,
              }
            );

            if (isThereContent) {
              toast(`Done!`, {
                description: `The file "${file?.name}" has been created and written successfully!`,
                action: {
                  label: "Close",
                  onClick: () => console.log("Close"),
                },
              });
            }
          } catch (error: any) {
            toast(`Something went wrong while writing some of the files!`, {
              description: `Error: ${error.message}`,
              action: {
                label: "Close",
                onClick: () => console.log("Close"),
              },
            });
          }
        });
      }

      dispatch(selectedFiles([]));
    } catch (error: any) {
      toast(`Something went wrong!`, {
        description: `Error: ${error.message}`,
        action: {
          label: "Close",
          onClick: () => console.log("Close"),
        },
      });
    }
  }

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
            <DropdownMenuItem onSelect={handleSaveBatch}>Save</DropdownMenuItem>
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

import { DefaultButton } from "@/components/Globals/DefaultButton";
import { Download } from "@/components/Globals/Icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Globals/Tooltip";

import { useAppSelector } from "@/redux/hooks";

import { save } from "@tauri-apps/api/dialog";
import { readTextFile, writeTextFile, BaseDirectory } from "@tauri-apps/api/fs";

import { useToast } from "@/components/Globals/use-toast";

export default function SaveFile() {
  const { toast } = useToast();

  const active = useAppSelector((state) => state.app.activeFile);

  async function handleSaveFile() {
    try {
      const outfile = await save({
        title: "Save .txt file",
        defaultPath: `${active?.name}.txt`,
        filters: [
          {
            name: "Text",
            extensions: ["txt"],
          },
        ],
      });

      if (outfile) {
        await writeTextFile(outfile, active?.content, {
          dir: BaseDirectory.AppConfig,
        });

        const isThereContent = await readTextFile(outfile, {
          dir: BaseDirectory.AppConfig,
        });

        if (isThereContent) {
          toast({
            title: `Done!`,
            description: `The file "${active?.name}" has been created and written successfully!`,
          });
        }
      }
    } catch (error: any) {
      toast({
        title: `Something went wrong!`,
        description: `Error: ${error.message}`,
      });
    }
  }

  return (
    <TooltipProvider delayDuration={250}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DefaultButton
            disabled={active ? false : true}
            size="icon"
            onClick={handleSaveFile}
          >
            <Download />
          </DefaultButton>
        </TooltipTrigger>
        <TooltipContent className="right-2.5">Save file</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

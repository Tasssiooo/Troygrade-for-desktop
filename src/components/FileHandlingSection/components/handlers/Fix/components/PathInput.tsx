import { Input } from "@/components/Globals/Input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Globals/Tooltip";

import { Settings } from "@/types/types";
import { ChangeEvent } from "react";

interface Props {
  index: number;
  label: string;
  value: string;
  setSettings: (s: any) => void;
}

export default function PathInput({ index, label, value, setSettings }: Props) {
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setSettings((prev: Settings[]) => {
      const arr = [...prev];
      const obj = { ...arr[index] };

      if (label === "Assets path") {
        obj.assetsPath = e.target.value;
      } else {
        obj.filePath = e.target.value;
      }

      return arr.map((s, i) => (i === index ? obj : s));
    });
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center space-x-1 mb-0.5">
        <span className="pointer-events-none">{label}</span>
        <TooltipProvider delayDuration={250}>
          <Tooltip>
            <TooltipTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"
                />
              </svg>
            </TooltipTrigger>
            <TooltipContent sideOffset={80} className="right-[170px] text-left">
              {label === "Assets path" ? (
                <>
                  <p>
                    In bin format, this will be the path for textures, models,
                    etc.
                  </p>
                  <p>
                    Example:
                    "ASSETS/Characters/Riven/Skins/Base/Particles/Flare-Rainbow_white_10.dds"
                  </p>
                  <p className="text-xs mt-1.5">
                    Obs: That is the pattern for champions or mobs.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    In bin format, every particle has a link that is followed by
                    "VfxSystemDefinitionData", that link is similar to a path.
                  </p>
                  <p>
                    Example:
                    "Characters/Riven/Skins/Skin0/Particles/Riven_Base_R_Buff_L_Hand"
                  </p>
                  <p className="text-xs mt-1.5">
                    Obs: That is the pattern for champions or mobs.
                  </p>
                </>
              )}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex flex-row space-x-1 items-center">
        <Input type="text" value={value} onChange={handleOnChange} id={label} />
        <label
          htmlFor={label}
          className="w-[20px] h-[20px] bg-contain bg-no-repeat bg-[url(./assets/images/icon-edit.png)]"
        ></label>
      </div>
    </div>
  );
}

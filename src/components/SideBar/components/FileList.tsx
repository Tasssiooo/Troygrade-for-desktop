import { Entry } from "@/types/types";

import {
  Roster,
  RosterContent,
  RosterItem,
  RosterTrigger,
} from "@/components/Globals/Roster";

import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  selectedFiles,
  activeFile,
} from "@/redux/reducers/appSlice";

import oldIcon from "@/assets/images/heimerdinger_circle_old.png";
import newIcon from "@/assets/images/heimerdinger_circle_new.png";

export default function FileList() {
  const [activeRosterItems, setActiveRosterItems] = useState<string[]>([]);

  const files = useAppSelector((state) => state.app.files);
  const active = useAppSelector((state) => state.app.activeFile);
  const selected = useAppSelector((state) => state.app.selectedFiles);

  const dispatch = useAppDispatch();

  function handleSelectItem(id: string) {
    if (selected.includes(id)) {
      const resolved = selected.filter((v) => v !== id);
      dispatch(selectedFiles([...resolved]));
    } else {
      dispatch(selectedFiles([...selected, id]));
    }
  }

  function handleSetActiveFile(entry: Entry) {
    dispatch(activeFile(entry));
  }

  useEffect(() => {
    const areThereTroys = files.find((entry) => entry.type === "CONV_TROYBIN");
    const areThereBins = files.find((entry) => entry.type === "MIG_BIN");

    if (areThereTroys) {
      const resolved = !activeRosterItems.includes("troybins")
        ? [...activeRosterItems, "troybins"]
        : activeRosterItems;
      setActiveRosterItems(resolved);
    }

    if (areThereBins) {
      const resolved = !activeRosterItems.includes("bins")
        ? [...activeRosterItems, "bins"]
        : activeRosterItems;
      setActiveRosterItems(resolved);
    }
  }, [files]);

  return (
    <div className="w-full h-[calc(100%-9.2rem)]">
      <Roster
        type="multiple"
        value={activeRosterItems}
        onValueChange={(e) => setActiveRosterItems(e)}
      >
        <RosterItem value="troybins">
          <RosterTrigger>Troybins</RosterTrigger>
          <RosterContent>
            <ul>
              {files?.length ? (
                files.map(
                  (entry) =>
                    entry.type === "CONV_TROYBIN" && (
                      <li
                        key={entry.id}
                        className={cn(
                          "flex flex-row items-center *:h-12 hover:bg-neutral-500/50",
                          active?.id === entry.id && "bg-[#74747465]"
                        )}
                        onClick={() => handleSetActiveFile(entry)}
                      >
                        <div
                          className="flex justify-center items-center size-12"
                          role="checkbox"
                          onClick={() => handleSelectItem(entry.id)}
                        >
                          <div className="size-9 flex-shrink-0 flex relative">
                            {selected.includes(entry.id) ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#c99c3f"
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.997-6l7.07-7.071l-1.413-1.414l-5.657 5.657l-2.829-2.829l-1.414 1.414z"
                                />
                              </svg>
                            ) : (
                              <img
                                src={oldIcon}
                                alt="CONV_TROYBIN Icon"
                                className="absolute overflow-hidden rounded-[50%] box-border size-full bg-[#010a13] border-2 border-solid border-transparent"
                              />
                            )}
                            <div className="bg-[url(./assets/images/object_s_sprite.png)] bg-cover absolute size-full"></div>
                          </div>
                        </div>
                        <div className="flex flex-col w-40 py-1.5">
                          <span
                            className={cn(
                              "text-foreground-muted truncate leading-5 tracking-[0.025em]",
                              active?.id === entry.id && "text-foreground-highlight"
                            )}
                          >
                            {entry.name}
                          </span>
                          <span
                            className={cn(
                              "text-xs",
                              active?.id === entry.id &&
                                "text-foreground-accent"
                            )}
                          >
                            {entry.type.replace("_", ". ")}
                          </span>
                        </div>
                      </li>
                    )
                )
              ) : (
                <></>
              )}
            </ul>
          </RosterContent>
        </RosterItem>
        <RosterItem value="bins">
          <RosterTrigger>Bins</RosterTrigger>
          <RosterContent>
            <ul>
              {files?.length ? (
                files.map(
                  (entry) =>
                    entry.type === "MIG_BIN" && (
                      <li
                        key={entry.id}
                        className={cn(
                          "flex flex-row items-center *:h-12 hover:bg-neutral-500/50",
                          active?.id === entry.id && "bg-[#74747465]"
                        )}
                        onClick={() => handleSetActiveFile(entry)}
                      >
                        <div
                          className="flex justify-center items-center size-12"
                          role="checkbox"
                          onClick={() => handleSelectItem(entry.id)}
                        >
                          <div className="size-9 flex-shrink-0 flex relative">
                            {selected.includes(entry.id) ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#c99c3f"
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.997-6l7.07-7.071l-1.413-1.414l-5.657 5.657l-2.829-2.829l-1.414 1.414z"
                                />
                              </svg>
                            ) : (
                              <img
                                src={newIcon}
                                alt="MIG_BIN Icon"
                                className="absolute overflow-hidden rounded-[50%] box-border size-full bg-[#010a13] border-2 border-solid border-transparent"
                              />
                            )}
                            <div className="bg-[url(./assets/images/object_s_sprite.png)] bg-cover absolute size-full"></div>
                          </div>
                        </div>
                        <div className="flex flex-col w-40 py-1.5">
                          <span
                            className={cn(
                              "text-foreground-muted truncate leading-5 tracking-[0.025em]",
                              active?.id === entry.id && "text-foreground-highlight"
                            )}
                          >
                            {entry.name}
                          </span>
                          <span
                            className={cn(
                              "text-xs",
                              active?.id === entry.id &&
                                "text-foreground-accent"
                            )}
                          >
                            {entry.type.replace("_", ". ")}
                          </span>
                        </div>
                      </li>
                    )
                )
              ) : (
                <></>
              )}
            </ul>
          </RosterContent>
        </RosterItem>
      </Roster>
    </div>
  );
}

import * as Toolbar from "@radix-ui/react-toolbar";
import Tooltip from "@/components/Globals/Tooltip";

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
      title: "Open .troybin file"
    });
  }

  return (
    <div className="flex flex-row items-center">
      <Tooltip tip="Filter" orientation="bottom">
        <Toolbar.Button asChild>
          <button type="button" className="action search"></button>
        </Toolbar.Button>
      </Tooltip>
      <Tooltip tip="Add files" orientation="bottom">
        <Toolbar.Button asChild>
          <button type="button" className="action add" onClick={openExplorer}></button>
        </Toolbar.Button>
      </Tooltip>
    </div>
  );
}

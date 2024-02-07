import * as Toolbar from "@radix-ui/react-toolbar";
import Tooltip from "@/components/Globals/Tooltip";

export default function ActionButtons() {
  return (
    <div className="flex flex-row items-center">
      <Tooltip tip="Filter" orientation="bottom">
        <Toolbar.Button asChild>
          <button type="button" className="action search"></button>
        </Toolbar.Button>
      </Tooltip>
      <Tooltip tip="Add files" orientation="bottom">
        <Toolbar.Button asChild>
          <button type="button" className="action add"></button>
        </Toolbar.Button>
      </Tooltip>
    </div>
  );
}

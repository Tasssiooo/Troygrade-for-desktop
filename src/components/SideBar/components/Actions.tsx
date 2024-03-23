import * as Toolbar from "@radix-ui/react-toolbar";

import ActionButtons from "./Actions/ActionButtons";
import ActionToggle from "./Actions/ActionToggle";

import "./Actions/styles.css";

export default function Actions() {
  return (
    <Toolbar.Root className="flex flex-row items-center justify-between w-full h-8 pl-1.5">
      <ActionToggle />
      <ActionButtons />
    </Toolbar.Root>
  );
}

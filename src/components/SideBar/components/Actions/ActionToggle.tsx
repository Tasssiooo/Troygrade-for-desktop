import * as Toolbar from "@radix-ui/react-toolbar";

import { useState } from "react";

export default function ActionToggle() {
  const [isAllSelected, setisAllSelected] = useState(false);
  return (
    <Toolbar.ToggleGroup
      type="single"
      onValueChange={() => setisAllSelected((prev) => !prev)}
      className="h-full"
    >
      <Toolbar.ToggleItem
        className="inline-flex flex-row h-full gap-x-1 items-center text-button-foreground hover:text-button-foreground-accent text-sm group"
        value="_"
      >
        <div
          className={isAllSelected ? "toggleImage on" : "toggleImage off"}
        ></div>
        Select all
      </Toolbar.ToggleItem>
    </Toolbar.ToggleGroup>
  );
}

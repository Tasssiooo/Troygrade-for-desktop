import * as Toolbar from "@radix-ui/react-toolbar";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectedFiles } from "@/redux/reducers/appSlice";

export default function ActionToggle() {
  const files = useAppSelector((state) => state.app.files);
  const selected = useAppSelector((state) => state.app.selectedFiles);

  const dispatch = useAppDispatch();

  function handleSelectAll() {
    if (selected.length !== files.length) {
      const resolved = files.map((entry) => entry.id);
      dispatch(selectedFiles(resolved));
    } else {
      dispatch(selectedFiles([]));
    }
  }

  return (
    <Toolbar.ToggleGroup
      type="single"
      onValueChange={handleSelectAll}
      className="h-full"
    >
      <Toolbar.ToggleItem
        className="inline-flex flex-row h-full gap-x-1 items-center text-button-foreground hover:text-button-foreground-accent text-sm group"
        value="_"
      >
        <div
          className={
            files.length > 0 && selected.length === files.length
              ? "toggleImage on"
              : "toggleImage off"
          }
        ></div>
        Select all
      </Toolbar.ToggleItem>
    </Toolbar.ToggleGroup>
  );
}

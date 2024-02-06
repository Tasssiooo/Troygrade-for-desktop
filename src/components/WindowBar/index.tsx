import { appWindow } from "@tauri-apps/api/window";

import "./index.css";

export default function WindowBar() {
  return (
    <div
      data-tauri-drag-region
      className="absolute top-0 left-0 z-[99] flex flex-row justify-end w-full h-8"
    >
      <div className="relative z-0 top-1 right-2.5">
        <div className="flex flex-row space-x-4">
          <button
            className="controller help"
            aria-label="Help"
            onClick={() => {}}
          ></button>
          <button
            className="controller hide"
            aria-label="Hide window"
            onClick={() => appWindow.minimize()}
          ></button>
          <button
            className="controller close"
            aria-label="Close window"
            onClick={() => appWindow.close()}
          ></button>
        </div>
      </div>
    </div>
  );
}

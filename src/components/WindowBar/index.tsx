import { appWindow } from "@tauri-apps/api/window";

import "./index.css";
import CodeToolbar from "./components/CodeToolbar";

export default function WindowBar() {
  const frag = window.location.hash;
  return (
    <div
      data-tauri-drag-region
      className="absolute top-0 left-0 z-[99] flex flex-row justify-end w-full h-8"
    >
      <div className="flex relative z-0 top-1 px-2.5">
        {frag === "#/code" ? <CodeToolbar /> : <></>}
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

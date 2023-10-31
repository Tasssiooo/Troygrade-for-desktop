import { appWindow, WebviewWindow } from "@tauri-apps/api/window";

const WindowBar = () => {
  const createHelpWindow = () => {
    const helpWebview = new WebviewWindow("help", {
      title: 'How to use',
      url: "#/help",
      center: true,
      focus: true,
      minWidth: 640,
      minHeight: 420
    });
    helpWebview.once("tauri://error", function (e) {
      // an error occurred during webview window creation
      console.log(e);
    });
  };
  return (
    <nav
      data-tauri-drag-region
      className="flex justify-end fixed z-[9999999] w-full right-0 h-8 box-border border-t border-t-[#a07a30]"
    >
      <div className="relative z-0 right-[10px] top-1 w-max">
        <div className="flex flex-row pointer-events-auto">
          <button
            className="bg-[#a09b8c] hover:bg-[#f8f6ed] cursor-pointer h-[18px] w-[18px] mr-4"
            aria-label="Help"
            id="help"
            onClick={createHelpWindow}
          ></button>
          <button
            className="bg-[#a09b8c] hover:bg-[#f8f6ed] cursor-pointer h-[18px] w-[18px] mr-4"
            aria-label="Hide window"
            id="hide"
            onClick={() => appWindow.minimize()}
          ></button>
          <button
            className="bg-[#a09b8c] hover:bg-[#f8f6ed] cursor-pointer h-[18px] w-[18px]"
            aria-label="Close window"
            id="close"
            onClick={() => appWindow.close()}
          ></button>
        </div>
      </div>
    </nav>
  );
};

export default WindowBar;

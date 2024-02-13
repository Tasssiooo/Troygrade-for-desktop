import { WebviewWindow } from "@tauri-apps/api/window";

export function handleOpenCodeEditor() {
  const codeWebviewWindow = new WebviewWindow("code-editor", {
    title: "Troygrade: code editor",
    minWidth: 512,
    minHeight: 256,
    decorations: false,
    fullscreen: false,
    url: "#/code",
  });
  codeWebviewWindow.once("tauri://error", function (e) {
    // an error occurred during webview window creation
    console.log(e);
  });
  console.log(window.location);
}

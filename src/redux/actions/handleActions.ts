import { WebviewWindow } from "@tauri-apps/api/window";

export function handleOpenCodeEditor() {
  const codeWebviewWindow = new WebviewWindow("code-editor", {
    title: "Editing...",
    url: "index.html",
  });
  codeWebviewWindow.once("tauri://error", function (e) {
    // an error occurred during webview window creation
    console.log(e);
  });
}

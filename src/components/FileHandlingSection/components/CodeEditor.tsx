import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { editorChanges } from "@/redux/reducers/appSlice";

import Editor from "@monaco-editor/react";

import KillerskinsLogo from "@/assets/images/splasharts/Killerskins_Logo.png";

export default function CodeEditor() {
  const hasFile = useAppSelector((state) => state.app.activeFile);

  const dispatch = useAppDispatch();

  if (!hasFile) {
    return (
      <img
        src={KillerskinsLogo}
        alt="Killerskins logomark"
        className="object-cover w-full h-[86.7%] opacity-80 border-t border-t-foreground-highlight/50"
      />
    );
  }
  return (
    <Editor
      width="99.7%"
      height="413px"
      theme="vs-dark"
      language={hasFile.type === "CONV_TROYBIN" ? "ini" : "python"}
      onChange={(e) => e && dispatch(editorChanges(e))}
      value={hasFile.content}
      className="border-t border-t-foreground-highlight/50"
    />
  );
}

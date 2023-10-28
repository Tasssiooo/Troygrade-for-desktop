import { useContext } from "react";
import { Content, StatesContext } from "@/App";
import getSplashArt from "../SplashArt/Main";
import EditorActionsSection from "./EditorActionsSection";

const CodeEditorArea = () => {
  const { activeFile, setEditorText } = useContext(StatesContext);
  const art = getSplashArt(activeFile);
  let content: any = activeFile?.content;
  return (
    <div
      className="absolute flex flex-col w-[600px] h-[400px]"
      id="editor-container"
      style={{ zIndex: content ? "50" : "40" }}
    >
      <EditorActionsSection />
      <section className="relative z-10 h-[340px]" id="editor-container">
        <textarea
          disabled={content ? false : true}
          aria-label="Code editor"
          className="relative top-1 left-[7px] w-[570px] h-[303px] z-0 resize-none outline-none border-none p-2 bg-transparent text-sm font-sans text-white"
          name="text-editor"
          value={content}
          onChange={(e) => setEditorText(e.target.value)}
          spellCheck={false}
          id="code"
          style={{ display: content ? "block" : "none" }}
        ></textarea>
        <img
          src={art}
          width={587}
          height={329}
          alt="splash art"
          className="absolute -z-50 top-1 left-[7px] filter blur-[1px] opacity-50 rounded-b-xl"
        />
      </section>
    </div>
  );
};

export default CodeEditorArea;

import { useContext } from "react";
import { StatesContext } from "../../../App";
import getSplashArt from "../SplashArt/Main";
import EditorActionsSection from "./EditorActionsSection";
import KillerskinsLogo from "../../UI/SplashArt/splasharts/Killerskins_Logo.png";

const CodeEditorArea = () => {
  const { files, activeFile, editorText, setEditorText } =
    useContext(StatesContext);
  const art = getSplashArt(activeFile);
  let content = activeFile?.content;

  return (
    <div
      className="absolute flex flex-col w-[640px] h-[450px]"
      id="editor-container"
      style={{ zIndex: content && files.length > 0 ? "50" : "40" }}
    >
      <EditorActionsSection />
      <section className="flex justify-center items-center relative z-10 w-full h-[85%]" id="editor-container">
        <textarea
          disabled={content && files.length > 0 ? false : true}
          aria-label="Code editor"
          className="relative -top-1 w-[98%] h-[95%] z-0 resize-none outline-none border-none p-3 bg-transparent text-sm font-sans text-white whitespace-nowrap"
          name="text-editor"
          value={files.length > 0 ? editorText : ""}
          onChange={(e) => setEditorText(e.target.value)}
          spellCheck={false}
          id="code"
          style={{ display: content && files.length > 0 ? "block" : "none" }}
        ></textarea>
        <img
          src={art || KillerskinsLogo}
          width={640}
          height={375}
          alt="splash art"
          className="absolute -z-50 top-0 filter blur-[1px] h-[375px]"
          style={{ opacity: art ? "0.5" : "1"}}
        />
      </section>
    </div>
  );
};

export default CodeEditorArea;

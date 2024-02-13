import Handlers from "./components/Handlers";
import CodeEditor from "./components/CodeEditor";

export default function FileHandlingSection() {
  return (
    <div className="absolute left-[209px] top-0 w-[815px] h-full *:cursor-pointer *:select-none">
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col justify-center items-center bg-[url(./assets/images/code-editor.png)] bg-contain w-[502px] h-[501px]">
          <div className="w-[492px] h-[476px]">
            <Handlers />
            <CodeEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

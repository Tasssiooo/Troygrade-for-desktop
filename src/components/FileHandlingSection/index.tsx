import Handlers from "./components/Handlers";
import CodeEditor from "./components/CodeEditor";

export default function FileHandlingSection() {
  return (
    <div className="absolute left-[209px] top-0 w-[815px] h-full *:cursor-pointer *:select-none">
      <div className="relative flex items-center justify-center h-full">
        <div className="relative flex flex-col justify-center items-center">
          <div className="w-[642px] h-[476px]">
            <div role="none" className="bg-[url(./assets/images/border-top.png)] [background-size:640px_26px] bg-no-repeat pointer-events-none inset-auto -top-2 w-[640px] h-[33px] z-[90] absolute"></div>
            <div role="none" className="bg-[url(./assets/images/border-left.png)] [background-size:8px_485px] bg-no-repeat pointer-events-none -left-[8px] -top-[4px] w-[10px] h-[476px] z-[90] absolute"></div>
            <div role="none" className="bg-[url(./assets/images/border-right.png)] [background-size:8px_485px] bg-no-repeat pointer-events-none -right-1 -top-[4px] w-[8px] h-[476px] z-[90] absolute"></div>
            <div role="none" className="bg-[url(./assets/images/border-bottom.png)] [background-size:640px_24px] bg-no-repeat pointer-events-none -bottom-3 w-[640px] h-[22px] z-[90] absolute"></div>
            <Handlers />
            <CodeEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

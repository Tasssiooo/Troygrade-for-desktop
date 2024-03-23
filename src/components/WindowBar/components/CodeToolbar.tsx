import * as Toolbar from "@radix-ui/react-toolbar";
import logomark from "@/assets/images/troygrade-icon-no-bg.png"

export default function CodeToolbar() {
  const title = localStorage.getItem("editor-title");
  return (
    <Toolbar.Root className="flex flex-row justify-between items-center fixed left-0 top-0 px-2.5 min-w-max z-[99]">
      <div className="flex flex-row items-center space-x-2">
        <img src={logomark} width={32} height={32} alt="" className="rounded-full" />
        <span className="text-sm lowercase">{title}</span>
      </div>
      <div className="w-[1px] h-4 bg-foreground ml-4 mr-2" role="separator"></div>
      <div className="space-x-2">
        <Toolbar.Button className="text-sm hover:bg-[#323232] hover:text-foreground-accent p-2.5 py-0.5 rounded-sm">
          Save
        </Toolbar.Button>
        <Toolbar.Button className="text-sm hover:bg-[#323232] hover:text-foreground-accent p-2.5 py-0.5 rounded-sm">
          Fix
        </Toolbar.Button>
        <Toolbar.Button className="text-sm hover:bg-[#323232] hover:text-foreground-accent p-2.5 py-0.5 rounded-sm">
          Download
        </Toolbar.Button>
      </div>
    </Toolbar.Root>
  );
}

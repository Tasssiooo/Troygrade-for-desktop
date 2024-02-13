import * as Toolbar from "@radix-ui/react-toolbar";
import logomark from "@/assets/images/32x32.png";

export default function CodeToolbar() {
  return (
    <Toolbar.Root className="flex flex-row space-x-2 fixed left-0 top-1 px-2.5 w-max">
      <img src={logomark} width={24} height={24} alt="" />
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

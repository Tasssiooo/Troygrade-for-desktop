import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Globals/Select";

export default function PresetsDropdown() {
  return (
    <div className="flex flex-col space-y-1 pointer-events-auto">
      <span className="text-sm">Choose a preset</span>
      <Select defaultValue="default">
        <SelectTrigger>
          <SelectValue
            className="overflow-hidden text-ellipsis whitespace-nowrap py-0.5"
            placeholder="Select a fruit"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="default">Default paths</SelectItem>
            <SelectItem value="custom">Custom paths</SelectItem>
            <SelectItem value="add" className="justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  fill="currentColor"
                  d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
                />
              </svg>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

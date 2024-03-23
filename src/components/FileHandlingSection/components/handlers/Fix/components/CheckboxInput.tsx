import { Checkbox } from "@/components/Globals/Checkbox";
import { Settings } from "@/types/types";

interface Props {
  index?: number;
  value?: boolean;
  setSettings: (s: any) => void;
  label: string;
}

export default function CheckboxInput({
  index,
  value,
  setSettings,
  label,
}: Props) {
  return (
    <label htmlFor={label} className="group">
      <Checkbox
        id={label}
        className="mr-1"
        checked={value}
        onCheckedChange={() =>
          setSettings((prev: Settings[]) => {
            const resolved = prev.map((s, i) => {
              if (i === index) {
                if (label[0] === "O") {
                  s.namesOnly = !s.namesOnly;
                } else {
                  s.updateFileTypes = !s.updateFileTypes;
                }
              } else {
                return s;
              }
              return s;
            });
            return resolved;
          })
        }
      />
      {label}
    </label>
  );
}

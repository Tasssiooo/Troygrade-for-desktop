import { Checkbox } from "@/components/Globals/Checkbox";

interface Props {
  label: string;
}

export default function CheckboxInput({ label }: Props) {
  return (
    <label htmlFor={label} className="group">
      <Checkbox id={label} className="mr-1" />
      {label}
    </label>
  );
}

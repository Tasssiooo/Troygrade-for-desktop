import { useState } from "react";

import PathInputFields from "./PathInputFields";
import PresetDropdown from "./PresetDropdown";
import Checkbox from "./Checkbox";

const SettingsSection = () => {
  const [forAll, setForAll] = useState(false);
  return (
    <section className="px-2 w-3/5">
      <div className="flex flex-col">
        <h2 className="text-xs border-b border-[#cca859] text-[#eddec1] pb-0.5 mb-1">
          Choose a preset
        </h2>
        <PresetDropdown />
        <PathInputFields />
        <Checkbox forAll={forAll} setForAll={setForAll} />
      </div>
    </section>
  );
};

export default SettingsSection;

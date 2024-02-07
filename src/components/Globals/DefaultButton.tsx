import { ReactNode } from "react";

import Tooltip from "@/components/Globals/Tooltip";

import "./styles/defaultButton.css";

export default function DefaultButton({
  children,
  size = "text",
  tooltip,
}: {
  children: ReactNode;
  size?: "icon" | "text";
  tooltip: string;
}) {
  if (size === "text") {
    return (
      <div className="text">
        <button type="button">
          <span className="inline-flex justify-center items-center bg-button-inner px-2 py-1">
            {children}
          </span>
        </button>
      </div>
    );
  }
  return (
    <Tooltip tip={tooltip} orientation="top">
      <div className="icon">
        <button type="button">
          <span className="inline-flex justify-center items-center w-8 h-6 bg-button-inner">
            {children}
          </span>
        </button>
      </div>
    </Tooltip>
  );
}

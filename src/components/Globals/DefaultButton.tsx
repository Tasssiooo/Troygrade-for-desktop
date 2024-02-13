import { MouseEventHandler, ReactNode } from "react";

import Tooltip from "@/components/Globals/Tooltip";

import "./styles/defaultButton.css";

interface Props {
  children: ReactNode;
  size?: "icon" | "text";
  tooltip: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function DefaultButton({
  children,
  size = "text",
  tooltip,
  disabled = false,
  onClick
}: Props) {
  if (size === "text") {
    return (
      <div className="text">
        <button type="button" onClick={onClick} disabled={disabled}>
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
        <button type="button" onClick={onClick} disabled={disabled}>
          <span className="inline-flex justify-center items-center w-8 h-6 bg-button-inner">
            {children}
          </span>
        </button>
      </div>
    </Tooltip>
  );
}

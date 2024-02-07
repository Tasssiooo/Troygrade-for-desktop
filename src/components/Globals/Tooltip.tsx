import * as RadixTooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

import "./styles/tooltip.css";

type Orientation = "bottom" | "top" | "right" | "left" | undefined;

export default function Tooltip({
  children,
  orientation,
  tip,
}: {
  children: ReactNode;
  orientation: Orientation;
  tip: string;
}) {
  return (
    <RadixTooltip.Provider delayDuration={0}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className="TooltipContent" side={orientation}>
            {tip}
            <RadixTooltip.Arrow asChild>
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 22"
                width="22"
                height="12"
              >
                <defs>
                  <image
                    width="30"
                    height="22"
                    id="img1"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAWCAMAAADgvdz9AAAAAXNSR0IB2cksfwAAAIRQTFRFAAAAeFgocFQnKyciGhwhJSQialEndlkpeVkpeVopeFoobFInICAiVEMleFoogGAwVEIlQjckeFwoeFgoQzckclYneFgoeFopYEomeFooeVopSDoleFooMSsiJSMieFooeVkpSDokdlkmeFsoHyAid1knZk4nTj4leVspdlkneFooeFkoA5NeiwAAACx0Uk5TACDP////31Bw7/////+fEP//QGD//4CQ/9/P/8D//2BQ/1C//5D//+9wgKAKEflxAAAAuklEQVR4nHWQ2RKCMBAEJ4oHi4KiKKjgjdf//5+7WGAu5iXJTqW7agGowTDwZDSegDMNKZp56jlRrJCERLRw2yWPKQVWcq4ddMbTjdC30tv6nGeFtEh2fLX0e/mimhpK9LmBphYtcfQRvw/o0uhLA12of41GX+noo9aaekHHMHKSH2c/2tCXcrnAzpWnWRXcBH132p++Dh7duqykQq21dfn0+ro8+h50oy+4ffrRrf7V2wJve11WPib6C9FVDd2GPvG/AAAAAElFTkSuQmCC"
                  />
                </defs>
                <style></style>
                <use id="Background" href="#img1" x="1" y="0" />
              </svg>
            </RadixTooltip.Arrow>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

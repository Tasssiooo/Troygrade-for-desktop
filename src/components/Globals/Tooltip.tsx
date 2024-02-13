import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export const TooltipProvider = TooltipPrimitive.Provider;

export const Tooltip = TooltipPrimitive.Root;

export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, children, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "relative z-[90] bg-[#1a1c21] leading-[1] min-w-12 text-center px-2 py-1 text-sm border [border-image:linear-gradient(to_top,#785b28_0%,#c89c3c_55%,#c8a355_71%,#c8aa6e_100%)_1_stretch]",
      className
    )}
    {...props}
  >
    {children}
    <TooltipPrimitive.Arrow asChild>
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
    </TooltipPrimitive.Arrow>
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

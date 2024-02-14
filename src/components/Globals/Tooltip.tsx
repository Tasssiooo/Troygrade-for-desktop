import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";
import { TooltipArrow } from "./Icons";

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
      <TooltipArrow />
    </TooltipPrimitive.Arrow>
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

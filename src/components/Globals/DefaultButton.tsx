import { forwardRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex justify-center items-center bg-button py-[3px] px-0.5 text-button-foreground border border-b-[#6b5028] hover:border-b-[#c99c3f] border-t-[#c7a86b] hover:border-t-[#f0e5d1] border-x-[#a07a30] active:border-[#614920] hover:text-button-foreground-accent hover:border-b-[3px] active:bg-button-active active:text-button-foreground-active disabled:pointer-events-none",
  {
    variants: {
      size: {
        default: "h-8",
        icon: "min-w-9 h-8",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const DefaultButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ size, className }))}
        ref={ref}
        {...props}
      >
        <div className="inline-flex justify-center items-center bg-button-inner size-full px-1">
          {children}
        </div>
      </button>
    );
  }
);
DefaultButton.displayName = "Button";

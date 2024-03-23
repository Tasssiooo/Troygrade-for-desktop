import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

const Roster = AccordionPrimitive.Root;

const RosterItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
));
RosterItem.displayName = "AccordionItem";

const RosterTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 gap-x-3 items-center px-2.5 hover:bg-background-accent h-6 text-xs hover:text-foreground-accent uppercase leading-4 tracking-[0.075em] group",
        className
      )}
      {...props}
    >
      <div className="border-transparent border-t-foreground border-4 -rotate-90 group-data-[state=open]:rotate-0"></div>
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
RosterTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const RosterContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn(className)}>{children}</div>
  </AccordionPrimitive.Content>
));
RosterContent.displayName = AccordionPrimitive.Content.displayName;

export { Roster, RosterItem, RosterTrigger, RosterContent };

import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const Modal = Dialog.Root;

export const ModalTrigger = Dialog.Trigger;

export const ModalClose = Dialog.Close;

import "./styles/modal.css";

export const ModalContent = forwardRef<
  ElementRef<typeof Dialog.Content>,
  ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => (
  <Dialog.Portal>
    <Dialog.Overlay className="dialog-overlay" />
    <Dialog.Content
      ref={ref}
      className={cn("dialog-content", className)}
      {...props}
    >
      {children}
      <Dialog.Close className="dialog-close">
        <div className="close-border">
          <div className="inner-bg">
            <div className="x-icon"></div>
          </div>
        </div>
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
));
ModalContent.displayName = Dialog.Content.displayName;

export const ModalTitle = forwardRef<
  ElementRef<typeof Dialog.Title>,
  ComponentPropsWithoutRef<typeof Dialog.Title>
>(({ className, ...props }, ref) => (
  <Dialog.Title
    ref={ref}
    className={cn(
      "text-lg font-bold leading-none pointer-events-none tracking-tight border-b border-b-[#1e282d] h-9 mb-2 uppercase",
      className
    )}
    {...props}
  />
));
ModalTitle.displayName = Dialog.Title.displayName;

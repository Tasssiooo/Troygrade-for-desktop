import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast rounded-none border border-transparent [border-image:linear-gradient(to_top,#785a28_0,#463714_50%,#463714_100%)_1_stretch] group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "bg-button text-button-foreground border border-transparent [border-image:linear-gradient(to_top,#785a28_0,#463714_50%,#463714_100%)_1_stretch]",
          cancelButton:
            "group-[.toast]:text-foreground group-[.toast]:text-foreground-muted",
        },
      }}
      duration={3500}
      {...props}
    />
  );
};

export { Toaster };

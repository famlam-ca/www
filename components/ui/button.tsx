import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
  inline-flex
  items-center
  justify-center
  font-medium
  ring-offset-white
  transition-colors
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-slate-950
  focus-visible:ring-offset-2
  disabled:pointer-events-none
  disabled:opacity-50
  dark:ring-offset-slate-950
  dark:focus-visible:ring-slate-300`,
  {
    variants: {
      variant: {
        default:
          "bg-backgroundDark text-light hover:bg-backgroundDark/75 dark:bg-backgroundLight dark:text-dark dark:hover:bg-backgroundLight/75",
        destructive: "bg-alert text-light hover:bg-alert/75",
        outline:
          "border-2 border-solid border-lightVariant bg-transparent hover:bg-lightVariant text-dark dark:border-backgroundDark dark:hover:bg-backgroundDark dark:text-light",
        secondary:
          "bg-lightVariant text-dark hover:bg-lightVariant/75 dark:bg-backgroundDark dark:text-light dark:hover:bg-backgroundDark/75",
        ghost:
          "hover:bg-lightVariant hover:text-dark dark:hover:bg-backgroundDark dark:hover:text-light",
        link: "text-primary underline-offset-2 hover:underline",
      },
      size: {
        default: "h-auto w-auto rounded px-3 py-1",
        sm: "h-9 rounded px-3 py-1",
        lg: "h-11 rounded px-3 py-1",
        icon: "h-10 w-10 rounded px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

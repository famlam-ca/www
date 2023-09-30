"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ children, className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      `
      focus-visible:ring-ring
      focus-visible:ring-offset-background
      inline-flex
      h-[24px]
      w-[44px]
      cursor-pointer
      items-center
      rounded-full
      border-2
      border-transparent
      bg-backgroundDark
      transition-colors
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-offset-2
      disabled:cursor-not-allowed
      disabled:opacity-50
      dark:bg-light
      `,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        `
        pointer-events-none
        h-6
        w-6
        rounded-full
        bg-backgroundLight
        shadow-lg
        ring-0
        transition-transform
        data-[state=checked]:translate-x-6
        data-[state=unchecked]:translate-x-0.5
        dark:bg-backgroundDark
        `,
      )}
    />
    <div
      className={cn(
        `
      absolute
      ml-1
      flex
      gap-1.5
      text-light
      dark:text-dark
      `,
        className,
      )}
    >
      {children}
    </div>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };

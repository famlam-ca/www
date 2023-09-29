import * as Switch from "@radix-ui/react-switch";
import { twMerge } from "tailwind-merge";

interface SwitchProps {
  children: React.ReactNode;
  className?: string;
  onClick: React.MouseEventHandler;
}

const Toggle: React.FC<SwitchProps> = ({ children, className, onClick }) => {
  return (
    <>
      <Switch.Root
        onClick={onClick}
        className={twMerge(
          `
        bg-transparent
        `,
          className,
        )}
      >
        <Switch.Thumb
          className={twMerge(
            `
        flex
        items-center
        `,
            className,
          )}
        >
          {children}
        </Switch.Thumb>
      </Switch.Root>
    </>
  );
};

export default Toggle;

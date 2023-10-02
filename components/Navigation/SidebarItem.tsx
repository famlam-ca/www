import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active: boolean;
  href: string;
  className?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
  className,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `
        text-md
        relative
        ml-12
        flex
        h-14
        w-full
        cursor-pointer
        flex-row
        items-center
        gap-4
        whitespace-nowrap
        text-left
        font-medium
        text-muted
        transition-all
        duration-200
        ease-in-out
        hover:ml-12
        hover:text-primary
        md:ml-8
    `,
        className,
        active && "text-primary",
      )}
    >
      <Icon size={24} />
      <p className="w-full truncate max-md:hidden md:visible">{label}</p>
    </Link>
  );
};

export default SidebarItem;

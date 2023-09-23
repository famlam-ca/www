"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  HiOutlineHome,
  HiOutlineServerStack,
  HiOutlineSquares2X2,
  HiOutlineInbox,
} from "react-icons/hi2";

import Box from "../Box";
import SidebarItem from "./SidebarItem";
import Logo from "@/public/images/logo512.png";
import Link from "next/link";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiOutlineHome,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: HiOutlineSquares2X2,
        label: "Dashboard",
        active: pathname === "/dashboard",
        href: "/search",
      },
      {
        icon: HiOutlineServerStack,
        label: "Server Manager",
        active: pathname === "/servers",
        href: "/search",
      },
      {
        icon: HiOutlineInbox,
        label: "Email",
        active: pathname === "/email",
        href: "/email",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full ">
      <div
        className="
        hidden
        md:flex
        flex-col
        gap-2
        h-full
        w-72
        p-2
        "
      >
        <Box>
          <div
            className="
            flex
            bg-backgroundLight dark:bg-backgroundDark
            flex-col
            px-5
            py-4
            "
          >
            <Link className="flex items-center gap-8" href="/">
              <Image className="h-12 w-12 scale-200" src={Logo} alt="Logo" />
              <h2 className="flex items-center font-semibold text-dark dark:text-light">
                H<span className="text-primary">HN</span>
              </h2>
            </Link>
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full bg-backgroundLight dark:bg-backgroundDark">
          <div>Hello World!</div>
        </Box>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

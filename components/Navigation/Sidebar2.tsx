"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineHome,
  HiOutlineServerStack,
  HiOutlineSquares2X2,
  HiOutlineInbox,
} from "react-icons/hi2";

import Box from "../Box";
import SidebarItem from "./SidebarItem";
import Logo from "@/public/images/logo512.png";

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
        href: "/dashboard",
      },
      {
        icon: HiOutlineServerStack,
        label: "Server Manager",
        active: pathname === "/servers",
        href: "/servers",
      },
      {
        icon: HiOutlineInbox,
        label: "Email",
        active: pathname === "/email",
        href: "/email",
      },
    ],
    [pathname],
  );

  return (
    <div className="flex h-full ">
      <div
        className="
        hidden
        h-full
        w-72
        flex-col
        gap-2
        p-2
        md:flex
        "
      >
        <Box>
          <div
            className="
            flex
            flex-col bg-backgroundLight
            px-5
            py-4
            dark:bg-backgroundDark
            "
          >
            <Link className="flex items-center" href="/">
              <Image
                className="mr-8 h-12 w-12 scale-200"
                src={Logo}
                alt="Logo"
              />
              <h2 className="font-semibold text-dark dark:text-light">
                H<span className="text-primary">HN</span>
              </h2>
            </Link>
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box>
          <div className="h-1 w-4/5 self-center rounded bg-primary"></div>
        </Box>
        <Box
          className="
        h-full
        overflow-y-auto
        bg-backgroundLight
        px-5
        py-4
        dark:bg-backgroundDark"
        >
          <div>More content!</div>
        </Box>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

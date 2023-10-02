"use client";

import { useMemo } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import {
  HiOutlineHome,
  HiOutlineServerStack,
  HiOutlineSquares2X2,
  HiOutlineInbox,
  HiArrowLeftOnRectangle,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

import Logo from "@/public/images/logo512.png";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import SidebarItem from "./SidebarItem";
import Box from "../Box";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const supabaseClient = useSupabaseClient();
  const authModal = useAuthModal();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully logged out!");
    }
  };

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
        href: "https://panel.famlam.ca",
      },
      {
        icon: HiOutlineInbox,
        label: "Email",
        active: pathname === "/mail",
        href: "/mail",
      },
    ],
    [pathname],
  );

  return (
    <div className="flex">
      <div className="flex w-32 flex-col gap-2 md:w-72">
        <Box>
          <div
            className="
            flex
            h-screen
            flex-col
            bg-backgroundLight
            text-muted
            dark:bg-backgroundDark
          "
          >
            <Link
              href="/"
              className="m-8 flex items-center justify-center text-center"
            >
              <Image
                className="mx-8 h-12 w-12 scale-200 max-md:hidden md:visible"
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
            <div className="my-8 h-1 w-4/5 self-center rounded bg-primary"></div>

            <>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="
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
                  md:ml-8"
                >
                  <HiArrowRightOnRectangle size={24} />
                  <h3 className="max-md:hidden md:visible">Sign Out</h3>
                </button>
              ) : (
                <button
                  onClick={authModal.onOpen}
                  className="
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
                  md:ml-8"
                >
                  <HiArrowLeftOnRectangle size={24} />
                  <h3 className="max-md:hidden md:visible">Sign In</h3>
                </button>
              )}
            </>
          </div>
        </Box>
      </div>
      <main className="grid-cols-dashboard grid w-full lg:grid-cols-dashboardLg">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;

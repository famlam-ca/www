"use client";

import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import {
  HiCheck,
  HiChevronRight,
  HiArrowLeftOnRectangle,
  HiArrowRightOnRectangle,
  HiMiniArrowUpRight,
  HiMoon,
  HiBars3,
} from "react-icons/hi2";
import { BsDot } from "react-icons/bs";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";

const NavDropdown = () => {
  const router = useRouter();
  const authModal = useAuthModal();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const { theme, setTheme } = useTheme();
  const [themeChecked, setThemeChecked] = useState(true);
  const [somethingChecked, setSomethingChecked] = useState(false);

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully logged out!");
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-none text-dark hover:bg-light dark:text-light dark:hover:bg-backgroundDark lg:hidden">
          <HiBars3 size={20} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.DropdownMenuContent
          className="min-w-[150px] rounded-md bg-backgroundLight p-1 text-dark shadow-Light will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade dark:bg-backgroundVariant dark:text-light dark:shadow-Dark md:min-w-[220px]"
          sideOffset={5}
        >
          <Link href="/">
            <DropdownMenu.Item className=" relative flex h-7 items-center px-1 py-5 pl-6 text-sm hover:text-primary dark:hover:text-primary">
              Home
            </DropdownMenu.Item>
          </Link>

          <Link href="/dashboard">
            <DropdownMenu.Item className=" relative flex h-7 items-center px-1 py-5 pl-6 text-sm hover:text-primary dark:hover:text-primary">
              Dashboard
            </DropdownMenu.Item>
          </Link>

          <Link
            target="_blank"
            href="https://panel.famlam.ca"
            className="hover:text-primary dark:hover:text-primary"
          >
            <DropdownMenu.Item className="relative flex h-7 items-center px-1 py-5 pl-6 text-sm">
              Server Manager
              <div className="relative -top-2 right-0">
                <HiMiniArrowUpRight size={12} />
              </div>
            </DropdownMenu.Item>
          </Link>

          <Link href="/about">
            <DropdownMenu.Item className=" relative flex h-7 items-center px-1 py-5 pl-6 text-sm hover:text-primary dark:hover:text-primary">
              About
            </DropdownMenu.Item>
          </Link>

          <DropdownMenu.Separator className="m-[5px] h-[1px] bg-dark dark:bg-light" />

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className=" relative flex h-7 items-center px-1 py-5 pl-6 text-sm hover:text-primary dark:hover:text-primary">
              Settings
              <div className=" ml-auto pl-5">
                <HiChevronRight size={20} />
              </div>
            </DropdownMenu.SubTrigger>

            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="min-w-[150px] rounded-md bg-backgroundLight p-1 text-dark shadow-Light will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade dark:bg-backgroundVariant dark:text-light dark:shadow-Dark md:min-w-[220px]"
                sideOffset={2}
                alignOffset={-5}
              >
                <DropdownMenu.Label className="pl-6 text-xs leading-[25px]">
                  Theme
                </DropdownMenu.Label>

                <button
                  className="container hover:text-primary dark:hover:text-primary"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <DropdownMenu.CheckboxItem
                    className=" relative flex h-7 items-center px-1 pl-6 text-sm"
                    checked={themeChecked}
                    onCheckedChange={setThemeChecked}
                  >
                    <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                      <BsDot size={24} />
                    </DropdownMenu.ItemIndicator>
                    <span>Dark Mode</span>
                    <div className="ml-auto text-dark dark:text-light">
                      <HiMoon size={15} />
                    </div>
                  </DropdownMenu.CheckboxItem>
                </button>

                <DropdownMenu.Separator className="m-[5px] h-[1px] bg-dark dark:bg-light" />

                <DropdownMenu.Label className="pl-6 text-xs leading-[25px]">
                  Something else
                </DropdownMenu.Label>

                <button
                  className="container hover:text-primary dark:hover:text-primary"
                  onClick={() => {}}
                >
                  <DropdownMenu.CheckboxItem
                    className="relative flex h-[25px] items-center px-1 pl-6 text-sm"
                    checked={somethingChecked}
                    onCheckedChange={setSomethingChecked}
                  >
                    <DropdownMenu.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
                      <HiCheck size={15} />
                    </DropdownMenu.ItemIndicator>
                    <span>Toggle option</span>
                    <div className="ml-auto text-dark dark:text-light">
                      Icon
                    </div>
                  </DropdownMenu.CheckboxItem>
                </button>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator className="m-[5px] h-[1px] bg-dark dark:bg-light" />

          <div>
            {user ? (
              <DropdownMenu.Item
                onClick={handleLogout}
                className="relative flex h-[25px] items-center px-1 pl-6 text-sm hover:text-primary dark:hover:text-primary"
              >
                Sign Out
                <div className=" ml-auto">
                  <HiArrowRightOnRectangle size={20} />
                </div>
              </DropdownMenu.Item>
            ) : (
              <DropdownMenu.Item
                onClick={authModal.onOpen}
                className="relative flex h-[25px] items-center px-1 pl-6 text-sm hover:text-primary dark:hover:text-primary"
              >
                Sign In
                <div className=" ml-auto">
                  <HiArrowLeftOnRectangle size={20} />
                </div>
              </DropdownMenu.Item>
            )}
          </div>

          <DropdownMenu.Arrow className="fill-dark dark:fill-light" />
        </DropdownMenu.DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default NavDropdown;

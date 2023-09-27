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
} from "react-icons/hi2";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";

const Dropdown = () => {
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
    <DropdownMenu.Portal>
      <DropdownMenu.DropdownMenuContent
        className="min-w-[150px] rounded-md bg-backgroundLight p-1 text-dark shadow-Light will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade dark:bg-backgroundVariant dark:text-light dark:shadow-Dark md:min-w-[220px]"
        sideOffset={5}
      >
        <DropdownMenu.Item className=" relative flex h-7 items-center px-1 py-5 pl-6 text-sm hover:text-primary dark:hover:text-primary">
          <Link href="/">Home</Link>
        </DropdownMenu.Item>

        <DropdownMenu.Item className=" relative flex h-7 items-center px-1 py-5 pl-6 text-sm hover:text-primary dark:hover:text-primary">
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenu.Item>

        <DropdownMenu.Item className=" relative flex h-7 items-center justify-between px-1 py-5 pl-6 text-sm">
          <Link
            href="/servers"
            className="hover:text-primary dark:hover:text-primary"
          >
            Server Manager
          </Link>
          <Link
            target="_blank"
            href="https://panel.famlam.ca/"
            className="hover:text-primary dark:hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </Link>
        </DropdownMenu.Item>

        <DropdownMenu.Item className=" relative flex h-7 items-center px-1 py-5 pl-6 text-sm hover:text-primary dark:hover:text-primary">
          <Link href="/about">About</Link>
        </DropdownMenu.Item>

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
                    <HiCheck size={15} />
                  </DropdownMenu.ItemIndicator>
                  <span>Dark Mode</span>
                  <div className="text-dark dark:text-light ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                        clipRule="evenodd"
                      />
                    </svg>
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
                  <div className=" ml-auto">Icon</div>
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
  );
};

export default Dropdown;

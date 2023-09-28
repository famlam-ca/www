"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import ThemeToggle from "@/hooks/useTheme";

import NavEntry from "../Auth/NavEntry";
import NavDropdown from "./NavDropdown";
import Logo from "../Logo";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="w-full">
      <nav className="flex items-center max-md:justify-center">
        <div className="md:ml md:ml-4 lg:ml-32">
          <Logo />
        </div>
        <NavDropdown />

        <div className="hidden text-base md:flex md:items-center">
          <button
            onClick={() => router.push("/dashboard")}
            className="ml-5 text-sm font-semibold text-dark transition-all hover:text-primary dark:text-light dark:hover:text-primary"
          >
            Dashboard
          </button>

          <nav className="flex">
            <button
              onClick={() => router.push("/servers")}
              className="ml-5 text-sm font-semibold text-dark transition-all hover:text-primary dark:text-light dark:hover:text-primary"
            >
              Server Manager
            </button>
            <Link
              href="https://panel.famlam.ca/"
              target="_blank"
              className="ml-1 text-dark transition-all hover:text-primary dark:text-light dark:hover:text-primary"
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

            <button
              onClick={() => router.push("/about")}
              className="ml-5 text-sm font-semibold text-dark transition-all hover:text-primary dark:text-light dark:hover:text-primary"
            >
              About
            </button>
          </nav>

          <div className="absolute right-8 flex items-center gap-4 max-md:hidden md:right-16 lg:right-32">
            <ThemeToggle />
            <NavEntry />
          </div>
        </div>
      </nav>
      <main className="h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Navbar;

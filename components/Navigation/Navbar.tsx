"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { HiMiniArrowUpRight } from "react-icons/hi2";

import ThemeToggle from "@/hooks/useTheme";
import ThemeSwitch from "@/hooks/useThemeSwitch";

import NavEntry from "../Auth/NavEntry";
import NavDropdown from "./NavDropdown";
import Logo from "../Logo";

interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center max-md:justify-center">
        <div className="md:ml md:ml-4 lg:ml-32">
          <Logo />
        </div>
        <NavDropdown />

        <nav className="hidden gap-4 md:flex md:items-center">
          <button
            onClick={() => router.push("/dashboard")}
            className="
            after:
            relative
            inline-block
            text-sm
            font-semibold
            text-dark
            after:absolute
            after:bottom-0
            after:left-0
            after:h-0.5
            after:w-full
            after:origin-bottom-right
            after:scale-x-0
            after:bg-primary
            after:transition-transform
            after:duration-200
            after:content-['']
            hover:after:origin-bottom-left
            hover:after:scale-100
            dark:text-light
            "
          >
            Dashboard
          </button>

          <Link
            href="https://panel.famlam.ca/"
            target="_blank"
            className="flex items-center"
          >
            <span
              className="
              relative
              flex
              text-sm
              font-semibold
              text-dark
              after:absolute
              after:bottom-0
              after:left-0
              after:h-0.5
              after:w-full
              after:origin-bottom-right
              after:scale-x-0
              after:bg-primary
              after:transition-transform
              after:duration-200
              after:content-['']
              hover:after:origin-bottom-left
              hover:after:scale-100
              dark:text-light
              "
            >
              Server Manager
            </span>
            <div className="relative -top-2 right-0">
              <HiMiniArrowUpRight size={12} />
            </div>
          </Link>

          <button
            onClick={() => router.push("/about")}
            className="
            after:
            relative
            inline-block
            text-sm
            font-semibold
            text-dark
            after:absolute
            after:bottom-0
            after:left-0
            after:h-0.5
            after:w-full
            after:origin-bottom-right
            after:scale-x-0
            after:bg-primary
            after:transition-transform
            after:duration-200
            after:content-['']
            hover:after:origin-bottom-left
            hover:after:scale-100
            dark:text-light
            "
          >
            About
          </button>
        </nav>

        <div className="absolute right-8 flex items-center gap-4 max-md:hidden md:right-16 lg:right-32">
          <ThemeSwitch />
          {/* <ThemeToggle /> */}
          <NavEntry />
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};

export default Navbar;

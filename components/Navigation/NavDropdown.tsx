"use client";

import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconType } from "react-icons";

import { HiBars3 } from "react-icons/hi2";

import Dropdown from "../Dropdown";

interface NavDropdownProps {
  children?: React.ReactNode;
}

const NavDropdown: React.FC<NavDropdownProps> = ({ children }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="visible inline-flex h-9 w-9 items-center justify-center rounded-full bg-none text-dark hover:bg-light dark:text-light dark:hover:bg-backgroundDark md:hidden">
          <HiBars3 size={20} />
        </button>
      </DropdownMenu.Trigger>
      <Dropdown />
    </DropdownMenu.Root>
  );
};

export default NavDropdown;

"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineMoon, HiMoon, HiOutlineSun, HiSun } from "react-icons/hi2";

import { useTheme } from "next-themes";
import Toggle from "@/components/Toggle";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {theme === "dark" ? (
        <Toggle onClick={() => setTheme("light")}>
          {theme === "dark" ? (
            <HiMoon size={20} />
          ) : (
            <HiOutlineMoon size={20} />
          )}
          {theme === "dark" ? <HiOutlineSun size={20} /> : <HiSun size={20} />}
        </Toggle>
      ) : (
        <Toggle onClick={() => setTheme("dark")}>
          {theme === "dark" ? (
            <HiMoon size={20} />
          ) : (
            <HiOutlineMoon size={20} />
          )}
          {theme === "dark" ? (
            <HiOutlineSun HiSun size={20} />
          ) : (
            <HiSun size={20} />
          )}
        </Toggle>
      )}
    </>
  );
};

export default ThemeSwitch;

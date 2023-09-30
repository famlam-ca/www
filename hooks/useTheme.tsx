"use client";

import { useState, useEffect } from "react";
import { HiOutlineMoon, HiMoon, HiOutlineSun, HiSun } from "react-icons/hi2";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

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
    <div className="flex">
      {theme === "dark" ? (
        <Switch onCheckedChange={() => setTheme("light")}>
          <div className="ml-[4px] text-light">
            <HiMoon size={15} />
          </div>
          <HiOutlineSun size={15} />
        </Switch>
      ) : (
        <Switch defaultChecked onCheckedChange={() => setTheme("dark")}>
          <HiOutlineMoon size={15} />
          <div className="text-dark">
            <HiSun size={15} />
          </div>
        </Switch>
      )}
    </div>
  );
};

export default ThemeSwitch;

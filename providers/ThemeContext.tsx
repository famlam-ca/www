"use client";

import { useEffect, useState } from "react";

import { ThemeProvider } from "next-themes";

interface ThemeContextProps {
  children: React.ReactNode;
}

const ThemeContext: React.FC<ThemeContextProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <>{children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ThemeContext;

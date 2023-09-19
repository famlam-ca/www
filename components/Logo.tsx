"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import logo from "@/public/images/logo512.png";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="title-font mr-8 flex gap-4 font-medium md:mb-0 items-center justify-center"
    >
      <Image property="1" src={logo} alt="Logo" className="h-20 w-20" />
      <h2 className="font-semibold text-2xl text-dark dark:text-light">
        H<span className="text-primary">HN</span>
      </h2>
    </button>
  );
};

export default Logo;

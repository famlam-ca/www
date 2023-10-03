"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import logo from "@/public/images/logo512.png";

const Logo = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="title-font mr-8 flex items-center justify-center gap-4 font-medium md:mb-0"
    >
      <Image src={logo} alt="Logo" className="h-20 w-20" />
      <h2 className="text-2xl font-semibold text-dark dark:text-light">
        H<span className="text-primary">HN</span>
      </h2>
    </button>
  );
};

export default Logo;

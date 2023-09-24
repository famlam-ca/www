"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  HiOutlineHome,
  HiOutlineServerStack,
  HiOutlineSquares2X2,
  HiOutlineInbox,
} from "react-icons/hi2";

import Logo from "@/public/images/logo512.png";
import NavEntry from "../Auth/NavEntry";

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="fixed -left-full top-0 z-50 w-72 bg-backgroundLight pr-cardPadding lg:container dark:bg-backgroundDark max-md:shadow-Light max-md:dark:shadow-Dark lg:sticky">
      <div className="flex items-center justify-center p-padding1 lg:mx-6 lg:mb-0 lg:mt-6 xl:mx-6 xl:my-4">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-8 lg:gap-0 xl:gap-8"
        >
          <Image className="h-12 w-12 scale-200" src={Logo} alt="Logo" />
          <h2 className="flex font-semibold text-dark lg:invisible dark:text-light xl:visible">
            H<span className="text-primary">HN</span>
          </h2>
        </button>
      </div>

      <nav className="flex flex-col whitespace-nowrap text-muted">
        {/* <!-- Home --> */}
        <button
          onClick={() => router.push("/")}
          className="relative bottom-8 ml-8 flex h-14 items-center gap-4 transition-all duration-200 ease-in-out hover:ml-12 hover:text-primary lg:w-24 xl:w-24"
        >
          <HiOutlineHome size={24} />
          <h3 className="lg:invisible xl:visible">Home</h3>
        </button>

        {/* <!-- Dashboard --> */}
        <button
          onClick={() => router.push("/dashboard")}
          className="relative bottom-8 ml-8 flex h-14 items-center gap-4 transition-all duration-200 ease-in-out hover:ml-12 hover:text-primary lg:w-24 xl:w-24"
        >
          <div>
            <HiOutlineSquares2X2 size={24} />
          </div>
          <h3 className="lg:invisible xl:visible">Dashboard</h3>
        </button>

        {/* <!-- Servers --> */}
        <button
          onClick={() => router.push("/servers")}
          className="relative bottom-8 ml-8 flex h-14 items-center gap-4 transition-all duration-200 ease-in-out hover:ml-12 hover:text-primary lg:w-24 xl:w-24"
        >
          <div>
            <HiOutlineServerStack size={24} />
          </div>
          <h3 className="lg:invisible xl:visible">Server Manager</h3>
          <Link href="https://panel.famlam.ca/">
            <span className="rounded-radius1 bg-alert px-2 py-0.5 text-xs text-light lg:invisible xl:visible">
              0
            </span>
          </Link>
        </button>

        {/* <!-- Upload --> */}
        <button
          onClick={() => router.push("/mail")}
          className="relative bottom-8 ml-8 flex h-14 items-center gap-4 transition-all duration-200 ease-in-out hover:ml-12 hover:text-primary lg:w-24 xl:w-24"
        >
          <HiOutlineInbox size={24} />
          <h3 className="lg:invisible xl:visible">Email</h3>
        </button>

        {/* <!-- Nav footer --> */}
        <div className="mb-16 w-4/5 self-center rounded-2xl border-2 border-primary"></div>

        {/* <!-- Logout --> */}
      </nav>
      <NavEntry className="text-muted w-auto" />
    </aside>
  );
};

export default Sidebar;

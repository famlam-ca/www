"use client";

import { useRouter } from "next/navigation";
import { HiUserCircle } from "react-icons/hi2";

import { useUser } from "@/hooks/useUser";

import NavDropdown from "@/components/Navigation/NavDropdown";
import NavEntry from "@/components/Auth/NavEntry";

const Header = () => {
  const router = useRouter();

  const { user } = useUser();

  return (
    <div className="mb-6 mt-4 flex justify-end">
      <div className="right-4 flex gap-4 text-right max-lg:absolute max-lg:right-8 max-lg:top-8">
        <NavDropdown />
        {user ? (
          <>
            <div className="hidden text-dark dark:text-light sm:block">
              <p>
                Hey, <b>Username</b>
              </p>
              <small className="text-muted">Role</small>
            </div>
            <button onClick={() => router.push("/account")} className="flex">
              <HiUserCircle size={40} />
            </button>
          </>
        ) : (
          <div className="hidden text-dark dark:text-light sm:block">
            <NavEntry />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

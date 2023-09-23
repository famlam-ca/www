"use client";

import { useUser } from "@/hooks/useUser";

import NavDropdown from "@/components/Navigation/NavDropdown";
import NavEntry from "@/components/Auth/NavEntry";

const Header = () => {
  const { user } = useUser();

  return (
    <div className="mb-6 mt-4 flex justify-end">
      <button className="hidden" id="sidebar-btn">
        <span className="material-symbols-rounded">menu</span>
      </button>
      <div className="right-4 flex gap-4 text-right max-lg:absolute max-lg:right-8 max-lg:top-8">
        {user ? (
          <div className="invisible text-dark dark:text-light sm:visible">
            <p>
              Hey, <b>Username</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
        ) : (
          <div className="invisible text-dark dark:text-light sm:visible">
            <NavEntry />
          </div>
        )}
        <NavDropdown />
      </div>
    </div>
  );
};

export default Header;

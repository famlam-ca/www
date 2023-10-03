"use client";

import { useUser } from "@/hooks/useUser";

import NavDropdown from "@/components/Navigation/NavDropdown";
import ProfileDropdown from "../Navigation/ProfileDropdown";
import NavEntry from "@/components/Auth/NavEntry";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const Header = () => {
  const { user, userDetails } = useUser();
  const username = userDetails?.username;
  const role = userDetails?.role;
  const avatar = userDetails?.avatar_url;

  const initial = username?.charAt(0);

  return (
    <div className="mb-6 mt-4 flex justify-end">
      <div className="absolute right-auto flex gap-4 text-right max-lg:top-8">
        <NavDropdown />
        {user ? (
          <>
            <div className="hidden text-dark dark:text-light sm:block">
              <p>
                Hey, <b>{username}</b>
              </p>
              <small className="capitalize text-muted">{role}</small>
            </div>
            <ProfileDropdown>
              {avatar ? (
                <Avatar>
                  <AvatarImage src={avatar} />
                </Avatar>
              ) : (
                <Avatar className="border-2 border-primary">
                  <AvatarFallback className="text-lg font-semibold">
                    {initial}
                  </AvatarFallback>
                </Avatar>
              )}
            </ProfileDropdown>
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

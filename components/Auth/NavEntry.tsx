import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import { twMerge } from "tailwind-merge";

import {
  HiArrowLeftOnRectangle,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

import { useUser } from "@/hooks/useUser";
import Button from "../Button";
import useAuthModal from "@/hooks/useAuthModal";

interface NavEntryProps {
  className?: string;
}

const NavEntry: React.FC<NavEntryProps> = ({ className }) => {
  const router = useRouter();
  const authModal = useAuthModal();

  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Successfully signed out!");
    }
  };

  return (
    <div>
      {user ? (
        <Button
          onClick={handleLogout}
          className={twMerge(
            `
            flex
            items-center
            bg-transparent
            px-6
            py-2
            font-semibold
            text-dark
            dark:text-light
            `,
            className,
          )}
        >
          <HiArrowRightOnRectangle size={24} />
          <h3 className="ml-2">Sign Out</h3>
        </Button>
      ) : (
        <Button
          onClick={authModal.onOpen}
          className={twMerge(
            `
            flex
            items-center
            bg-backgroundDark
            px-6
            py-2
            font-semibold
            text-light
            dark:bg-white
            dark:text-dark
            `,
            className,
          )}
        >
          <HiArrowLeftOnRectangle size={24} />
          <h3 className="ml-2">Sign In</h3>
        </Button>
      )}
    </div>
  );
};

export default NavEntry;

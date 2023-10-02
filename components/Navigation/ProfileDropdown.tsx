import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";

import {
  Cloud,
  Github,
  LifeBuoy,
  LogOut,
  LogIn,
  Mail,
  PlusCircle,
  Settings,
  User,
  PaintBucket,
  Moon,
  Sun,
} from "lucide-react";

import { useUser } from "@/hooks/useUser";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ProfileDropdownProps {
  children: React.ReactNode;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ children }) => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();

  const { theme, setTheme } = useTheme();
  const { userDetails } = useUser();
  const username = userDetails?.username;
  const role = userDetails?.role;
  const email = userDetails?.email;

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="flex flex-col text-right">
          <p>{username}</p>
          <p className="text-muted">{email}</p>
          <p className="text-xs capitalize text-muted">{role}</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/account">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/mail">
            <DropdownMenuItem>
              <Mail className="mr-2 h-4 w-4" />
              <span>Email</span>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                {theme === "dark" ? (
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    <PaintBucket className="mr-2 h-4 w-4" />
                    <span>Light</span>
                    <Sun className="ml-auto h-4 w-4" />
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <PaintBucket className="mr-2 h-4 w-4" />
                    <span>Dark</span>
                    <Moon className="ml-auto h-4 w-4" />
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  <span>More to come</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <Link target="_blank" href="https://github.com/SlickYeet/famlam.ca">
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
        </Link>
        <Link href="/contact">
          <DropdownMenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </DropdownMenuItem>
        </Link>
        {role !== "admin" ? (
          <DropdownMenuItem disabled>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;

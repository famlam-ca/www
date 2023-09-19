"use client";

import { useEffect } from "react";
import {
  useSupabaseClient,
  useSessionContext,
} from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import Modal from "../Modal";
import useAuthModal from "@/hooks/useAuthModal";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { isOpen, onClose } = useAuthModal();
  const { theme } = useTheme();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Modal title="Login" isOpen={isOpen} onChange={onChange}>
      <Auth
        theme={theme === "dark" ? "dark" : "default"}
        providers={["google", "github"]}
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#f6f6f9", // backgroundLight
                brandAccent: "#81c3fd", // primary
                brandButtonText: "#363949", // dark
                defaultButtonBackground: "#f6f6f9", // backgroundLight
                defaultButtonBackgroundHover: "#dce1eb", // infoLight
                defaultButtonBorder: "#dce1eb", // infoLight
                defaultButtonText: "#363949", // dark
                dividerBackground: "#363949", // dark
                inputBackground: "#dce1eb", // infoLight
                inputBorder: "transparent",
                inputBorderHover: "#a3bdcc", // lightVariant
                inputBorderFocus: "#81c3fd", // primary
                inputText: "#363949", // dark
                inputLabelText: "#363949", // dark
                inputPlaceholder: "#7d8da1", // muted
                messageText: "#41f1b6", // success
                messageTextDanger: "#ff7782", // alert
                anchorTextColor: "#7d8da1", // muted
                anchorTextHoverColor: "#a3bdcc", // lightVariant
              },
            },
            dark: {
              colors: {
                brand: "#0b0c0d", // backgroundDark
                brandAccent: "#81c3fd", // primary
                brandButtonText: "#edeffd", // light
                defaultButtonBackground: "#0b0c0d", // backgroundDark
                defaultButtonBackgroundHover: "#181a1b", // backgroundVariant
                defaultButtonBorder: "#181a1b", // backgroundVariant
                defaultButtonText: "#edeffd", // light
                dividerBackground: "#edeffd", // light
                inputBackground: "#181a1b", // backgroundVariant
                inputBorder: "transparent",
                inputBorderHover: "#677483", // darkVariant
                inputBorderFocus: "#81c3fd", // primary
                inputText: "#edeffd", // light
                inputLabelText: "#edeffd", // light
                inputPlaceholder: "#7d8da1", // muted
                messageText: "#41f1b6", // success
                messageTextDanger: "#ff7782", // alert
                anchorTextColor: "#7d8da1", // muted
                anchorTextHoverColor: "#677483", // darkVariant
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;

import type { Metadata } from "next";

import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import ThemeContext from "@/providers/ThemeContext";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Humble Home Network",
  description: "A Humble Home Network for Friends and Family",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ThemeContext>
              <ModalProvider />
              {children}
              <Footer />
            </ThemeContext>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

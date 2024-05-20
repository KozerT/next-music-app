import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";



const font = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata: Metadata = {
  title: "Spotify clone",
  description:
    "Discover and enjoy music with this intuitive Spotify clone made with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
      <SupabaseProvider>
          <UserProvider>
            <ModalProvider/>
            <SideBar>{children}</SideBar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}

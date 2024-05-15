import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";

const font = Poppins({
  subsets: ["latin"],
  weight: '300'
});

export const metadata: Metadata = {
  title: "Spotify clone",
  description: "Discover and enjoy music with this intuitive Spotify clone made with Next.js",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SideBar>{children}</SideBar>
        </body>
    </html>
  );
}

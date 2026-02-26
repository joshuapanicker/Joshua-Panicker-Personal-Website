import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RedesignNavbar from "@/components/redesign/Navbar";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joshua Panicker - Personal Website",
  description: "Personal website for Joshua Panicker, Computer Science Student at Cal Poly San Luis Obispo.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <RedesignNavbar />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "./ThemeProviders";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
/**/
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/** Declare global styles here */}
      <body className="bg-white text-stone-700 dark:bg-stone-800 dark:text-stone-100">
        <ThemeProviders>
          <div className="flex flex-col ">
            <Navbar />
            {children}
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}

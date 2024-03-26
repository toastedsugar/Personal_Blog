"use client";

import Link from "next/link";
import { useContext, useEffect } from "react";

import GlassWrapper from "./GlassWrapper";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <nav className="text-md border-b text-stone-800 dark:text-stone-100 border-stone-300 dark:border-stone-500">
      <GlassWrapper>
        <div className="flex flex-row justify-center items-center p-2 gap-16 ">
          <Link href="/">
            <button>Home</button>
          </Link>
          <Link href="/blog">
            <button>Blog</button>
          </Link>
          <Link href="/projects">
            <button>Projects</button>
          </Link>
          <ThemeSwitch />
        </div>
      </GlassWrapper>
    </nav>
  );
}

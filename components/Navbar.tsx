"use client";

import Link from "next/link";
import { useContext, useEffect } from "react";

import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-center items-center gap-16 text-lg border-b p-2">
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
    </nav>
  );
}

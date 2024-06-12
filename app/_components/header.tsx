"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const scrolled = useScrollTop();
  return (
    <header
      className={cn(
        "container sticky top-0 py-6 flex z-10 w-full border-b border-zinc-700 dark:border-zinc-700 items-center text-lg bg-neutral-950 dark:bg-neutral-950 duration-300 ease-linear",
        scrolled && "opacity-80"
      )}
    >
      <Image src="/favicon.ico" alt="logo" width={30} height={30} className="mr-5"/>
      <Link href="/">
        <h1 className="text-2xl text-white dark:text-white font-bold ">Shinshi-pit</h1>
      </Link>
      
    </header>
  );
}

import { ChevronLeft } from "lucide-react";
import React, { FC } from "react";
import { ModeToggle } from "../../../_components/mode-toggle";
import Link from "next/link";

export default function PitFrame({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) {
  return (
    <section className="h-[84.5%] flex flex-col mx-6 box-border border rounded-[20px] border-zinc-700 bg-white dark:bg-zinc-950">
      <div className="container h-12 py-6 flex items-center justify-between rounded-t-[18.5px] bg-zinc-800 dark:bg-zinc-800">
        <Link href={"/"}>
          <ChevronLeft className="h-7 w-7 shrink-0 text-zinc-500" />
        </Link>

        <div className="text-zinc-400">{name}</div>
        <ModeToggle />
      </div>
      {children}
    </section>
  );
}

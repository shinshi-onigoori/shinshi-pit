import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="h-full my-4 flex flex-col justify-around items-center text-black dark:text-white">
      <h1>トップページ</h1>
      <Button className="mt-4" asChild>
        <Link href={"/pit/toolbar-navigation/about"}>アバウトページへ</Link>
      </Button>
      <div className="top-0 bg-rose-900 h-11 w-full"></div>
    </div>
  );
}

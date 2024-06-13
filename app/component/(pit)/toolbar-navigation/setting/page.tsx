import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function SettingPage() {
  return (
    <div className="h-full my-4 flex flex-col justify-around items-center text-black dark:text-white">
      <h1>セッティングページ</h1>
      <Button className="mt-4" asChild>
        <Link href={"/pit/toolbar-navigation"}>トップページへ</Link>
      </Button>
      <div className="top-0 bg-sky-900 h-11 w-full"></div>
    </div>
  );
}

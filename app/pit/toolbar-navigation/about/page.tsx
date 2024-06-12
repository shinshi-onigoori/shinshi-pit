import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <div className="my-4 flex flex-col justify-center items-center text-black dark:text-white">
      <h1>アバウトページ</h1>
      <Button className="mt-4" asChild>
        <Link href={"/pit/toolbar-navigation"}>トップページへ</Link>
      </Button>
    </div>
  );
}

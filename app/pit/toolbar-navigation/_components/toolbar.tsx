import { Button } from "@/components/ui/button";
import { Home, Music, Settings } from "lucide-react";
import Link from "next/link";
import ToolbarButton from "./toolbarButton";
import UserMenu from "./user-menu";

export default function SampleToolbar() {
  return (
    <div className="relative">
      <div className="absolute gap-2 bottom-8 left-1/2 backdrop-blur -translate-x-1/2 flex items-center border shadow-lg rounded-full p-2 bg-muted/30">
        <UserMenu />
        <ToolbarButton
          href={"/pit/toolbar-navigation"}
          icon={<Home />}
          title={"トップ"}
        />
        <ToolbarButton
          href={"/pit/toolbar-navigation/about"}
          icon={<Music />}
          title={"アバウト"}
        />
        <ToolbarButton
          href={"/pit/toolbar-navigation/setting"}
          icon={<Settings />}
          title={"セッティング"}
        />
      </div>
    </div>
  );
}

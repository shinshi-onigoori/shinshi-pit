import { AppWindowMac, Component, Home } from "lucide-react";
import ShinshiIntroIcon from "./shinshi-intro-icon";
import ToolbarButton from "./toolbarButton";

export default function Toolbar() {
  return (
    <div className="fixed gap-2 bottom-6 left-1/2 backdrop-blur -translate-x-1/2 flex items-center border shadow-lg rounded-full p-2 bg-black/5 border-zinc-800">
      <ShinshiIntroIcon />
      <ToolbarButton href={"/"} icon={<Home />} title={"トップ"} />
      <ToolbarButton
        href={"/component"}
        icon={<Component />}
        title={"アバウト"}
      />
      <ToolbarButton
        href={"/application"}
        icon={<AppWindowMac />}
        title={"アプリケション"}
      />
    </div>
  );
}

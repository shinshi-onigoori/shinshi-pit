import { Home } from "lucide-react";
import ShinshiIntroIcon from "./shinshi-intro-icon";
import ToolbarButton from "./toolbarButton";

export default function Toolbar() {
  return (
    <div className="fixed gap-2 bottom-6 left-1/2 backdrop-blur -translate-x-1/2 flex items-center border shadow-lg rounded-full p-2 bg-black border-zinc-800">
      <ShinshiIntroIcon />
      <ToolbarButton href={"/"} icon={<Home />} title={"トップ"} />
      {/* <ToolbarButton
          href={"/pit/toolbar-navigation/about"}
          icon={<Music />}
          title={"アバウト"}
        />
        <ToolbarButton
          href={"/pit/toolbar-navigation/setting"}
          icon={<Settings />}
          title={"セッティング"}
        /> */}
    </div>
  );
}

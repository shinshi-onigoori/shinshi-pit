import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function UserMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"icon"} variant="ghost" className="rounded-full">
          <Avatar>
            <AvatarImage
              src="https://pbs.twimg.com/media/EqPekgjUYAARCj0.jpg:large"
              alt="user icon"
              style={{ objectFit: "cover" }}
            />
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <p>
          アプリケーションのナビゲーションUIは、初期のコマンドラインから、1980年代のGUI（グラフィカルユーザーインターフェース）へと進化。1990年代にはウェブブラウザのメニューやタブが普及し、近年はモバイルアプリのジェスチャーや音声操作が主流となっていみたいだよ。
        </p>
      </PopoverContent>
    </Popover>
  );
}

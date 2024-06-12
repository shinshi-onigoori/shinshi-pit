import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function ShinshiIntroIcon() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"icon"} variant="ghost" className="rounded-full">
          <Avatar>
            <AvatarImage
              src="https://pbs.twimg.com/profile_images/1777688468765974528/wc1xd2ae_400x400.jpg"
              alt="user icon"
              style={{ objectFit: "cover" }}
            />
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-30">
        <p>
          お腹すいた
        </p>
      </PopoverContent>
    </Popover>
  );
}

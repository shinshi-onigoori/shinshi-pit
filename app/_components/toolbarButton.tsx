"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ToolbarButton({
  href,
  icon,
  title,
}: {
  href: string;
  icon: ReactNode;
  title: string;
}) {
  const pathname = usePathname();
  const IconSlot: LucideIcon = Slot as LucideIcon;

  return (
    <Button
      size={"icon"}
      variant={"ghost"}
      className={cn("rounded-full bg-black/5 hover:bg-zinc-800", href === pathname && "bg-zinc-900")}
      asChild
    >
      <Link href={href}>
        <IconSlot size={10} color="white">{icon}</IconSlot>
        <span className="sr-only">{title}</span>
      </Link>
    </Button>
  );
}

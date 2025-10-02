import { Loader2Icon, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeMenu } from "../ThemeMenu";
import { NavItemsT } from "@/types";
import { SidebarTrigger } from "./sidebar";

const Navbar = () => {
  const NavItems: NavItemsT[] = [
    { id: 1, label: "Profile", variant: "default", icon: User },
    { id: 2, label: "Settings", variant: "default", icon: Settings },
    { id: 3, label: "Logout", variant: "destructive", icon: LogOut },
  ];

  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
      {/* Left */}

      <SidebarTrigger />

      {/* Right */}
      <div className="flex items-center gap-4">
        <Link href={"/"}>Dashboard</Link>

        {/* THEME MENU */}

        <ThemeMenu />

        {/* USER MENU */}

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/salartalaa.png" />
              <AvatarFallback>
                <Loader2Icon className="animate-spin" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {NavItems.map((item) => (
              <DropdownMenuItem variant={item.variant} key={item.id}>
                <item.icon className="h-[1.2rem] w-[1.2rem] mr-2" />
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;

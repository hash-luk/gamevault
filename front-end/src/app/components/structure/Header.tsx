"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Gamepad2,
  Library,
  LogOutIcon,
  MoonIcon,
  Plus,
  Settings,
  User,
} from "lucide-react";

import { useMediaQuery } from "@/app/hooks/useMediaQuery";

export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gamepad2 className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">FlowMind</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button className="hover:cursor-pointer">
            <Plus className="text-white" />
            {!isMobile && <span>Add Game</span>}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="size-8">
                <Avatar className="hover:cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="rounded-full"
                  />
                  <AvatarFallback>UserName</AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-popover" align="center">
              <DropdownMenuItem>
                <User /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Library />
                My Games
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings /> Settings - Shortly
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Preferences</DropdownMenuLabel>
              <DropdownMenuItem className="justify-between">
                Theme
                <MoonIcon />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

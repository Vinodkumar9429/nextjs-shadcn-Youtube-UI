"use client"
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useTheme } from "next-themes";
import { Bell, Menu, Mic, Plus, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "./ui/sidebar";


const Header = () => {
  const { setTheme, theme } = useTheme();
  return (
    <nav className="flex justify-between px-6 py-2 sticky top-0 left-0 bg-background z-40">
      <div className="flex justify-center items-center">
            <SidebarTrigger className="w-10 h-10">
                <Menu />
            </SidebarTrigger>
        <Image 
        className="hidden md:w-full md:block"
        src={"/yt.png"} alt="Youtube Image" height={18} width={120} />
        <Image 
        className="flex md:w-full md:hidden h-12 w-16"
        src={"/yt1.png"} alt="Youtube Image" height={30} width={120} />
      </div>

      <div className="flex justify-center items-center gap-x-2 w-5/12">
        <InputGroup className="rounded-full h-12 pl-4 md:flex hidden">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon
            align={"inline-end"}
            className="bg-accent h-full w-20 rounded-r-full cursor-pointer"
          >
            <SearchIcon size={50} />
          </InputGroupAddon>
        </InputGroup>
            <SearchIcon size={24} className="block md:hidden" />


        <div className="rounded-full bg-accent h-12 w-14 justify-center items-center md:flex hidden">
          <Mic className="cursor-pointer" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-x-2">
        <div className="flex justify-center items-center gap-x-1 h-10 px-2 md:px-5 bg-accent rounded-full cursor-pointer">
          <Plus />
          <p className="md:block hidden">Create</p>
        </div>
        <div className="flex justify-center items-center gap-x-1 h-10 w-10 bg-accent rounded-full cursor-pointer">
          <Bell />
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60 mr-16 -mt-11">
              <DropdownMenuLabel>
                <div className="px-10 flex flex-col gap-y-3">
                  <div className="flex justify-between items-center">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div>
                      <p>My Account</p>
                      <p>@username</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-center text-indigo-500 cursor-pointer">
                      View your channel
                    </h1>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Google Account</DropdownMenuItem>
              <DropdownMenuItem>Switch account</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Youtube Studio</DropdownMenuItem>
              <DropdownMenuItem>Your Premium benefits</DropdownMenuItem>
              <DropdownMenuItem>Purchases and memberships</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Your data in Youtube</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Theme: {theme}</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem onClick={()=> setTheme("light")}>Light</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=> setTheme("dark")}>Dark</DropdownMenuItem>
                    <DropdownMenuItem onClick={()=> setTheme("system")}>System</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>Language</DropdownMenuItem>
              <DropdownMenuItem>Restricted Mode : On</DropdownMenuItem>
              <DropdownMenuItem>Location : India</DropdownMenuItem>
              <DropdownMenuItem>Keyboard shortcuts</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Header;

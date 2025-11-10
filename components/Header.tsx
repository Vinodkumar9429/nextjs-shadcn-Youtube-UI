import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Mic, Plus, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <nav className="flex justify-between px-4 pt-2">
      <div>
        <Image src={"/yt.png"} alt="Youtube Image" height={18} width={120} />
      </div>

      <div className="flex justify-center items-center gap-x-2 w-5/12">
        <InputGroup className="rounded-full h-12 pl-4">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon
            align={"inline-end"}
            className="bg-accent h-full w-20"
          >
            <SearchIcon size={50} />
          </InputGroupAddon>
        </InputGroup>

        <div className="rounded-full bg-accent h-12 w-14 flex justify-center items-center">
          <Mic />
        </div>
      </div>

      <div className="flex justify-center items-center gap-x-2">
        <div className="flex justify-center items-center gap-x-1 h-10 w-28 bg-accent rounded-full">
          <Plus />
          <p>Create</p>
        </div>
        <div className="flex justify-center items-center gap-x-1 h-10 w-10 bg-accent rounded-full">
          <Bell />
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
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
                    <h1 className="text-center text-indigo-500 cursor-pointer">View your channel</h1>
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
              <DropdownMenuItem>Appearance</DropdownMenuItem>
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

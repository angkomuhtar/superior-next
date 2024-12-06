import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

type User = {
  email: string;
  emailVerified: boolean;
  id: string;
  image?: string | null;
  name: string;
  role?: string | null;
  createdAt: any;
  updatedAt: any;
};

export function DropdownProfile({ data }: { data?: User }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='cursor-pointer'>
        <div className='flex items-center gap-2 py-5'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex flex-col items-start justify-center'>
            <h1 className='font-semibold text-sm capitalize'>{data?.name}</h1>
            <p className='font-inter font-semibold text-xs'>{data?.email}</p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-52 z-20'>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            "use server";
            await auth.api.signOut({
              headers: await headers(),
            });
            redirect("/");
          }}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

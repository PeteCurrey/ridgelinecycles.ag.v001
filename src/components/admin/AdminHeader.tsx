"use client";

import React from "react";
import { Bell, Search, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function AdminHeader() {
  const pathname = usePathname();
  const pageTitle = pathname.split("/").pop()?.replace("-", " ") || "Dashboard";

  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <h1 className="text-sm font-bold uppercase tracking-widest text-[#111827] capitalize">
          {pageTitle}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="Search dashboard..." 
            className="pl-10 pr-4 py-2 bg-gray-100 border-transparent rounded-full text-xs focus:bg-white focus:border-brand-accent transition-all outline-none w-64"
          />
        </div>

        <button className="p-2 text-gray-500 hover:text-brand-accent transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-accent rounded-full border-2 border-white" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-full pr-3">
              <div className="w-8 h-8 bg-brand-dark rounded-full flex items-center justify-center text-white text-xs font-bold">
                AU
              </div>
              <span className="text-xs font-bold text-gray-700 hidden sm:inline">Admin User</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>Staff Directory</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()} className="text-red-600">
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

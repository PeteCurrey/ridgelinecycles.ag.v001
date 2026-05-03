"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Tags, 
  TicketPercent, 
  Wrench, 
  Calendar, 
  Users, 
  Box, 
  Settings, 
  UserCog, 
  LogOut,
  ChevronLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "OVERVIEW", type: "header" },
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
  { label: "ECOMMERCE", type: "header" },
  { label: "Products", icon: Package, href: "/admin/products" },
  { label: "Orders", icon: ShoppingCart, href: "/admin/orders" },
  { label: "Categories & Brands", icon: Tags, href: "/admin/categories" },
  { label: "Discounts", icon: TicketPercent, href: "/admin/discounts" },
  { label: "WORKSHOP", type: "header" },
  { label: "Job Cards", icon: Wrench, href: "/admin/workshop/jobs" },
  { label: "Bookings Calendar", icon: Calendar, href: "/admin/workshop/bookings" },
  { label: "Customers", icon: Users, href: "/admin/customers" },
  { label: "Parts Inventory", icon: Box, href: "/admin/workshop/parts" },
  { label: "STORE", type: "header" },
  { label: "Settings", icon: Settings, href: "/admin/settings" },
  { label: "Staff Accounts", icon: UserCog, href: "/admin/staff" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] bg-[#111827] text-[#9CA3AF] flex flex-col h-screen fixed left-0 top-0 z-40">
      <div className="p-6">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <span className="text-xl font-display font-bold tracking-tight text-white">
            RIDGELINE<span className="text-brand-accent">ADMIN</span>
          </span>
        </Link>
      </div>

      <nav className="flex-grow overflow-y-auto px-4 py-2 custom-scrollbar">
        {menuItems.map((item, index) => {
          if (item.type === "header") {
            return (
              <div key={index} className="mt-6 mb-2 px-2 text-[10px] font-bold tracking-widest text-[#4B5563]">
                {item.label}
              </div>
            );
          }

          const isActive = pathname === item.href;
          const Icon = item.icon!;

          return (
            <Link
              key={index}
              href={item.href!}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all group",
                isActive 
                  ? "bg-[#1F2937] text-white" 
                  : "hover:bg-[#1F2937] hover:text-white"
              )}
            >
              <Icon size={18} className={cn(isActive ? "text-brand-accent" : "group-hover:text-brand-accent")} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#1F2937] space-y-2">
        <Link 
          href="/" 
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#1F2937] hover:text-white transition-all"
        >
          <ChevronLeft size={18} />
          View Live Site
        </Link>
        <button 
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-900/20 hover:text-red-400 transition-all text-red-500/80"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}

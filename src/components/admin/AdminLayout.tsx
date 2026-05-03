"use client";

import React from "react";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      <div className="flex-grow ml-[240px] flex flex-col">
        <AdminHeader />
        <main className="p-8 flex-grow">
          {children}
        </main>
      </div>
    </div>
  );
}

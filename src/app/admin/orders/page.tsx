"use client";

import React, { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Eye, Filter, Download } from "lucide-react";
import { orders } from "@/lib/orders";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AdminOrdersPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         order.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || order.status.toLowerCase() === activeTab.toLowerCase();
    return matchesSearch && matchesTab;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
            <TabsList className="bg-white border border-gray-200">
              <TabsTrigger value="all" className="text-xs font-bold uppercase tracking-widest">All</TabsTrigger>
              <TabsTrigger value="pending" className="text-xs font-bold uppercase tracking-widest">Pending</TabsTrigger>
              <TabsTrigger value="processing" className="text-xs font-bold uppercase tracking-widest">Processing</TabsTrigger>
              <TabsTrigger value="fulfilled" className="text-xs font-bold uppercase tracking-widest">Fulfilled</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Order # or customer..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:border-brand-accent transition-all outline-none"
              />
            </div>
            <Button variant="outline" size="icon">
               <Download size={18} className="text-gray-500" />
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="text-[10px] uppercase font-bold px-6">Order ID</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Date</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Customer</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Total</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Payment</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Status</TableHead>
                <TableHead className="w-[80px] px-6 text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id} className="group cursor-pointer hover:bg-gray-50/50">
                  <TableCell className="px-6 py-4 font-bold text-sm text-brand-dark">
                    {order.id}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs text-gray-500">
                    {new Date(order.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-gray-900">{order.customerName}</span>
                      <span className="text-[10px] text-gray-400 font-serif lowercase">{order.customerEmail}</span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm font-bold">
                    £{order.total.toLocaleString()}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        order.paymentStatus === "Paid" ? "bg-green-500" : "bg-amber-500"
                      )} />
                      <span className="text-[10px] font-bold text-gray-600 uppercase tracking-tighter">
                        {order.paymentStatus}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge variant="secondary" className={cn(
                      "text-[9px] uppercase font-bold border-none",
                      order.status === "Fulfilled" ? "bg-green-100 text-green-700" : 
                      order.status === "Processing" ? "bg-blue-100 text-blue-700" : 
                      "bg-amber-100 text-amber-700"
                    )}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-right">
                    <Link href={`/admin/orders/${order.id}`}>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-brand-accent">
                        <Eye size={16} />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}

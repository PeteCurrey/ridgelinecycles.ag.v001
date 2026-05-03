"use client";

import React from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Trash2, Calendar as CalendarIcon } from "lucide-react";
import { discountCodes } from "@/lib/discounts";
import { cn } from "@/lib/utils";

export default function AdminDiscountsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Marketing & Discounts</h2>
          <Button className="btn-primary bg-brand-accent hover:bg-opacity-90 flex items-center gap-2">
            <Plus size={18} />
            Create Code
          </Button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="text-[10px] uppercase font-bold px-6">Code</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Type</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Value</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Min Spend</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Usage</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Expires</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Status</TableHead>
                <TableHead className="w-[50px] px-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {discountCodes.map((discount) => (
                <TableRow key={discount.id} className="hover:bg-gray-50/50 group">
                  <TableCell className="px-6 py-4">
                    <span className="font-mono font-black text-sm bg-gray-100 px-3 py-1 rounded border border-gray-200 text-brand-dark">
                      {discount.code}
                    </span>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs font-medium text-gray-600">{discount.type}</TableCell>
                  <TableCell className="px-6 py-4 font-bold text-sm">
                    {discount.type === "Percentage" ? `${discount.value}%` : `£${discount.value}`}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs text-gray-500">
                    {discount.minSpend > 0 ? `£${discount.minSpend}` : "None"}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                     <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold">{discount.usageCount} / {discount.usageLimit}</span>
                        <div className="w-24 h-1 bg-gray-100 rounded-full overflow-hidden">
                           <div 
                              className="h-full bg-brand-accent transition-all" 
                              style={{ width: `${(discount.usageCount / discount.usageLimit) * 100}%` }}
                           />
                        </div>
                     </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                     <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase">
                        <CalendarIcon size={12} className="text-gray-400" />
                        {new Date(discount.expiryDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                     </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge className={cn(
                      "text-[9px] uppercase font-bold border-none",
                      discount.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                    )}>
                      {discount.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity text-red-500 hover:bg-red-50 hover:text-red-600">
                      <Trash2 size={16} />
                    </Button>
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

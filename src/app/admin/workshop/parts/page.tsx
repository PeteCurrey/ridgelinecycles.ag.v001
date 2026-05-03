"use client";

import React from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, AlertTriangle, RefreshCcw } from "lucide-react";
import { parts } from "@/lib/parts";
import { cn } from "@/lib/utils";

export default function AdminPartsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Inventory Status</h2>
          <div className="flex gap-3">
             <Button variant="outline" size="sm" className="flex items-center gap-2">
                <RefreshCcw size={14} />
                Sync Inventory
             </Button>
             <Button className="btn-primary bg-brand-accent hover:bg-opacity-90 flex items-center gap-2 h-9 px-4 text-xs">
                <Plus size={16} />
                Add Part
             </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="text-[10px] uppercase font-bold px-6">Part Name</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">SKU</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Supplier</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Cost</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Stock Level</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {parts.map((part) => {
                const isLow = part.inStock <= part.reorderLevel;
                return (
                  <TableRow key={part.id} className="hover:bg-gray-50/50">
                    <TableCell className="px-6 py-4 font-bold text-sm">{part.name}</TableCell>
                    <TableCell className="px-6 py-4">
                       <code className="text-[10px] bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono">{part.sku}</code>
                    </TableCell>
                    <TableCell className="px-6 py-4 text-xs text-gray-500">{part.supplier}</TableCell>
                    <TableCell className="px-6 py-4 text-sm font-medium">£{part.unitCost.toFixed(2)}</TableCell>
                    <TableCell className="px-6 py-4">
                       <div className="flex items-center gap-2">
                          <span className={cn("font-bold text-sm", isLow ? "text-amber-600" : "text-gray-900")}>
                            {part.inStock}
                          </span>
                          <span className="text-[10px] text-gray-400 font-serif">/ min {part.reorderLevel}</span>
                       </div>
                    </TableCell>
                    <TableCell className="px-6 py-4">
                       {isLow ? (
                         <Badge className="bg-amber-100 text-amber-700 text-[8px] font-bold uppercase border-none flex items-center gap-1 w-fit">
                            <AlertTriangle size={10} /> Reorder Soon
                         </Badge>
                       ) : (
                         <Badge className="bg-green-100 text-green-700 text-[8px] font-bold uppercase border-none w-fit">
                            Healthy
                         </Badge>
                       )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}

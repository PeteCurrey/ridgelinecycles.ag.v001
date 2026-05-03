"use client";

import React, { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Search, UserPlus, Mail, Phone, ExternalLink } from "lucide-react";
import { customers } from "@/lib/customers";

export default function AdminCustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = customers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search customers by name, email or phone..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:border-brand-accent transition-all outline-none"
            />
          </div>
          <Button className="btn-primary bg-brand-accent hover:bg-opacity-90 flex items-center gap-2">
            <UserPlus size={18} />
            Add Customer
          </Button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="text-[10px] uppercase font-bold px-6">Customer</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Contact</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Bikes</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6">Last Visit</TableHead>
                <TableHead className="text-[10px] uppercase font-bold px-6 text-right">Total Spend</TableHead>
                <TableHead className="w-[50px] px-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id} className="hover:bg-gray-50/50 group">
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                        {customer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-900">{customer.name}</span>
                        <span className="text-[10px] text-gray-400 font-serif lowercase">{customer.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Phone size={12} className="text-gray-400" />
                        {customer.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <div className="flex flex-col gap-0.5">
                      {customer.bikes.map((bike, i) => (
                        <span key={i} className="text-xs font-medium text-gray-700">
                          {bike.make} {bike.model}
                        </span>
                      ))}
                      {customer.bikes.length === 0 && <span className="text-xs text-gray-400 italic">No bikes registered</span>}
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-xs text-gray-500">
                    {new Date(customer.lastVisit).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-right font-bold text-sm">
                    £{customer.totalSpend.toLocaleString()}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink size={14} className="text-gray-400 hover:text-brand-accent" />
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

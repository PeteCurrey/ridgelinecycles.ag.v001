"use client";

import React from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  ShoppingBag, 
  Wrench, 
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { orders } from "@/lib/orders";
import { jobs } from "@/lib/jobs";
import { cn } from "@/lib/utils";

const revenueData = [
  { name: "01 May", revenue: 1200 },
  { name: "02 May", revenue: 2100 },
  { name: "03 May", revenue: 1500 },
  { name: "04 May", revenue: 2800 },
  { name: "05 May", revenue: 1900 },
  { name: "06 May", revenue: 2400 },
  { name: "07 May", revenue: 3100 },
];

const categoryData = [
  { name: "Road", orders: 45 },
  { name: "MTB", orders: 32 },
  { name: "Gravel", orders: 28 },
  { name: "E-Bike", orders: 15 },
  { name: "Kids", orders: 10 },
];

export default function DashboardPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-widest text-gray-500">Today's Revenue</CardTitle>
              <TrendingUp size={16} className="text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">£1,247.00</div>
              <p className="text-[10px] text-green-600 font-bold flex items-center gap-1 mt-1">
                <ArrowUpRight size={12} /> 12% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-widest text-gray-500">Orders Today</CardTitle>
              <ShoppingBag size={16} className="text-brand-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-[10px] text-gray-500 mt-1">
                3 pending fulfillment
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-widest text-gray-500">Active Workshop Jobs</CardTitle>
              <Wrench size={16} className="text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-[10px] text-gray-500 mt-1">
                2 ready for collection
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm border-l-4 border-l-amber-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-widest text-gray-500">Low Stock Alerts</CardTitle>
              <AlertTriangle size={16} className="text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-[10px] text-amber-600 font-bold mt-1">
                Action required
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm font-bold">Revenue Last 7 Days</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis fontSize={10} axisLine={false} tickLine={false} tickFormatter={(value) => `£${value}`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    formatter={(value) => [`£${value}`, 'Revenue']}
                  />
                  <Line type="monotone" dataKey="revenue" stroke="#D64B2A" strokeWidth={3} dot={{ fill: '#D64B2A' }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm font-bold">Orders by Category</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
                  <YAxis fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                  <Bar dataKey="orders" fill="#111827" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity Table Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm font-bold">Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-[10px] uppercase font-bold">Order #</TableHead>
                    <TableHead className="text-[10px] uppercase font-bold">Customer</TableHead>
                    <TableHead className="text-[10px] uppercase font-bold">Total</TableHead>
                    <TableHead className="text-[10px] uppercase font-bold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.slice(0, 5).map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium text-xs">{order.id}</TableCell>
                      <TableCell className="text-xs">{order.customerName}</TableCell>
                      <TableCell className="text-xs font-bold">£{order.total}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={cn(
                          "text-[9px] uppercase font-bold",
                          order.status === "Fulfilled" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                        )}>
                          {order.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm font-bold">Today's Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobs.slice(0, 4).map((job) => (
                  <div key={job.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="text-xs font-bold">{job.bike}</p>
                      <p className="text-[10px] text-gray-500 font-serif">{job.customerName} • {job.mechanic.split(' ')[0]}</p>
                    </div>
                    <Badge className="text-[9px] font-bold h-5 px-2 bg-gray-100 text-gray-700 border-none">
                      {job.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}

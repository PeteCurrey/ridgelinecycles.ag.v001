"use client";

import React from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Save } from "lucide-react";

export default function AdminSettingsPage() {
  const handleSave = () => {
    toast.success("Settings saved successfully");
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-display font-bold text-brand-dark">Store Settings</h2>
            <p className="text-sm text-gray-500 font-serif">Manage your shop's public information and preferences.</p>
          </div>
          <Button onClick={handleSave} className="btn-primary bg-brand-accent flex items-center gap-2">
            <Save size={18} />
            Save Changes
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-none shadow-sm md:col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-gray-500">General Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="shop-name">Shop Name</Label>
                  <Input id="shop-name" defaultValue="Ridgeline Cycles" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input id="tagline" defaultValue="Peak performance. Local knowledge." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Public Email</Label>
                  <Input id="email" type="email" defaultValue="hello@ridgelinecycles.co.uk" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="01629 812345" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <textarea 
                  id="address" 
                  className="w-full min-h-[80px] p-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent"
                  defaultValue="Bridge Street, Bakewell, Peak District, DE45 1DS"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-gray-500">Notifications</CardTitle>
              <CardDescription className="text-[10px] font-serif">Configure dashboard alerts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="low-stock" className="flex flex-col gap-1">
                  <span className="text-sm font-bold">Low Stock Alerts</span>
                  <span className="text-[10px] text-gray-400 font-normal">Notify when stock falls below 3 units.</span>
                </Label>
                <Switch id="low-stock" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="new-orders" className="flex flex-col gap-1">
                  <span className="text-sm font-bold">New Order Alerts</span>
                  <span className="text-[10px] text-gray-400 font-normal">Sound a notification for each new sale.</span>
                </Label>
                <Switch id="new-orders" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="workshop" className="flex flex-col gap-1">
                  <span className="text-sm font-bold">Workshop Job Updates</span>
                  <span className="text-[10px] text-gray-400 font-normal">Alert when a mechanic finishes a job.</span>
                </Label>
                <Switch id="workshop" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-gray-500">Workshop Capacity</CardTitle>
              <CardDescription className="text-[10px] font-serif">Daily service slot management.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="space-y-2">
                  <Label htmlFor="slots">Daily Booking Slots</Label>
                  <Input id="slots" type="number" defaultValue="8" />
               </div>
               <div className="flex items-center justify-between">
                <Label htmlFor="auto-confirm" className="text-sm font-bold">Auto-confirm Bookings</Label>
                <Switch id="auto-confirm" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}

"use client";

import React, { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const currentMonth = "May 2026";

// Dummy bookings
const bookings = [
  { day: 3, time: "09:00", customer: "Sarah Jenkins", service: "Gold Service" },
  { day: 3, time: "11:00", customer: "Mark Davies", service: "Bronze Service" },
  { day: 4, time: "10:30", customer: "Alice Thompson", service: "Silver Service" },
  { day: 7, time: "14:00", customer: "Tom Brown", service: "Custom Repair" },
];

export default function AdminBookingsPage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(3);

  const dayBookings = bookings.filter(b => b.day === selectedDay);

  return (
    <AdminLayout>
      <div className="flex flex-col lg:flex-row gap-8 h-full">
        {/* Calendar Column */}
        <div className="flex-grow space-y-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-display font-bold text-brand-dark">{currentMonth}</h2>
            <div className="flex items-center gap-2">
               <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <button className="p-2 hover:bg-gray-50 transition-colors border-r"><ChevronLeft size={16} /></button>
                  <button className="p-2 hover:bg-gray-50 transition-colors"><ChevronRight size={16} /></button>
               </div>
               <Button className="btn-primary bg-brand-accent hover:bg-opacity-90 flex items-center gap-2">
                  <Plus size={16} />
                  New Booking
               </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-7 border-b">
              {days.map(day => (
                <div key={day} className="py-4 text-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {Array.from({ length: 31 }).map((_, i) => {
                const day = i + 1;
                const hasBookings = bookings.some(b => b.day === day);
                const isSelected = selectedDay === day;

                return (
                  <div 
                    key={day} 
                    onClick={() => setSelectedDay(day)}
                    className={cn(
                      "h-32 border-r border-b p-2 cursor-pointer transition-all hover:bg-gray-50/50 flex flex-col gap-1",
                      isSelected && "bg-brand-bg/30 ring-2 ring-brand-accent ring-inset z-10",
                      (i + 1) % 7 === 0 && "border-r-0"
                    )}
                  >
                    <span className={cn(
                      "text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full mb-1",
                      isSelected ? "bg-brand-accent text-white" : "text-gray-500"
                    )}>
                      {day}
                    </span>
                    <div className="flex flex-col gap-1 overflow-hidden">
                       {bookings.filter(b => b.day === day).map((b, idx) => (
                         <div key={idx} className="text-[8px] bg-brand-dark/5 text-brand-dark px-1.5 py-0.5 rounded truncate font-bold uppercase tracking-tighter">
                            {b.time} - {b.customer.split(' ')[1] || b.customer}
                         </div>
                       ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Details Panel */}
        <div className="w-full lg:w-[350px] shrink-0">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm h-fit sticky top-32">
            <h3 className="text-xl font-display font-bold mb-2">Bookings for {selectedDay} May</h3>
            <p className="text-xs text-gray-400 font-serif mb-8">{dayBookings.length} total services scheduled</p>
            
            <div className="space-y-6">
              {dayBookings.length > 0 ? (
                dayBookings.map((b, i) => (
                  <div key={i} className="group relative pl-6 border-l-2 border-brand-accent/20 hover:border-brand-accent transition-all pb-6 last:pb-0">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-brand-accent" />
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-gray-900">{b.time}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent">{b.service}</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-700">{b.customer}</h4>
                    <div className="flex items-center gap-4 mt-3 opacity-60">
                       <div className="flex items-center gap-1 text-[10px] font-bold">
                          <Clock size={12} />
                          60 min
                       </div>
                       <div className="flex items-center gap-1 text-[10px] font-bold">
                          <MapPin size={12} />
                          Main Workshop
                       </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                    <CalendarIcon size={24} />
                  </div>
                  <p className="text-xs text-gray-400 font-serif italic">No bookings found for this day.</p>
                </div>
              )}
            </div>

            <div className="mt-12 pt-8 border-t">
               <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Workshop Capacity</span>
                  <span className="text-xs font-bold text-brand-dark">{dayBookings.length} / 8 slots</span>
               </div>
               <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-brand-accent transition-all" 
                    style={{ width: `${(dayBookings.length / 8) * 100}%` }}
                  />
               </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

function CalendarIcon({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

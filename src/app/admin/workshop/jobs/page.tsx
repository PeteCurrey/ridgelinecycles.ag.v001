"use client";

import React, { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { jobs as initialJobs, JobCard } from "@/lib/jobs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Search, Calendar, User, MoreVertical, List, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const COLUMNS = [
  "Booked In",
  "Diagnostics",
  "In Progress",
  "Awaiting Parts",
  "Ready to Collect",
  "Collected"
];

export default function WorkshopJobsPage() {
  const [jobs, setJobs] = useState<JobCard[]>(initialJobs);
  const [view, setView] = useState<"kanban" | "table">("kanban");

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;
    
    if (source.droppableId === destination.droppableId) return;

    const newStatus = destination.droppableId as JobCard["status"];
    
    setJobs(prevJobs => prevJobs.map(job => 
      job.id === draggableId ? { ...job, status: newStatus } : job
    ));

    toast.success(`Job ${draggableId} moved to ${newStatus}`);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 h-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4">
             <div className="flex items-center bg-white border border-gray-200 rounded-lg p-1">
                <button 
                  onClick={() => setView("kanban")}
                  className={cn("p-1.5 rounded-md transition-all", view === "kanban" ? "bg-gray-100 text-brand-dark" : "text-gray-400")}
                >
                  <LayoutGrid size={18} />
                </button>
                <button 
                  onClick={() => setView("table")}
                  className={cn("p-1.5 rounded-md transition-all", view === "table" ? "bg-gray-100 text-brand-dark" : "text-gray-400")}
                >
                  <List size={18} />
                </button>
             </div>
             <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search jobs..." 
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:border-brand-accent transition-all outline-none"
                />
             </div>
          </div>

          <Button className="btn-primary bg-brand-accent hover:bg-opacity-90 flex items-center gap-2">
            <Plus size={18} />
            New Job Card
          </Button>
        </div>

        {view === "kanban" ? (
          <div className="flex-grow overflow-x-auto pb-4 custom-scrollbar">
            <DragDropContext onDragEnd={onDragEnd}>
              <div className="flex gap-4 h-full min-w-[1200px]">
                {COLUMNS.map((colName) => (
                  <div key={colName} className="flex-1 min-w-[200px] flex flex-col gap-4">
                    <div className="flex items-center justify-between px-2">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                        {colName}
                        <span className="ml-2 text-gray-300 font-normal">
                          ({jobs.filter(j => j.status === colName).length})
                        </span>
                      </h3>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Plus size={14} />
                      </button>
                    </div>

                    <Droppable droppableId={colName}>
                      {(provided, snapshot) => (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className={cn(
                            "flex-grow bg-gray-100/50 rounded-xl p-2 transition-colors min-h-[500px]",
                            snapshot.isDraggingOver && "bg-gray-200/50"
                          )}
                        >
                          {jobs
                            .filter((job) => job.status === colName)
                            .map((job, index) => (
                              <Draggable key={job.id} draggableId={job.id} index={index}>
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={cn(
                                      "bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-3 group hover:border-brand-accent transition-all",
                                      snapshot.isDragging && "shadow-xl ring-2 ring-brand-accent border-brand-accent"
                                    )}
                                  >
                                    <div className="flex justify-between items-start mb-2">
                                      <span className="text-[10px] font-bold text-brand-accent uppercase tracking-tighter">
                                        {job.id}
                                      </span>
                                      <button className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">
                                        <MoreVertical size={14} />
                                      </button>
                                    </div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-1 leading-tight">{job.bike}</h4>
                                    <p className="text-[11px] text-gray-500 mb-4 font-serif">{job.customerName}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4">
                                      <Badge variant="outline" className="text-[8px] font-bold uppercase tracking-tighter h-5 px-1.5 border-gray-200 text-gray-500">
                                        {job.serviceType}
                                      </Badge>
                                    </div>

                                    <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                                       <div className="flex items-center gap-1.5 text-gray-400">
                                          <User size={12} />
                                          <span className="text-[10px] font-medium">{job.mechanic.split(' ')[0]}</span>
                                       </div>
                                       <div className={cn(
                                         "flex items-center gap-1 text-[10px] font-bold",
                                         new Date(job.dueDate) < new Date() ? "text-red-500" : "text-gray-400"
                                       )}>
                                          <Calendar size={12} />
                                          <span>{new Date(job.dueDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</span>
                                       </div>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                ))}
              </div>
            </DragDropContext>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
             {/* Simple table view fallback */}
             <div className="p-12 text-center text-gray-400 italic">Table view coming soon...</div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

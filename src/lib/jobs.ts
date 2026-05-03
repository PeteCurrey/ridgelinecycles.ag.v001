export type JobCard = {
  id: string;
  customerName: string;
  bike: string; // "Make Model"
  serviceType: "Bronze" | "Silver" | "Gold" | "Custom";
  mechanic: string;
  status: "Booked In" | "Diagnostics" | "In Progress" | "Awaiting Parts" | "Ready to Collect" | "Collected";
  dueDate: string;
  quotedPrice: number;
  workLog: { timestamp: string; note: string; author: string }[];
  partsUsed: { partId: string; name: string; quantity: number; price: number }[];
};

export const jobs: JobCard[] = [
  {
    id: "JOB-5001",
    customerName: "Alice Thompson",
    bike: "Trek Domane AL 4",
    serviceType: "Bronze",
    mechanic: "Dave Harrison",
    status: "In Progress",
    dueDate: "2026-05-04",
    quotedPrice: 45,
    workLog: [{ timestamp: "2026-05-03T10:00:00Z", note: "Bike received. Beginning safety check.", author: "Dave Harrison" }],
    partsUsed: []
  },
  {
    id: "JOB-5002",
    customerName: "Robert Miller",
    bike: "Specialized Stumpjumper",
    serviceType: "Silver",
    mechanic: "Mark Wilson",
    status: "Diagnostics",
    dueDate: "2026-05-05",
    quotedPrice: 85,
    workLog: [],
    partsUsed: []
  },
  {
    id: "JOB-5003",
    customerName: "Tom Brown",
    bike: "Giant Reign",
    serviceType: "Gold",
    mechanic: "Mark Wilson",
    status: "Awaiting Parts",
    dueDate: "2026-05-07",
    quotedPrice: 145,
    workLog: [{ timestamp: "2026-05-03T14:00:00Z", note: "Bottom bracket needs replacement. Part ordered.", author: "Mark Wilson" }],
    partsUsed: []
  },
  {
    id: "JOB-5004",
    customerName: "Emma Lou",
    bike: "Cannondale Synapse",
    serviceType: "Bronze",
    mechanic: "Dave Harrison",
    status: "Ready to Collect",
    dueDate: "2026-05-03",
    quotedPrice: 45,
    workLog: [{ timestamp: "2026-05-03T09:00:00Z", note: "Service complete. Brakes adjusted.", author: "Dave Harrison" }],
    partsUsed: []
  }
];

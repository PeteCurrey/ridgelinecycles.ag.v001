export type Order = {
  id: string;
  date: string;
  customerName: string;
  customerEmail: string;
  items: { productId: string; name: string; quantity: number; price: number }[];
  total: number;
  status: "Pending" | "Processing" | "Fulfilled" | "Cancelled";
  paymentStatus: "Paid" | "Unpaid" | "Refunded";
  address: string;
};

export const orders: Order[] = [
  {
    id: "ORD-1001",
    date: "2026-05-01T10:30:00Z",
    customerName: "Alice Thompson",
    customerEmail: "alice@example.com",
    items: [{ productId: "trek-domane-al-4", name: "Domane AL 4", quantity: 1, price: 1700 }],
    total: 1700,
    status: "Fulfilled",
    paymentStatus: "Paid",
    address: "12 Church Lane, Bakewell, DE45 1EL"
  },
  {
    id: "ORD-1002",
    date: "2026-05-02T14:15:00Z",
    customerName: "Robert Miller",
    customerEmail: "robert.miller@example.co.uk",
    items: [
      { productId: "hiplok-d1000", name: "Hiplok D1000", quantity: 1, price: 250 },
      { productId: "met-trenta-3k", name: "MET Trenta 3K", quantity: 1, price: 270 }
    ],
    total: 520,
    status: "Processing",
    paymentStatus: "Paid",
    address: "45 Matlock Road, Bakewell, DE45 1GH"
  },
  {
    id: "ORD-1003",
    date: "2026-05-03T09:00:00Z",
    customerName: "Sarah Jenkins",
    customerEmail: "s.jenkins@testmail.com",
    items: [{ productId: "orbea-terra-h30", name: "Terra H30", quantity: 1, price: 2299 }],
    total: 2299,
    status: "Pending",
    paymentStatus: "Paid",
    address: "8 Bridge Street, Bakewell, DE45 1DS"
  },
  {
    id: "ORD-1004",
    date: "2026-04-28T16:45:00Z",
    customerName: "James Wilson",
    customerEmail: "james.wilson@me.com",
    items: [{ productId: "specialized-tarmac-sl8", name: "Tarmac SL8", quantity: 1, price: 6000 }],
    total: 6000,
    status: "Fulfilled",
    paymentStatus: "Paid",
    address: "21 King Street, Bakewell, DE45 1DZ"
  },
  {
    id: "ORD-1005",
    date: "2026-05-03T11:20:00Z",
    customerName: "Mark Davies",
    customerEmail: "mark.davies@company.org",
    items: [{ productId: "trek-fuel-ex-8", name: "Fuel EX 8", quantity: 1, price: 3850 }],
    total: 3850,
    status: "Pending",
    paymentStatus: "Unpaid",
    address: "5 Station Road, Bakewell, DE45 1GA"
  }
  // ... more orders can be added as needed
];

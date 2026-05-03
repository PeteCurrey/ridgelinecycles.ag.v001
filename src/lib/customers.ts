export type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  bikes: { make: string; model: string; year?: string; serial?: string }[];
  totalSpend: number;
  lastVisit: string;
};

export const customers: Customer[] = [
  {
    id: "CUST-001",
    name: "Alice Thompson",
    email: "alice@example.com",
    phone: "07700 900123",
    address: "12 Church Lane, Bakewell, DE45 1EL",
    bikes: [{ make: "Trek", model: "Domane AL 4", year: "2024" }],
    totalSpend: 1700,
    lastVisit: "2026-05-01"
  },
  {
    id: "CUST-002",
    name: "Robert Miller",
    email: "robert.miller@example.co.uk",
    phone: "07700 900456",
    address: "45 Matlock Road, Bakewell, DE45 1GH",
    bikes: [{ make: "Specialized", model: "Stumpjumper", year: "2022" }],
    totalSpend: 520,
    lastVisit: "2026-05-02"
  },
  {
    id: "CUST-003",
    name: "Sarah Jenkins",
    email: "s.jenkins@testmail.com",
    phone: "07700 900789",
    address: "8 Bridge Street, Bakewell, DE45 1DS",
    bikes: [{ make: "Orbea", model: "Terra H30", year: "2024" }],
    totalSpend: 2299,
    lastVisit: "2026-05-03"
  }
  // ... more customers can be added
];

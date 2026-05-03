export type Part = {
  id: string;
  name: string;
  sku: string;
  supplier: string;
  inStock: number;
  reorderLevel: number;
  unitCost: number;
};

export const parts: Part[] = [
  { id: "P-001", name: "Shimano 10-speed Chain", sku: "SHI-CH-10", supplier: "Madison", inStock: 15, reorderLevel: 5, unitCost: 18.50 },
  { id: "P-002", name: "Brake Pads - Shimano Disc", sku: "SHI-BP-D", supplier: "Madison", inStock: 24, reorderLevel: 10, unitCost: 12.00 },
  { id: "P-003", name: "Inner Tube - 700x25-32", sku: "TUBE-700", supplier: "Extra", inStock: 48, reorderLevel: 20, unitCost: 4.50 },
  { id: "P-004", name: "Gear Cable Inner", sku: "CAB-G-IN", supplier: "Madison", inStock: 30, reorderLevel: 10, unitCost: 2.00 },
  { id: "P-005", name: "Shimano 11-speed Cassette", sku: "SHI-CAS-11", supplier: "Madison", inStock: 3, reorderLevel: 5, unitCost: 45.00 }, // Low stock
  { id: "P-006", name: "Hydraulic Brake Fluid (1L)", sku: "FLUID-HYD", supplier: "Madison", inStock: 2, reorderLevel: 2, unitCost: 15.00 } // Low stock
  // ... more parts
];

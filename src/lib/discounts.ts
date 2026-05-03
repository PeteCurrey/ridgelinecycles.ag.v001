export type DiscountCode = {
  id: string;
  code: string;
  type: "Percentage" | "Fixed";
  value: number;
  minSpend: number;
  usageCount: number;
  usageLimit: number;
  expiryDate: string;
  status: "Active" | "Expired" | "Disabled";
};

export const discountCodes: DiscountCode[] = [
  { id: "DISC-001", code: "PEAK10", type: "Percentage", value: 10, minSpend: 50, usageCount: 45, usageLimit: 100, expiryDate: "2026-12-31", status: "Active" },
  { id: "DISC-002", code: "WELCOME25", type: "Fixed", value: 25, minSpend: 200, usageCount: 12, usageLimit: 50, expiryDate: "2026-06-30", status: "Active" },
  { id: "DISC-003", code: "SPRINGSALE", type: "Percentage", value: 15, minSpend: 0, usageCount: 150, usageLimit: 200, expiryDate: "2026-05-31", status: "Active" }
];

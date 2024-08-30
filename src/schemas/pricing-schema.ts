import { z } from "zod";

// Define the schema using Zod
export const pricingSchema = z.object({
  category: z.string().min(1, "Category is required"),
  minimumBudget: z
    .string()
    .min(1, "Minimum Budget is required")
    .regex(/^\d+$/, "Minimum Budget must be a number"),
});

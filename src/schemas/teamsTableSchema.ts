import { z } from "zod";

// Define the schema using Zod
export const teamsTableSchema = z.object({
  name: z.string().min(1, " Name is required"),
  position: z.string().min(1, "Staus is required"),
  types: z.string().min(1, "amount invested is required"),
  rights: z.string().min(1, "date of investment is required"),
});

import { z } from "zod";

// Define the schema using Zod
export const descriptionSchema = z.object({
  description: z.string().min(1, "Service Title is required"),
});

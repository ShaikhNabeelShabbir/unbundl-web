import { z } from "zod";

// Define the schema using Zod
export const linkSchema = z.object({
  links: z.string().min(1, "Service Title is required"),
});

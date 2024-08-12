import { z } from "zod";

// Define the schema using Zod
export const skillsSchema = z.object({
  previousClients: z.string().min(1, "Service Title is required"),
  skills: z.string().min(1, "Category is required"),
  languages: z.string().min(1, "Tags are required"),
  portfolioLinks: z.string().min(1, "Tags are required"),
});

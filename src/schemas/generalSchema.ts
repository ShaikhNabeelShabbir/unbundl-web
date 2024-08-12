import { z } from "zod";

export const generalSchema = z.object({
  name: z.string().min(1, "Service Title is required"),
  country: z.string().min(1, "Category is required"),
  city: z.string().min(1, "Tags are required"),
  linkedin: z.string().min(1, "Tags are required"),
});

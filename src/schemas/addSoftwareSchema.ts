import { z } from "zod";

export const addSoftwareSchema = z.object({
  softwareLink: z.string().min(1, "Service Title is required"),
  category: z.string().min(1, "Tags are required"),
  months: z.string().min(1, "Tags are required"),
});

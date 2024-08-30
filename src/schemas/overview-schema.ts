import { z } from "zod";

export const overviewSchema = z.object({
  serviceTitle: z.string().min(1, "Service Title is required"),
  category: z.string().min(1, "Category is required"),
  tags: z.string().min(1, "Tags are required"),
});

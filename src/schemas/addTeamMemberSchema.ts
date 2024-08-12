import { z } from "zod";

export const addTeamMemberSchema = z.object({
  name: z.string().min(1, "Service Title is required"),
  position: z.string().min(1, "Category is required"),
  type: z.string().min(1, "Tags are required"),
  right: z.string().min(1, "Tags are required"),
});

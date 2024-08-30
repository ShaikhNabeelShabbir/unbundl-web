import { z } from "zod";

export const ExperienceSchema = z.object({
  wantedPosition: z.string().min(1, "Service Title is required"),
  expectedSalary: z.number().min(1, "Category is required"),
  tags: z.string().min(1, "Tags are required"),
  workExperince: z.string().min(1, "Tags are required"),
  education: z.string().min(1, "Tags are required"),
  aboutYou: z.string().min(1, "Tags are required"),
  languages: z.string().min(1, "Tags are required"),
  relocate: z.string().min(1, "Tags are required"),
});

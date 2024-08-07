import { z } from "zod";

export const projectInformationSchema = z.object({
  problem: z.string().min(1, "Problem description is required"),
  startReason: z.string().min(1, "Reason for starting is required"),
  startDate: z.string().min(1, "Start date is required"),
  projectDescription: z.string().min(1, "Project description is required"),
  demoLink: z.string().url("Must be a valid URL"),
});
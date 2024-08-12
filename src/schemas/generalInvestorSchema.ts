import { z } from "zod";

export const generalInvestorSchema = z.object({
  fundName: z.string().min(1, "Company name is required"),
  fundLegalName: z.string().min(1, "Project description is required"),
  websiteLink: z.string().url("Must be a valid URL"),
  description: z.string().min(1, "Chain is required"),
  location: z.string().min(1, "Category is required"),
});

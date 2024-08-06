import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  role: z.string().min(1, { message: "Role is required." }),
});

export const generalCompanySchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  projectDescription: z.string().min(1, "Project description is required"),
  websiteLink: z.string().url("Must be a valid URL"),
  chain: z.string().min(1, "Chain is required"),
  category: z.string().min(1, "Category is required"),
  developmentStage: z.string().min(1, "Development stage is required"),
  teamSize: z.string().min(1, "Team size is required"),
  usefulLinks: z.string().optional(),
  calendlyLink: z.string().url("Must be a valid URL").optional(),
  timezone: z.string().min(1, "Timezone is required"),
});

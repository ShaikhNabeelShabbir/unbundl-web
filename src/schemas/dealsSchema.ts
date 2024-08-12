import { z } from "zod";

export const dealsSchema = z.object({
  investmentThesis: z.string().min(1, "Fundraising status is required"),
  dealsSource: z.string().min(1, "Token status is required"),
  programm: z.string().min(1, "Financing stage is required"),
  fundSize: z.number().min(1, "VC backers are required"),
  months: z.number().min(1, "Ticket size is required"),
  uniqueLPS: z.number().min(1, "Ticket size is required"),
  stages: z.string().min(1, "Financing stage is required"),
});

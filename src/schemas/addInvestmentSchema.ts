import { z } from "zod";

// Define the schema using Zod
export const addInvestmentSchema = z.object({
  companyName: z.string().min(1, "Company Name is required"),
  companyWebsite: z.string().min(1, "Company Name is required"),
  personEmail: z.string().min(1, "Company Name is required"),
  amountInvested: z.number().min(1, "Company Name is required"),
  dateofInvestment: z.string().min(1, "Company Name is required"),
  investmentRound: z.string().min(1, "Company Name is required"),
});

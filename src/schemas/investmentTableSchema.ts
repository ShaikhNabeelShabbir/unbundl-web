import { z } from "zod";

// Define the schema using Zod
export const addInvestmentTableSchema = z.object({
  companyName: z.string().min(1, "Company Name is required"),
  status: z.string().min(1, "Staus is required"),
  amountInvested: z.string().min(1, "amount invested is required"),
  dateofInvestment: z.string().min(1, "date of investment is required"),
  investmentRound: z.string().min(1, "investment round is required"),
});

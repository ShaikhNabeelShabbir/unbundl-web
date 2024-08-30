import { z } from "zod";

export const fundraisingSchema = z.object({
  fundraisingStatus: z.string().min(1, "Fundraising status is required"),
  tokenStatus: z.string().min(1, "Token status is required"),
  financingStage: z.string().min(1, "Financing stage is required"),
  vcBackers: z.string().min(1, "VC backers are required"),
  ticketSize: z.string().min(1, "Ticket size is required"),
});

import { z } from "zod";

export const MarketInformationFormSchema = z.object({
  sector: z.string().nonempty("Sector is required"),
  targetAudience: z.string().nonempty("Target audience is required"),
  marketValidation: z.string().nonempty("Market validation is required"),
  businessModel: z.string().nonempty("Business model is required"),
  traction: z.string().optional(),
  competitors: z.string().nonempty("Competitors are required"),
  uniqueInsight: z.string().nonempty("Unique insight is required"),
});

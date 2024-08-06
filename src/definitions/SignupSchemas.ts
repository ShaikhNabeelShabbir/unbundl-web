// src/components/formSchema.ts
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  role: z.string().min(1, { message: "Role is required." }),
});

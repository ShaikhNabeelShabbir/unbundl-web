import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(6, { message: "Name is required." }),
  username: z
    .string()
    .min(6, { message: "Username must be at least 6 characters." }),
  role: z.string().min(7, { message: "Role is required." }),
});

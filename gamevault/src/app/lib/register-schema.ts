import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "The name field is required"),
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password needs to be at least 6 characters"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(1, "Plase type your password"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

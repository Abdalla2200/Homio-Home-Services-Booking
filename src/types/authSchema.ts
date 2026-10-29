import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Enter a valid Email").min(1, "Enter an email"),
  password: z
    .string()
    .min(1, "Enter a password")
    .min(8, "Enter at least 8 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z.string().min(1, "Enter your name"),
    email: z.email("Enter a valid Email").min(1, "Enter an email"),
    password: z
      .string()
      .min(1, "Enter a password")
      .min(8, "Enter at least 8 characters"),
    confirmPassword: z.string().min(1, "Enter your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Enter matched password",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerSchema>;

import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must atleast 2 characters",
    })
    .max(50, {
      message: "Name cannot exceed 50 characters",
    }),

  email: z
    .string()
    .email({ message: "Please enter the valid email" })
    .min(2)
    .max(50),

  password: z
    .string()
    .min(8, { message: "Password must atleast 8 characters" })
    .max(50, {
      message: "Name cannot exceed 50 characters",
    }),
});

export const signInSchema = formSchema.pick({
  email: true,
  password: true,
});

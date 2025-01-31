import z from "zod";

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string()
});

//type inference
export type SignupInput = z.infer<typeof signupInput>;

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

//type inference
export type SigininInput = z.infer<typeof signinInput>;
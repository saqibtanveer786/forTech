import { z } from "zod"
export const AutherSchema = z.object({
    bio: z.string().max(70),
    idcard: z.string(),
    phone: z.string(),
    website: z.string().url(),
    socialLinks: z.record(z.string().url()),
    location: z.string().max(100),
    birthDate: z.string().datetime(),
    specialization: z.string().max(100),
    skills: z.array(z.string().max(20)),
    education: z.array(
        z.object({
            institution: z.string().max(100),
            degree: z.string().max(100),
            field: z.string().max(100),
            startYear: z.number().int(),
            endYear: z.number().int().optional(),
            authorProfileId: z.string()
        })
    ),
    experience: z.array(
        z.object({
            position: z.string().max(50),
            company: z.string().max(50),
            startDate: z.string().datetime(),
            endDate: z.string().datetime().optional(),
            description: z.string().max(500),
            authorProfileId: z.string()
        })
    ),
})
import { z } from 'astro:content'

export const BaseWPSchema = z.object({
    id: z.number(),
    title: z.object ({
        rendered: z.string()
    }),
    content: z.object ({
        rendered: z.string()
    }),
    acf: z.object({
        subtitle: z.string()
    })
})
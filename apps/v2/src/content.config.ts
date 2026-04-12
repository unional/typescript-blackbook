import { defineCollection } from 'astro:content'
import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blogs = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blogs' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		summary: z.string().optional(),
		tags: z.array(z.string()),
	}),
})

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema(),
	}),
	blogs,
}

import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'
import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blogsCollection = defineCollection({
	// A post's `id` is its frontmatter `slug` when it has one, so the published
	// `/blogs/<slug>` URLs do not change with the filename.
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blogs' }),
	schema: z.object({
		title: z.string(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		summary: z.string().optional(),
		// description: z.string(),
		// image: z.object({
		//   url: z.string(),
		//   alt: z.string()
		// }),
		tags: z.array(z.string())
	})
})

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	blogs: blogsCollection,
}

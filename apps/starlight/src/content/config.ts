import { z, defineCollection } from 'astro:content'
import { docsSchema } from '@astrojs/starlight/schema'

const blogsCollection = defineCollection({
	type: 'content',
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
	docs: defineCollection({ schema: docsSchema() }),
	blogs: blogsCollection,
}

import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// Define a `loader` and `schema` for each collection
const postsCollection = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		// description: z.string(),
		// author: z.string(),
		// image: z.object({
		//   url: z.string(),
		//   alt: z.string()
		// }),
		tags: z.array(z.string())
	})
})
// Export a single `collections` object to register your collection(s)
export const collections = {
	posts: postsCollection,
}

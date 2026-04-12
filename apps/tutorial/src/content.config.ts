import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		tags: z.array(z.string()),
		description: z.string().optional(),
		author: z.string().optional(),
		image: z
			.object({
				url: z.string(),
				alt: z.string(),
			})
			.optional(),
	}),
});

export const collections = {
	posts,
};

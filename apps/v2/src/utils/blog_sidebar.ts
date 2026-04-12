import { getCollection } from 'astro:content'
import type { StarlightUserConfig } from '@astrojs/starlight/types'

export type BlogSidebar = NonNullable<StarlightUserConfig['sidebar']>

/**
 * Left nav for `/blog/*` only. Docs keep the global Starlight sidebar from `astro.config.mjs`.
 */
export async function buildBlogSidebar(): Promise<BlogSidebar> {
	const posts = (await getCollection('blogs')).sort(
		(a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf(),
	)

	// Site-root-relative paths without the `base` segment: Starlight prepends BASE_URL via pathWithBase.
	return [
		{
			label: 'All posts',
			link: '/blog/',
		},
		{
			label: 'Posts',
			items: posts.map((post) => ({
				label: post.data.title,
				link: `/blog/${post.id}/`,
			})),
		},
	]
}

import type { StarlightUserConfig } from '@astrojs/starlight/types';
import { getCollection } from 'astro:content';

export type BlogSidebar = NonNullable<StarlightUserConfig['sidebar']>;

/**
 * Left nav for `/blog/*` only. Docs keep the global Starlight sidebar from `astro.config.mjs`.
 */
export async function buildBlogSidebar(): Promise<BlogSidebar> {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const posts = (await getCollection('blogs')).sort(
		(a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf(),
	);

	return [
		{
			label: 'All posts',
			link: `${base}/blog/`,
		},
		{
			label: 'Posts',
			items: posts.map((post) => ({
				label: post.data.title,
				link: `${base}/blog/${post.slug}/`,
			})),
		},
	];
}

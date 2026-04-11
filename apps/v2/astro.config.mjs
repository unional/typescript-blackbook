// @ts-check
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://unional.github.io/',
	base: 'typescript-blackbook',
	redirects: {
		'/blogs/': '/blog/',
		'/guides/welcome/': '/docs/',
		'/guides/exercises/': '/docs/guides/exercises/',
		'/guides/mdx_authoring/': '/docs/guides/mdx_authoring/',
		'/guides/monorepo_setup/': '/docs/guides/monorepo_setup/',
	},
	integrations: [
		starlight({
			title: 'TypeScript Blackbook',
			favicon: './src/assets/logo.svg',
			logo: { src: './src/assets/logo.svg' },
			components: {
				Header: './src/components/Header.astro',
			},
			social: [
				{
					label: 'X',
					icon: 'x.com',
					href: 'https://x.com/unional',
				},
				{
					label: 'Discord',
					icon: 'discord',
					href: 'https://discord.gg/RwzcFpN5fv',
				},
				{
					label: 'GitHub',
					icon: 'github',
					href: 'https://github.com/unional',
				},
				{
					label: 'Stack Overflow',
					icon: 'stackOverflow',
					href: 'https://stackoverflow.com/users/3505900/unional',
				},
				{
					label: 'YouTube',
					icon: 'youtube',
					href: 'https://www.youtube.com/@cyberuni',
				},
			],
			sidebar: [
				{
					label: 'Welcome',
					// Root-relative without repeating `base` — Starlight prepends base for manual links.
					link: '/docs/',
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'docs/guides' },
				},
				{
					label: 'Guidelines',
					autogenerate: { directory: 'docs/guidelines' },
				},
				{
					label: 'tsconfig',
					autogenerate: { directory: 'docs/tsconfig' },
				},
				{
					label: 'TypeScript features',
					autogenerate: { directory: 'docs/typescript-features' },
				},
			],
		}),
		// Tailwind Preflight is unlayered and overrides Starlight layered `img` rules (nav + hero),
		// which blows up SVG logos to intrinsic dimensions. Starlight ships its own reset.
		tailwind({ applyBaseStyles: false }),
		react(),
	],
});

// @ts-check
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

const BASE = '/typescript-blackbook';

// https://astro.build/config
export default defineConfig({
	site: 'https://unional.github.io/',
	base: 'typescript-blackbook',
	integrations: [
		starlight({
			title: 'TypeScript Blackbook',
			favicon: './src/assets/logo.svg',
			logo: { src: './src/assets/logo.svg' },
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
					label: 'Blog',
					link: `${BASE}/blogs/`,
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Guidelines',
					autogenerate: { directory: 'guidelines' },
				},
				{
					label: 'tsconfig',
					autogenerate: { directory: 'tsconfig' },
				},
				{
					label: 'TypeScript features',
					autogenerate: { directory: 'typescript-features' },
				},
			],
		}),
		// Tailwind Preflight is unlayered and overrides Starlight layered `img` rules (nav + hero),
		// which blows up SVG logos to intrinsic dimensions. Starlight ships its own reset.
		tailwind({ applyBaseStyles: false }),
		react(),
	],
});

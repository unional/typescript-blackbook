// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://unional.github.io/',
    base: 'typescript-blackbook',
    integrations: [starlight({
        title: 'TypeScript Blackbook',
        favicon: './src/assets/logo.svg',
        logo: { src:'./src/assets/logo.svg'},
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
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { slug: 'guides/welcome' },
                ],
            },
        ],
		}), tailwind()]
});
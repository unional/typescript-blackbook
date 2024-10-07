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
        social: {
            "x.com": 'https://x.com/unional',
            discord:'https://discord.gg/RwzcFpN5fv',
            github: 'https://github.com/unional',
            stackOverflow: 'https://stackoverflow.com/users/3505900/unional',
            youtube: 'https://www.youtube.com/@cyberuni',
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
        ],
		}), tailwind()]
});
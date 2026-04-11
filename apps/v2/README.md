# TypeScript Blackbook (v2 site)

Astro + Starlight app deployed to GitHub Pages. Docs live in `src/content/docs/`, posts in `src/content/blogs/`, with custom routes under `src/pages/blogs/`.

```sh
# from repo root
pnpm web
# or
pnpm --filter v2 dev
```

Build: `pnpm --filter v2 build` (output in `dist/`).

Shared MDX helpers: `src/components/YouTube.astro`, `SandboxLink.astro`, `SandboxEmbed.astro`, `SandpackSnippet.tsx` (see [guides/mdx_authoring](src/content/docs/guides/mdx_authoring.mdx)).

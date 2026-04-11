# TypeScript Blackbook (v2 site)

Astro + Starlight app deployed to GitHub Pages. The splash home is `src/content/docs/index.mdx`; Blackbook pages live under `src/content/docs/docs/` (URL prefix `/docs/`). Blog posts are in `src/content/blogs/` with routes in `src/pages/blog/` (URL prefix `/blog/`).

```sh
# from repo root
pnpm web
# or
pnpm --filter v2 dev
```

Build: `pnpm --filter v2 build` (output in `dist/`).

Shared MDX helpers: `src/components/YouTube.astro`, `SandboxLink.astro`, `SandboxEmbed.astro`, `SandpackSnippet.tsx` (see [guides/mdx_authoring](src/content/docs/docs/guides/mdx_authoring.mdx)).

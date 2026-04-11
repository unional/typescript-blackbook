# Agent instructions — TypeScript Blackbook

This file is **tool-agnostic**. Use it as the shared source of truth for humans and coding agents (for example Cursor, Claude Code, and other assistants) working in this repository.

## Default implementation target

When the user does **not** specify a package, app, folder, or path, assume work belongs in **`apps/v2`**.

- **`apps/v2`** is the Astro-based v2 documentation site.
- The directory is **`apps/v2`**, not `app/v2`.

## Where this fits with other config

- **Cursor:** Project rules live under [.cursor/rules/](.cursor/rules/). The always-on index is [.cursor/rules/master.mdc](.cursor/rules/master.mdc), which references this file.
- **Claude Code:** The project hook file is [CLAUDE.md](CLAUDE.md) at the repository root. It aligns with this document so the same defaults load in Claude-driven sessions.

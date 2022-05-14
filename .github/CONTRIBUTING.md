<!-- omit in toc -->

# Contributing

Thanks for your interest in help making this guideline more useful to everyone 🌷.

The easiest way to add your changes is just copy, paste, and modify 😆.

- [Contributing](#contributing)
  - [Design Principles](#design-principles)
  - [Markdown Flavor](#markdown-flavor)
  - [Requirement Level Keywords](#requirement-level-keywords)

## Design Principles

The style **must** work with popular markdown linters.

If the linter is configurable,
the configuration should be added to the repository so that they works without errors for the contributors.

> Why?

We want to provide a stress free environment to the contributors 🏖.

We are using [markdownlint](https://github.com/DavidAnson/markdownlint).

---

The linting configuration **should** be opinionated.

> Why?

This guideline is designed for programmers.
Thus, the linting rules are customized to:

- Simplify usage
- Minimize typing
- Utilize features for programmers

## Markdown Flavor

This guideline **should** use [GitHub flavored Markdown](https://help.github.com/articles/github-flavored-markdown/).

> Why?

Because this guideline is saved in GitHub and can be viewed there.

---

Each guideline under the same heading **must** use `---` as the horizontal rule style to separate from each other.

> Why?

Save a few pinky (finger) 😎.

---

Each line **should** break at comma or period, unless both lines are short.

❌ bad

```md
This is one sentence. This is another longer sentence. This is yet another super ultra duper extra insanely long, very hard to read, very dense, contains many many information, very likely a run-on, very much like what an attorney will write, and probably will be wrapped by the editor sentence.
```

✔️ good

```md
This is one sentence.
This is another longer sentence.
This is yet another super ultra duper extra insanely long,
very hard to read, very dense, contains many many information,
very likely a run-on, very much like what an attorney will write,
and probably will be wrapped by the editor sentence.
```

> Why?

One sentence per line improves readability in raw format.
You need to insert blank line for paragraph anyway.

---

Headers **must** use `atx-style`.

❌ bad

```md
This is a header
================
```

✔️ good

```md
# This is a header
```

> Why?

`setext-style` (using underline of equal signs and dashes) has a lot more keystrokes and does not scale beyond the first two levels.

`atx-style` can define `######` with ease.

---

List **must** use `-` over `*` and `+`.

> Why?

Save a pinky (finger) 😎.

---

List **must** use `\` for line breaks.

❌ bad

```md
- This is one sentence.  // two spaces
  This is another longer sentence.  // two spaces
  This is yet another super ultra duper extra insanely long,  // two spaces
  very hard to read, very dense, contains many many information,  // two spaces
  very likely a run-on, very much like what an attorney will write,  // two spaces
  and probably will be wrapped by the editor sentence.
```

✔️ good

```md
- This is one sentence.\
  This is another longer sentence.\
  This is yet another super ultra duper extra insanely long,\
  very hard to read, very dense, contains many many information,\
  very likely a run-on, very much like what an attorney will write,\
  and probably will be wrapped by the editor sentence.
```

This will give you:

- This is one sentence.\\
  This is another longer sentence.\\
  This is yet another super ultra duper extra insanely long,\\
  very hard to read, very dense, contains many many information,\\
  very likely a run-on, very much like what an attorney will write,\\
  and probably will be wrapped by the editor sentence.

> Why?

`.editorconfig` and extensions will likely remove trailing spaces,
so using "two spaces" for line breaks does not work.

---

**Should not** use indented code blocks. Use Fenced code blocks instead.

> Why?

Fenced code blocks allow you to specify language.

---

**Should** use backticks (`` ` ``) instead of `~`.

> Why?

Again, save another pinky (finger) 😎.

---

**Should** add language identifier to code block whenever possible.

> Why?

Better rendering 😉.

---

**Should** use shorthand language identifier whenever possible.

- `sh` over `shell`
- `md` over `markdown`
- `js` over `javascript`
- `ts` over `typescript`
- `rb` over `ruby`

> Why?

Save some typings.

---

**Should** use 2 spaces to indent inside code blocks.

> Why?

For consistency.

---

Each document **must** have only one first level header (`#`), at the top of the document.

> Why?

Denote first level header as the title of the document (as it should be).

If you have more than one title,
it is likely that you have multiple topics in the same document.
Break them into separate files.

---

Wordings in the header **shall** be neutral, non-opinionated.

```md
// bad
### Avoid `var`

// good
### `var` keyword
```

> Why?

The heading would be used as link.

If the style guide suggestion changes,
keeping the heading neutral would avoid broken links.

---

Each guideline **must** follow the following structure.

```md
<guideline>

[example]

[> Why?]

[explanation and additional information]
```

Where `<>` is required, `[]` is optional.

## Requirement Level Keywords

We follow the [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt) to describe the requirement levels.

These keywords are: `MUST`, `MUST NOT`, `REQUIRED`, `SHALL`, `SHALL NOT`, `SHOULD`, `SHOULD NOT`, `RECOMMENDED`, `MAY`, and `OPTIONAL`.

The keywords will be highlighted in `bold` (e.g. `**must**`).

> Why?

Provide a consistent verbiage for the recommendation.

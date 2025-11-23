# How Cursor rules are organized

The Cursor engine reads `master.mdc` first, which serves as a central reference and index for all rule modules. This provides a single, canonical entry-point while letting each rule live in its own file organized by category.

## Entry Point

- `master.mdc` - Main entry point that references all rule modules organized by category

## Directory Structure

Rules are organized into the following categories:

### `project/`

Project-level rules about the repository structure and purpose:

- `overview.mdc` - Project summary, core principles, and fundamental requirements
- `repository_structure.mdc` - Monorepo structure and organization guide

### `guidelines/`

Opinionated best practices and standards:

- `voice_and_tone.mdc` - Writing persona, tense, point of view
- `syntax_conventions.mdc` - Markdown, code-block & snippet rules
- `naming_conventions.mdc` - File, folder, and code naming conventions
- `typescript_code_examples.mdc` - Guidelines for TypeScript code examples
- `review_rubric.mdc` - Acceptance checklist used by reviewers

### `templates/`

Templates for creating new content:

- `article_template.mdc` - Standard article structure every article must follow
- `cursor_rules.mdc` - Template for creating new cursor rule files

### `agents/` (Future)

Rules for AI agent behavior and management (to be added as needed).

### `commands/` (Future)

Process-oriented rules for specific tasks (to be added as needed).

## Extending the Rules

To extend:

1. Create a new rule file in the appropriate category directory (e.g., `guidelines/my_new_rule.mdc`)
2. Add a reference to the new rule in `master.mdc` under the appropriate section
3. Update this README if adding a new category
4. Follow the template in `templates/cursor_rules.mdc` for consistency

## File Naming Convention

- Files use `.mdc` extension
- Use `snake_case` for file names (e.g., `voice_and_tone.mdc`, `naming_conventions.mdc`)
- Use descriptive names that clearly indicate the rule's purpose

## Rule Format

Each rule file should include:

- **Frontmatter** with `description`, `globs`, and `alwaysApply` fields
- **Required Rules** section linking to related rules
- **Clear sections** with headings and examples
- **Quality checklist** when applicable

Reference `templates/cursor_rules.mdc` for the standard format.

# Markdown style guide
There are several flavors of `markdown`.
This style guide is designed for the `github` version of markdown (and alternatives):
https://help.github.com/articles/github-flavored-markdown/

Here is a complete reference of most common syntax:
https://daringfireball.net/projects/markdown/syntax

### Sentence
- One sentence per line. Except in list.

  > Why? One sentence per line improves readability in raw format.
  > You need to insert blank line for paragraph anyway.

  ```
  // bad
  This is one sentence. This is another longer sentence. This is yet another super ultra duper extra insanely long, very hard to read, very dense, contains many many information, very likely a run-on, very much like what an attorney will write, and probably will be wrapped by the editor sentence.

  // good
  This is one sentence.
  This is another longer sentence.
  This is yet another super ultra duper extra insanely long, very hard to read, very dense, contains many many information, very likely a run-on, very much like what an attorney will write, and probably will be wrapped by the editor sentence.
  ```

### Headers
- Prefer `atx-style` headers (using hash characters) over `setext-style` (using underline of equal signs and dashes);

  > Why? `setext-style` has a lot more keystrokes and does not scale beyond first two levels.
  > `atx-style` can define `######` with ease.

  ```
  // bad
  This is a header
  ================

  // good
  # This is a header
  ```

- Each document should have only one first level header (`#`), at the top of the document.

  > Why? Denote first level header as the title of the document (as it should be).
  > If you have more than one title, it is likely that you have multiple topics in the same document.
  > Break them into separate files.

- Wordings in header should be neutral, non-opiniated

  > Why? The header would be used as link.
  > It is best to keep the header short and unlikely to change.

  ```
  // bad
  ### Avoid `var`
  
  // good
  ### `var` keyword
  ```

### List
- Use `-` over `*` and `+`.

  > Why? Save one more pinky (finger)

- Feel free to use indented list.

  ```
  - list-item
    - sub-list-item
  ```

### Fenced code blocks (triple backticks)
- Use language identifier whenever possible.
  - shell
  - javascript
  - typescript
  - ruby
- Prefer shorthand language identifier.
  - sh
  - js
  - ts
  - rb
- Intent with 2 spaces

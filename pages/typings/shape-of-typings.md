# Shape of typings

Depends on how the source JavaScript library is written, you can create your typings in several ways.

If the

The source JavaScript library can be written in several ways:

- CommonJS module (typically nodeJS)
- Global

When creating typings, the first thing you need to decide is what kind of typings you are writing?

The answer of this question depends on a few factors:

- How does the source being referenced?
- Does the source being referenced through `require('...')`, `import ... from '...'`, global, or all of the above?

  > How can the source being referenced?

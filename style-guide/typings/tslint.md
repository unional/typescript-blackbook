# tslint configuration
Rules in use:
* native: https://github.com/palantir/tslint#core-rules
* eslint: https://github.com/buzinas/tslint-eslint-rules#rules-copied-from-eslint-website

This style follows the [`default style`](../default/tslint.md) if not specified below.

#### no-empty (native)
`"no-empty": false`
* When testing the typings, it is quite common to create empty functions.

#### no-require-imports (native)
`"no-require-imports": false`
* typings would need to use `import = require()` to get definitions written with `export =` syntax.

#### no-string-literal (native)
`"no-string-literal": true`
* Unlike in the default style, there is no need to support the dynamic use case.

#### object-literal-sort-keys (native)
`"object-literal-sort-keys": true`
* typings are used mostly by tools, so the contextual ordering does not pay dividend. Sorting object keys alphabetically in typings help making it easier to maintain.

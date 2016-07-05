# tslint configuration

You can use this configuration by installing [`tslint-config-typings`](https://github.com/typings/tslint-config-typings) (requires `tslint@3.7.0+`)

```sh
npm install -D tslint tslint-config-typings
```

```js
// your tslint.json
{
  "extends": "tslint-config-typings",
  "rules": {
    // your customization
  }
}
```

## Rules

This style follows the [`default style`](../default/tslint.md) if not specified below.

### membor-ordering (native)

`"member-ordering": [false]`

- Follow order in the source package documentation.

### no-empty (native)

`"no-empty": false`

- When testing the typings, it is quite common to create empty functions.

### no-internal-module (native)

`"no-internal-module": true`

- There is a lot of typings written with `declare module X {`. Since TypeScript 1.6 `declare namespace X {` is preferred.
- `declare module X {` could be deprecated in the future.

### no-require-imports (native)

`"no-require-imports": false`

- typings would need to use `import = require()` to get definitions written with `export =` syntax.

### no-string-literal (native)

`"no-string-literal": true`

- Unlike in the default style, there is no need to support the dynamic use case.

### object-literal-sort-keys (native)

`"object-literal-sort-keys": false`

- Allow the typings to follow the order as in the source package documentation.

## References

- native: https://github.com/palantir/tslint#core-rules
- eslint: <https://github.com/buzinas/tslint-eslint-rules#rules-copied-from-eslint-website>

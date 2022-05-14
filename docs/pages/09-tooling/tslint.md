# tslint configuration

You can use this configuration by installing `tslint-config-unional` (requires `tslint@3.7.0+`):

```sh
npm install -D tslint tslint-config-unional
```

```js
// your tslint.json
{
  "extends": "tslint-config-unional",
  "rules": {
    // your customization
  }
}
```

## Rules

- native: <https://github.com/palantir/tslint#core-rules>
- eslint: <https://github.com/buzinas/tslint-eslint-rules#rules-copied-from-eslint-website>

### align (native)

```json
"align": [true, "statements"]
```

- [functions#function-parameters](functions.md#function-parameters)
- [functions#function-arguments](functions.md#function-arguments)

### ban (native)

```json
"ban": false
```

### class-name (native)

```json
"class-name": true
```

### comment-format (native)

```json
"comment-format": [true, "check-space"]
```

- [comments#single-line](comments.md#single-line)

### curly (native)

```json
"curly": true
```

### eofline (native)

```json
"eofline": true
```

### forin (native)

```json
"forin": false
```

### indent (native)

```json
"indent": [true, "spaces"]
```

- [whitespaces#soft-tabs](whitespaces.md#soft-tabs)

### interface-name (native)

```json
"interface-name": [true, "never-prefix"]
```

- [interfaces#naming](interfaces.md#naming)

### jsdoc-format (native)

```json
"jsdoc-format": true
```

- [comments#multi-line](comments.md#multi-line)

### label-position (native)

```json
"label-position": true
```

### label-undefined (native)

```json
"label-undefined": true
```

### max-line-length (native)

```json
"max-line-length": false
```

- [file-structures#max-line-length](file-structures.md#max-line-length)

### member-access (native)

```json
"member-access": false
```

- [classes#member-visibility](classes.md#member-visibility)

### member-ordering (native)

```json
"member-ordering": false
```

- [classes#member-ordering](classes.md#member-ordering)

### no-any (native)

```json
"no-any": false
```

- Too restrictive

### no-arg (native)

```json
"no-arg":false
```

- **Open to discussion**, should work smoothly without

### no-bitwise (native)

```json
"no-bitwise": false
```

- Should know what I'm doing

### no-conditional-assignment (native)

```json
"no-conditional-assignment":false
```

- Avoid clever trick that reduce maintainability

### no-consecutive-blank-lines (native)

```json
"no-consecutive-blank-lines": false
```

- Want the ability to have 2 blank lines for better formatting

### no-console (native)

```json
"no-console": [
    true,
    "assert",
    "count",
    "log",
    "warn",
    "trace",
    "error",
    "debug"
]
```

- **Open to discussion**, better be preventive

### no-construct (native)

```json
"no-construct":false
```

### no-constructor-vars (native)

```json
"no-constructor-vars": false
```

- It is reasonable to mark constructor as `private`

### no-debugger (native)

```json
"no-debugger":false
```

- Definitely. No checkin code should have `debugger`

### no-duplicate-key (native)

Not used

- TypeScript by default prohibit this

### no-duplicate-variable (native)

```json
"no-duplicate-variable":false
```

- Only applies to `var`
- Likely coding mistake. Use `let` and `const` instead

### no-empty (native)

```json
"no-empty":false
```

- yup

### no-eval (native)

```json
"no-eval":false
```

- Absolutely

### no-inferrable-types (native)

```json
"no-inferrable-types": false
```

- ...open to discussion

### no-internal-module (native)

```json
"no-internal-module":false
```

- [namespaces-and-modules#namespace](namespaces-and-modules.md#namespace)

### no-null-keyword (native)

```json
"no-null-keyword": false
```

- There are valid use case of this

### no-require-imports (native)

```json
"no-require-imports": false
```

- [modules#import-keyword](modules.md#import-keyword)

### no-return-await

```json
"no-return-await": true
```

- [modules#import-keyword](../03-javascript-features/async-await.md#return-await)

### no-shadowed-variable (native)

```json
"no-shadowed-variable":false
```

- yup

### no-string-literal (native)

```json
"no-string-literal": false
```

- [accessors#bracket-notation](accessors.md#bracket-notation)

### no-switch-case-fall-through (native)

```json
"no-switch-case-fall-through":false
```

- yup

### no-trailing-whitespace (native)

```json
"no-trailing-whitespace":false
```

- yup

### no-unreachable (native)

```json
"no-unreachable":false
```

- of course

### no-unused-expression (native)

```json
"no-unused-expression":false
```

- ...open to discussion: make sure exported function are excluded

### no-unused-variable (native)

```json
"no-unused-variable":false
```

- yup

### no-use-before-declare (native)

```json
"no-use-before-declare":false
```

- For `var` only. YUP!

### no-var-keyword (native)

```json
"no-var-keyword":false
```

- It is too unlikely that you need to concern about memory. It is just a pointer.

### no-var-requires (native)

```json
"no-var-requires":false
```

- [modules#import-keyword](../organization/modules.md#import-keyword)

### object-literal-sort-keys (native)

```json
"object-literal-sort-keys": false
```

- Many times when you pass in option bags, the order has contextual meaning that help reader understand what you try to do.

### one-line (native)

```json
"one-line": [
  true,
  "check-open-brace",
  "check-whitespace"
]
```

- Do not put `else`, `catch`, `finally` on the same line. Better code folding

### quotemark (native)

```json
"quotemark": [
  true,
  "single",
  "avoid-escape"
]
```

- Use single quote to reduce key-stroke. Save your little finger.

### radix (native)

```json
"radix": false
```

- `parseInt()` in base 10 is common enough to save the extra typing all the time

### semicolon (native)

```json
"semicolon": [
  true,
  "always"
]
```

- Do not rely on Auto Semicolon Insertion. Your friends might not be as good as you are.

### switch-default (native)

```json
"switch-default": true
```

- Just to make sure...

### trailing-comma (native)

```json
"trailing-comma": [
  true,
  {
    "singleline": "never",
    "multiline": "never"
  }
]
```

- Typing less (and working faster) is better than just keeping the history cleaner with one less line of change

### triple-equals (native)

```json
"triple-equals": [
  true,
  "allow-null-check"
]
```

- YUP

### typedef (native)

```json
"typedef": [
  true,
  "property-declaration",
]
```

- Type definition for `arrow-parameter` is not enforced.

  > Why? If the arrow function is used as a callback, the callback signature should be defined properly.
  > Enforcing typedef creates noise in this situation.
  > If the arrow function is defined in isolation, then the type of the parameters can be defined.
  > However, this usage is relatively rare, and even when it happens, it is typically for very simple code.
  > Therefore, still do not need to enforce this rule.

  ```ts
  // bad
  new Promise((resolve: Function, reject: Function) => { });

  // good
  new Promise((resolve, reject) => { });
  ```

- Type definition for `call-signature` is not enforced.

  > Why? When the code gets complicated, relying on infer type is much easier and cleaner then explicitly typing them.
  > This is only true if you are using TypeScript@2+ (well, you should).

- Type definition for `member-variable-declaration` is not enforced

  > Why? To avoid cluster and redundent types.

  ```ts
  // bad
  import { WeakMap } from 'core-js';
  class Foo {
    map: WeakMap<string, any> = new WeakMap<string, any>();
  }

  // good
  class Foo {
    map = new WeakMap<string, any>();
  }
  ```

### typedef-whitespace (native)

```json
"typedef-whitespace: [
  true,
  {
    "call-signature": "nospace",
    "index-signature": "nospace",
    "parameter": "nospace",
    "property-declaration": "nospace",
    "variable-declaration": "nospace"
  },
  {
    "call-signature": "space",
    "index-signature": "space",
    "parameter": "space",
    "property-declaration": "space",
    "variable-declaration": "space"
  }
]
```

- ...open to discussion

### use-strict (native)

```json
"use-strict": [false]
```

- Not a necessity

### variable-name (native)

```json
"variable-name": [
  true,
  "check-format",
  "ban-keywords"
]
```

- Only `camelCased` or `UPPER_CASED` variable names
- Do not allow leading or trailing underscore. They are used typically to indicate private variable. TypeScript already support `private` visibility.

### Whitespace (native)

```json
"whitespace": [
  true,
  "check-branch",
  "check-decl",
  "check-operator",
  "check-separator",
  "check-type"
]
```

- **Open to discussion**. Probably fine.

## tslint-eslint-rules

There is [an issue](https://github.com/palantir/tslint/issues/1024) with how the `"rulesDirectory"` is used in [`tslint`](https://github.com/palantir/tslint)\`

If you are using [`tslint-eslint-rules`](https://github.com/buzinas/tslint-eslint-rules),
you can follow its usage in its README:

```js
{
  "rulesDirectory": "node_modules/tslint-eslint-rules/dist/rules"
  "rules": {
    // ...
  }
}
```

However, if you are creating a `tslint` config package or you expose your configuration so the consumer can use your configuration through `tslint.json/extends`, then you have to do the following hack:

```js
// index.js (your package export file, cannot be tslint.json)
var path = require('path')

module.exports = {
  rulesDirectory: path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
  rules: {
    // ...
  }
}
```

### brace-style

```json
"brace-style": [ true, "stroustrup", { "allowSingleLine": true }]
```

> Why? Stroustrup works better than "1tbs" with folding in many IDEs

### no-constant-condition (eslint)

### valid-typeof (eslint)

### use-isnan (eslint)

### no-duplicate-case (eslint)

### no-sparse-arrays (eslint)

### no-extra-semi (eslint)

### no-extra-boolean-cast (eslint)

### no-ex-assign (eslint)

Disabled. Has bugs

### no-unexpected-multiline (eslint)

Disabled.

### no-invalid-regexp (eslint)

### no-inner-declarations (eslint)

Disabled. Has bugs

### no-regex-spaces (eslint)

### no-empty-character-class (eslint)

### no-control-regex (eslint)

### no-irregular-whitespace (eslint)

### valid-jsdoc (eslint)

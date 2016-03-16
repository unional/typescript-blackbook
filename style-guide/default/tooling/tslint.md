# tslint configuration
Rules in use:
* native: https://github.com/palantir/tslint#core-rules
* eslint: https://github.com/buzinas/tslint-eslint-rules#rules-copied-from-eslint-website

#### align (native)
`"align": [true, "statements"]`

* [functions#function-parameters](functions.md#function-parameters)
* [functions#function-arguments](functions.md#function-arguments)

#### ban (native)
`"ban": false`

#### class-name (native)
`"class-name": true`

#### comment-format (native)
`"comment-format": [true, "check-space"]`

* [comments#single-line](comments.md#single-line)

#### curly (native)
`"curly": true`

#### eofline (native)
`"eofline": true`

#### forin (native)
`"forin": false`

#### indent (native)
`"indent": [true, "spaces"]`

* [whitespaces#soft-tabs](whitespaces.md#soft-tabs)

#### interface-name (native)
`"interface-name": false`

would be something like: `"interface-name": [true, "never"]` in the future
* https://github.com/palantir/tslint/issues/512
* [interfaces#naming](interfaces.md#naming)

#### jsdoc-format (native)
`"jsdoc-format": true`
* [comments#multi-line](comments.md#multi-line)

#### label-position (native)
`"label-position": true`

#### label-undefined (native)
`"label-undefined": true`

#### max-line-length (native)
`"max-line-length": false`
* [file-structures#max-line-length](file-structures.md#max-line-length)

#### member-access (native)
`"member-access": false`

* [classes#member-visibility](classes.md#member-visibility)

#### member-ordering (native)
`"member-ordering": false`

* [classes#member-ordering](classes.md#member-ordering)

#### no-any (native)
`"no-any": false`
* Too restrictive

#### no-arg (native)
`"no-arg": true`
* TBD, should work smoothly without

#### no-bitwise (native)
`"no-bitwise": false`
* Should know what I'm doing

#### no-conditional-assignment (native)
`"no-conditional-assignment": true`
* Avoid clever trick that reduce maintainability

#### no-consecutive-blank-lines (native)
`"no-consecutive-blank-lines": false`
* Want the ability to have 2 blank lines for better formatting

#### no-console (native)
`"no-console": [
    true,
    "assert",
    "count",
    "log",
    "warn",
    "trace",
    "error",
    "debug"
]`
* TBD, better be preventive

#### no-construct (native)
`"no-construct": true`

#### no-constructor-vars (native)
`"no-constructor-vars": false`
* It is reasonable to mark constructor as `private`

#### no-debugger (native)
`"no-debugger": true`
* Definitely. No checkin code should have `debugger`

#### no-duplicate-key (native)
Not used
* TypeScript by default prohibit this

#### no-duplicate-variable (native)
`"no-duplicate-variable": true`
* Only applies to `var`
* Likely coding mistake. Use `let` and `const` instead

#### no-empty (native)
`"no-empty": true`
* yup

#### no-eval (native)
`"no-eval": true`
* Absolutely

#### no-inferrable-types (native)
`"no-inferrable-types": false`
* TBD

#### no-internal-module (native)
`"no-internal-module": true`
* There is no reason to use it.
* Keep code compatible with ES2015

#### no-null-keyword (native)
`"no-null-keyword": false`
* There are valid use case of this

#### no-require-imports (native)
`"no-require-imports": true`
* Follow ES2015

#### no-shadowed-variable (native)
`"no-shadowed-variable: true`
* yup

#### no-string-literal (native)
`"no-string-literal": false`
* Use object access via string literals to explicitly say the property is dynamic.
* May be a code smell
* May be better to type the object

#### no-switch-case-fall-through (native)
`"no-switch-case-fall-through": true`
* yup

#### no-trailing-whitespace (native)
`"no-trailing-whitespace": true`
* yup

#### no-unreachable (native)
`"no-unreachable": true`
* of course

#### no-unused-expression (native)
`"no-unused-expression": true`
* TBD: make sure exported function are excluded

#### no-unused-variable (native)
`"no-unused-variable": true`
* yup

#### no-use-before-declare (native)
`"no-use-before-declare": true`
* For `var` only. YUP!

#### no-var-keyword (native)
`"no-var-keyword": true`
* It is too unlikely that you need to concern about memory. It is just a pointer.

#### no-var-requires (native)
`"no-var-requires": true`
* Stick with ES2015

#### object-literal-sort-keys (native)
`"object-literal-sort-keys": false`
* Many times when you pass in option bags, the order has contextual meaning that help reader understand what you try to do.

#### one-line (native)
`"one-line": [
  true,
  "check-open-brace",
  "check-whitespace"
}`
* Do not put `else`, `catch`, `finally` on the same line. Better code folding

#### quotemark (native)
`"quotemark": [
  true,
  "single",
  "avoid-escape"
]`
* Use single quote to reduce key-stroke. Save your little finger.

#### radix (native)
`"radix": false`
* `parseInt()` in base 10 is common enough to save the extra typing all the time

#### semicolon (native)
`"semicolon": [
  true,
  "always"
]`
* Do not rely on Auto Semicolon Insertion. Your friend might not be as good as you are.

#### switch-default (native)
`"switch-default": true`
* Just to make sure...

#### trailing-comma (native)
`"trailing-comma": [
  true,
  {
    "multiline": "always",
    "singleline": "never"
  }
]`
* To avoid extra diff. TypeScript will take it off anyway.

#### triple-equals (native)
`"triple-equals": [
  true,
  "allow-null-check"
]`
* YUP

#### typedef (native)
`"typedef": [
  true,
  "call-signature",
  "property-declaration",
  "member-variable-declaration"
]`

- Type definition for `arrow-parameter` is not enforced.

  > Why? If the arrow function is used as a callback, the callback signature should be defined properly.
  > Enforcing typedef creates noise in this situation.

  > If the arrow function is defined in isolation, then the type of the parameters can be defined.
  > However, this usage is relatively rare, and even when it happens, it is typically for very simple code.
  > Therefore, still do not need to enforce this rule.

  ```ts
  // bad
  new Promise((resolve: Function, reject: Function) => {
    // do stuff...
  });

  // good
  new Promise((resolve, reject) => {
  });
  ```


#### typedef-whitespace (native)
`"typedef-whitespace": [
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
]`
* TBD

#### use-strict (native)
`"use-strict": [false]`
* Not a necessity

#### variable-name (native)
`"variable-name": [
  true,
  "check-format",
  "ban-keywords"
]`
* Only camelCased or UPPER_CASED variable names
* Do not allow leading or trailing underscore. They are used typically to indicate private variable. TypeScript already support `private` visibility.

#### whitespace (native)
`"whitespace": [
  true,
  "check-branch",
  "check-decl",
  "check-operator",
  "check-separator",
  "check-type"
]`
* TBD. Probably fine.

## tslint-eslint-rules disabled
Currently `tslint-eslint-rules` is not used in `tslint-config-unional`.
There is an issue with how the `"rulesDirectory"` is used in `tslint`.
Likely `tslint-eslint-rules` need to be converted to a config package and used through `"entends"`.

#### no-constant-condition (eslint)
#### valid-typeof (eslint)
#### use-isnan (eslint)
#### no-duplicate-case (eslint)
#### no-sparse-arrays (eslint)
#### no-extra-semi (eslint)
#### no-extra-boolean-cast (eslint)
#### no-ex-assign (eslint)
Disabled. Has bugs
#### no-unexpected-multiline (eslint)
Disabled.

#### no-invalid-regexp (eslint)
#### no-inner-declarations (eslint)
Disabled. Has bugs
#### no-regex-spaces (eslint)
#### no-empty-character-class (eslint)
#### no-control-regex (eslint)
#### no-irregular-whitespace (eslint)
#### valid-jsdoc (eslint)

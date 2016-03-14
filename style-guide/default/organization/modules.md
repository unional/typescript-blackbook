# Module
Module in TypeScript has the same semantic meaning as in ES2015.

The actual definition on module is subtle and complex.
Fortunately, if you follow these simple rules, creating module is relatively straight forward.

### General guideline
- Use top-level `import` and `export`
- Do not use the `module` keyword

> Why? Follow these and you won't be sorry...

### import keyword
There are two import syntax in TypeScript:
```ts
// using require()
import dr = require('domready');

// ES2015
import dr from 'domready';
import * as dr from 'domready';
import { x } from './foo';
```

- If you are writing an application, you can rely on default import interop and use only ES2015 syntax.
- If you are writing a package, **do not** rely on default import interop.

> Why? This is a very lengthy subject. Will add links in the future.

### export keyword
There are two export syntax in TypeScript:
```ts
// export =
export = function x() { ... };

// ES2015
// default export (import x from './foo')
export default function x() { ... }
// named export (import { x } from './foo')
export function x() { ... }
```

- Use ES2015 syntax over `export =` syntax.


### Module keyword
- Do not wrap typings in `declare module "X" {`. Expose using **top-level import / export**

> Why? `declare module "X" {` will cause name conflict if consumer use two different version of the same library.

```ts
// bad
declare module "X" {
  export interface A {
    // stuff...
  };
}

// good
export interface A {
  // stuff...
};
```

## Note
Prior to TypeScript 1.5, there are two types of modules:
* Internal module (`declare module X {`)
* External module (`declare module "X" {`)

In TypeScript 1.5, the term and keyword `namespace` is introduced.
The nomenclature has changed.
* Internal module -> namespace
* External module -> module

The `declare module X {` syntax exists for backward compatibility.

## Reference
* https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Namespaces.md
* https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Namespaces%20and%20Modules.md
* https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Modules.md

# Module
Module in TypeScript has the same semantic meaning as in ES2015.

The actual definition on module is subtle and complex.
Fortunately, if you follow these simple rules, creating module is relatively straight forward.

### General guideline
- Use top-level `import` and `export`
- Do not use the `module` keyword

  > Why? Follow these and you won't be sorry...

### import keyword
- Use `import` keyword.

  tslint: [`no-var-requires`](tslint.md#no-var-requires-native)

  ```ts
  // bad
  var dr = require('domready');
  let dr = require('domready');
  const dr = require('domready');

  // good
  import dr = require('domready');
  ```

- If you are writing an application, you can rely on default import interop and use only ES2015 syntax.

  tslint: [`no-require-import`](tslint.md#no-require-imports-native)

  ```ts
  // ok
  import dr = require('domready');

  // Prefer
  import dr from 'domready';
  import - as dr from 'domready';
  import { x } from './foo';
  ```

- If you are writing a package, **do not*- rely on default import interop.

  > Why? This is a very lengthy subject. Will add links in the future.

  tslint: [`no-require-import`](tslint.md#no-require-imports-native)


  ```ts
  // bad
  import dr from 'domready';
  import - as dr from 'domready';

  // good
  import dr = require('domready');
  import { x } from './foo';
  ```

- Organize import statments into three sections: 3rd party modules, company modules, and relative (i.e. local) modules.

  ```ts
  import _ from 'lodash';
  import Promise from 'bluebird';

  import Router from 'panda-router';

  import ObjectPage from './ObjectPage/index';
  ```

### export keyword
- Use ES2015 syntax over `export =` syntax.

  ```ts
  // Avoid
  // export =
  export = function x() { ... };

  // Good
  // ES2015
  // default export (import x from './foo')
  export default function x() { ... }
  // named export (import { x } from './foo')
  export function x() { ... }
  ```

### Module keyword
- Do not wrap typings in `declare module "X" {`. Expose using **top-level import / export**

  > Why? `declare module "X" {` will cause name conflict if consumer use two different versions of the same library.
  > In TypeScript 1.8, it is used for module augmentation.

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
- Internal module (`declare module X {`)
- External module (`declare module "X" {`)

In TypeScript 1.5, the term and keyword `namespace` is introduced.
The nomenclature has changed.
- Internal module -> namespace
- External module -> module

The `declare module X {` syntax exists for backward compatibility.

## Reference
- https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Namespaces.md
- https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Namespaces%20and%20Modules.md
- https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Modules.md

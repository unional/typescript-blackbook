# Module

Module in TypeScript has the same semantic meaning as in ES2015.

The actual definition on module is subtle and complex.
Fortunately, if you follow these simple rules, creating module is relatively straight forward.

## General guideline

- Write module file (with top-level `import` or `export`) and not script file (without top-level `import` or `export`)
- Write module in ES2015 syntax, except `import x = require('x');`.

## import keyword

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

- Use `import x = require('x')` syntax for packages exported in CommonJS style. **do not** rely on import interop.

  Although [TypeScript Spec](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#1133-import-require-declarations) says that `import x = require('x')` and `import * as x from 'x'` is equivalent.
  But the next statement say "provided the referenced module contains no export assignment".
  What it means is that they are not the same if the module export a function.
  `import * as x from 'x'` creates an immutable namespace object and it does not work when the package exports a function (`module.exports = [function]`).

  > Why? The current interop between CommonJS and ES2015 Module is not consistant across configuration.
  > Using interop today could cause a systematic issue.
  > Avoid it at all cost.
  > Educate your team to learn about the differences and do the right thing.

  reference issue: <https://github.com/Microsoft/TypeScript/issues/7398>

  tslint: [`no-require-import`](tslint.md#no-require-imports-native)

  ```ts
  // bad
  import * as dr from 'domready';
  // with "commonjs" + "allowSyntheticDefaultImports" or
  // with "system"
  import dr from 'domready';

  // good
  import dr = require('domready');
  ```

- Organize import statments into three sections: 3rd party modules, company modules, and relative (i.e. local) modules.

  ```ts
  import _ = require('lodash');
  import Promise = require('bluebird');

  import Router from 'panda-router';

  import ObjectPage from './ObjectPage/index';
  ```

## export keyword

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

## Module keyword

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

- <https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Namespaces.md>
- <https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Namespaces%20and%20Modules.md>
- <https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Modules.md>

# Import / Export

The `import` and `export` keyword is defined in ES2015.
It is used in a module file to declare how it would interact with other files.

TypeScript uses them for the same purpose, but due to historic reason,
it also have a few extended syntax.

## `import` keyword

- Use `import x from 'x'` syntax to import CommonJS module.

You need to specify the `--esModuleInterop` flag.

  tslint: [`no-var-requires`](tslint.md#no-var-requires-native)
  tslint: [`no-require-import`](tslint.md#no-require-imports-native)

  > Why?
  > Prior to TypeScript 2.7,
  > I warn about the use of interop because the flag `allowSyntheticDefaultImports` only solve half of the problem and can cause a systematic breakdown.
  > With the introduction of `esModuleInterop` in 2.7,
  > this problem is mostly resolved except for <https://github.com/Microsoft/TypeScript/issues/7398>,
  > which will gradually go away as ESM adoption rate increase.

  ```ts
  // bad
  var dr = require('domready');
  let dr = require('domready');
  const dr = require('domready');
  import dr = require('domready');

  // good
  import dr from 'domready'
  ```

- Organize import statements into two sections: modules and relative (i.e. local) files.

  > Why?
  > Originally, I suggest to organize them in three sections.
  > But it is a custom structure and cannot be support nicely by tools.
  > Two sections are well supported by tools.
  > For example, in Visual Studio Code, it support organize import automatically.

  ```ts
  import { Something } from '@myCompany/somePackage';
  import _ = require('lodash');
  import Promise = require('bluebird');

  import ObjectPage from './ObjectPage';
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

- Use named export. Avoid default export

  > Why?
  > Cefault export creates conflict if the consumer decide to re-export your module.
  > This applies to internal and external structure.

  ```ts
  // bad
  // src/a/index.ts
  export default function a() { ... }

  // src/b/index.ts
  export default function b() { ... }

  // src/index.ts
  export * from './a'
  export * from './b' // Error
  ```

## Reference

- <https://github.com/Microsoft/TypeScript-Handbook/blob/master/pages/Modules.md>

# ECMAScript Module

ECMAScript Module (a.k.a. esm) is the module spec for JavaScript introduced in ES2015.

It introduce two new keywords `import` and `export` for this.

TypeScript supports them.
But due to historic reasons,
there are some extension to the syntax and a few settings you need to be aware of.

## Script vs Module File

In TypeScript, it categorizes source files into two categories with respect to module:
[script file](/GLOSSARY.md#script-file) and [module file](/GLOSSARY.md#module-file).

When a file contains top-level `import/export` statement,
it is identified as a module file.
If not, it is identified as a script file.

Each module file has its own context,
meaning the local variables within the module file is local to the file itself.

Script file shares the global context,
meaning the local variables within the script file is declared at the global level.
In browser environment, they will be declared in the `window` object.

## CommonJS

CommonJS is a module specification that is widely used in NodeJS and a few other platforms before the introduction of ESM.
There are still a vast majority of libraries in the JavaScript ecosystem distribute in CommonJS format.

## Configuration

If your code needs to import libraries distributed in [CommonJS](/GLOSSARY.md#commonjs) (which is 99% of the time), you **must** enable the `esModuleInterop` config option.

> Why?

In TypeScript 1.8,
I warn about the use of interop because the flag `allowSyntheticDefaultImports` only solve half of the problem and can cause a systematic breakdown.
With the introduction of `esModuleInterop` in 2.7,
this problem is mostly resolved except for <https://github.com/Microsoft/TypeScript/issues/7398>,
which will gradually go away as ESM adoption rate increase.

---

You **should not** configure `allowSyntheticDefaultImports`.

> Why?

The `esModuleInterop` options covers both compile time and runtime interop behavior between ESM and CommonJS.
With `esModuleInterop` turned on, you do not need `allowSyntheticDefaultImports`.

## Organization

The `import` and `export` statements in module files are statically analyzed.

so their relative order (between `import` and `export`) does not matter.

```ts
// file1.ts
export const foo = 'foo'

// file2.ts
export { foo }
import { foo } from './file1'

// file3.ts
import { foo } from './file2'

console.log(foo) // <-- 'foo'
```

But a good organization still matters.

## Import

You **should** place `import` statements at the top of the file.

> Why?

Putting `import` statements at the top gives you a quick glance on what are the dependencies of this file.

VSCode: this is the default behavior of `Organize Imports`.

---

Imports **should** be organized alphabetically.

> Why?

The imports are easier to read this way,
and the module imports are naturally placed before local imports.

VSCode: this is the default behavior of `Organize Imports`.

---

**Must not** use `import = require('x')` syntax.

> Why?

This is TypeScript specific syntax.
It will not work with ESM, only CommonJS.
With `esModuleInterop`, there is no need to use this syntax.
Just do `import x from 'x'`.

---

**Should** use default import syntax (`import x from 'x'`) to import CommonJS module.

> Why?

The default import is designed as a replacement for the CommonJS module.

```ts
// bad
const dr = require('domready')
import dr = require('domready')
import * as dr from 'domready' // does not work

// good
import dr from 'domready'
```

---

**Must not** use import module object syntax (`import * as x from 'x'`) to import CommonJS module.

> Why?

This does not work if the CommonJS module is a function, class, or a primitive value.
With `esModuleInterop`, there is no reason to use this syntax for CommonJS modules.

---

You **may** use named import (`import { Foo } from 'x'`) to import part of CommonJS module.

> Why?

Some packages and modules, for example `lodash` or `fs`, are a collection of functions that are meant to be used separately.
Using named import get the extra benefit that when they are distributed in ESM format,
the imports are now tree-shakable so the over size of your code will be reduced.

However, when I dug deep into ESM and CommonJS interoperability issues,
I recall that there is a problem for using named import with CommonJS module.
The official specification does not support it.

However, it seems to work just fine in TypeScript.
But out of caution, I put this out there so thay you would not be suprised if you encounter problems. **Citation needed**.

## Exports

You **must not** use `export =` syntax.

> Why?

This is TypeScript specific syntax.
Using it means you are creating a CommonJS module.
You should always write in ESM syntax,
and if needed, transpile it CommonJS with the `mode: "commonjs"` option.

```ts
// bad
export = function x() { ... };

// ok
export default function x() { ... }

// best
export function x() { ... }
```

---

You **should** use named export most of the time.
You **should not** use default export.

> Why?

Default export is designed to replace the default export mechanism in CommonJS.

```ts
// CommonJS
module.exports = Foo
```

But it has several drawbacks.

You cannot export variables directly.
It only accepts `expression`.

```ts
// error
export default const foo = 'foo'

// has to be
const foo = 'foo'
export default foo
```

Name of the import variable is not enforced.
If you specialize or generalize the code you are writing and provide a better name,
the name is not reflected at call site and cause confusion.

```ts
// getVeggie is changed to getMeat
export default function getMeat() { ... }

// cook.ts
// now you try to cook meat like you are cooking veggie.
import getVeggie from './getMeat'
```

Default exports conflict each other when you re-export.

```ts
// getMeat.ts
export default function getMeat() { ... }

// getVeggie.ts
export default function getVeggie() { ... }

// index.ts
export * from './getMeat'
export * from './getVeggie' // Error

// have to change them back to named export
export { default as getMeat } from './getMeat'
export { default as getVeggie } from './getVeggie'
```

### References

- <https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/>

## Re-exports

Re-export is a way to expose features from another module without introducing a local variable.

There are several ways to do it:

```ts
// export the whole module
export * from './foo'

// export the whold module sa a `foo` module object
export * as foo from './foo'

// export specific named exports
export { foo } from './foo'

// export named exports with rename
export { foo as boo } from './foo'

// export default export as named export
export { default as foo } from './foo'
```

---

Re-export statements **should** be placed right after `import` statements.

> Why?

Since re-export do not introduce local variables,
It should not be placed in the mist of the code and disrupt the flow.

---

You **should** re-export all public features inside a folder in `index.ts`.

```ts
// sing.ts
export function sing() { ... }

// dance.ts
export function dance() { ... }

// index.ts
export * from './sing'
export * from './dance'
```

> Why?

The re-exports in `index.ts` provides a clear set of features that can be used by other code.
While your consumers can always deep link to the specific code,
encouraging them to do so cause your library to become rigid.

Thus, always provide an `index.ts` with the features you declare to your consumers that are safe to use,
and will not break following semantic versioning.

One caveat to this guideline is that you need to be careful with your overall design,
as using re-exports through `index.ts` can create circular dependency that are hard to find.

So you need to properly design your library and follow best practices such as Component Design Principles and Clean Architecture.

### References

- <https://www.typescriptlang.org/docs/handbook/modules.html#re-exports>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export>
- <https://riptutorial.com/typescript/example/28620/re-export>

## References

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules>
- <https://v8.dev/features/modules>
- <https://github.com/airbnb/javascript#modules>
- <https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde>
- <https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require>

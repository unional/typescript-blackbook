# Namespace and Module

When declaring a module (or namespace), there are two options:

- declaration wrapped in `declare {namespace,module} <name> {`, or
- top-level declaration

  > Top-level declarations in a source file with no top-level import or export declarations belong to the global namespace.
  > Top-level declarations in a source file with one or more top-level import or export declarations belong to the module represented by that source file. ([link](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#23-declarations), need to scroll down a bit)

### Namespace
- Avoid namespce as a mean to share and reference code.

  > Why? Use ES2015 module instead. Always.

  tslint [`no-internal-module`](tslint.md/no-internal-module-native)

  ```ts
  // bad
  namespace Chai {
    export interface A {
      // stuff...
    };
  }

  // good
  export interface A {
    // stuff...
  };

  // good
  export default interface A {
    // stuff...
  };
  ```

- **Anti-pattern*- You can use namespace to share and reference code if:
  - You are exposing a global variable so you can access it in browser development tools **for runtime testing*- only.
  - You are developing an application. It will not be used as an module.
  - **But really, avoid it**

  > Why? Global pollution, even a tiny bit, is not fun.
  > It seriously hinder the ability to test your code, especially the namespace/variable has states.
  > You can still pollute the global namespace using `window.foo = x` in your module. Do it in one place (typically at your entry `app.ts`).

  ```ts
  // really bad
  namespace MyProductGlobal {
    // stuff...
  }

  // much better
  import myProductGlobal from '../myProductGlobal';
  ```

### Module
- Do not wrap typings in `declare module "X" {`. Expose as **top-level declaration**

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

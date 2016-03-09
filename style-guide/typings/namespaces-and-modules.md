# Namespace and Module
Prior to TypeScript 1.5, there are two types of modules:
* Internal module (`declare module X {`)
* External module (`declare module "X" {`)

In TypeScript 1.5, the term and keyword `namespace` is introduced. The nomenclature has changed.
* Internal module -> namespace
* External module -> module

The `declare module X {` syntax exists for backward compatibility.

When declaring a module (or namespace), there are two options:
* declaration wrapped in `declare {namespace,module} <name> {`, or
* top-level declaration

> Top-level declarations in a source file with no top-level import or export declarations belong to the global namespace. Top-level declarations in a source file with one or more top-level import or export declarations belong to the module represented by that source file. ([link](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#23-declarations), need to scroll down a bit)

### Internal Module
- Use `declare namespace X {` syntax.
- Avoid `declare module X {` syntax. tslint [`no-internal-module`](tslint.md/no-internal-module-native)

> Why? `declare namespace X {` will fixate the namespace to the name `X`, which is what you want.

```ts
// bad
declare module Chai {
  // stuff...
}

// good
declare namespace Chai {
  // stuff...
}
```

### External Module
- Do not wrap typings in `declare module "X" {`. Expose as **top-level declaration**

> Why? `declare module "X" {` will cause name conflict if consumer use two different version of the same library.

```ts
// bad
declare module X {
  export interface A {
    // stuff...
  };
}

// good
export interface A {
  // stuff...
};
```

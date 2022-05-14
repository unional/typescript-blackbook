# Module

Module in TypeScript has the same semantic meaning as in ES2015.

The actual definition on module is subtle and complex.
Fortunately, if you follow these simple rules, creating module is relatively straight forward.

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

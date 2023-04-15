---
slug: comments
title: "Creating rich comments"
authors: [unional]
tags: [comment, documentation, DX]
---

# Comments

You **should** add JSDoc comments to your code.

> Why?

For a long time, I does not do this.
My belief was that the code should be self-explanatory.

However, having the comments in the code,
especially when it is a public API,
makes it a lot easier for consumer to use the code.

Especially if you can provide examples in the comments.

For example, the following is a comment for the `Equal` type in [type-plus]:

```ts
/**
 * Checks `A` and `B` are equal.
 *
 * ```ts
 * type R = Equal<1, 1> // true
 * type R = Equal<any, any> // true
 * type R = Equal<boolean, boolean> // true
 * type R = Equal<true, true> // true
 * type R = Equal<[1], [1]> // true
 *
 * type R = Equal<boolean, true> // false
 * type R = Equal<any, 1> // false
 * type R = Equal<[any], [1]> // false
 * type R = Equal<{ a: 1 }, { a: 1; b: 2 }> // false
 * ```
 */
export type Equal<A, B, Then = true, Else = false> = ...
```

---

You **should not** include import statements in the comment examples.

> Why?

Your code or type can be reused in different context.
The import statement might not be the same in different contexts.

For example, your code might be reused in another package.
So the import statement will provide the wrong information.

❌ Bad

```ts
/**
 * Check if the type `T` is exactly `any`.
 *
 * ```ts
 * import type { AnyType } from 'type-plus'
 *
 * type R = AnyType<any> // any
 *
 * type R = AnyType<never> // never
 * type R = AnyType<unknown> // never
 * type R = AnyType<string | boolean> // never
 * ```
 */
export type AnyType<T, Then = T, Else = never> = ...
```

✅ Good

```ts
/**
 * Check if the type `T` is exactly `any`.
 *
 * ```ts
 * type R = AnyType<any> // any
 *
 * type R = AnyType<never> // never
 * type R = AnyType<unknown> // never
 * type R = AnyType<string | boolean> // never
 * ```
 */
export type AnyType<T, Then = T, Else = never> = ...
```

[type-plus]: https://github.com/unional/type-plus

# Tuple Type

Introduced in: TypeScript 1.3

[Tuple Type](https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple) allows you to express an array with different types for different elements.

## Variadic Tuple Types

Introduced in: [TypeScript 4.0](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/#variadic-tuple-types)

Variadic tuple types refers to typing tuple types with variable length.

```ts file=../../examples/tuple/standard/variadic.ts
function tail<T extends any[]>(arr: readonly [any, ...T]): T {
  const [_ignored, ...rest] = arr;
  return rest;
}

type Strings = [string, string];
type Numbers = [number, number];

// [string, string, number, number, boolean]
type StrStrNumNumBool = [...Strings, ...Numbers, boolean];
```

## Declare from Constant

Introduced in: [TypeScript 3.4](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)

If the tuple can be initialized at declaration,
you **should** use `as const` to declare the type.

```ts file=../../examples/tuple/standard/as-const.ts
const obj = { a: 1 }

// [1, 2, { a: 1 }]
const tupleConst = [1, 2, obj] as const
```

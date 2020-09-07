# Tuple Type

Introduced in: TypeScript 1.3

[Tuple Type](https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple) allows you to express an array with different types for different elements.

Note that this describe is slightly different then the description in the handbook.
With variadic tuple type support in TypeScript 4.0,
we can now descrie tuple types with variable length.

## Variadic Tuple Types

Introduced in: [TypeScript 4.0](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/#variadic-tuple-types)

Variadic tuple types refers to typing tuple types with variable length.

✔️ good

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

## Labeled Tuple Elements

Introduced in: [TypeScript 4.0](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/#labeled-tuple-elements)

In TypeScript 4.0,
tuple elements can now be labeled.

```ts
type Range = [start: number, end: number]
```

You **should** use labeled tuple for homogeneous types.

❌should avoid

```ts file=../../examples/tuple/standard/labeled-tuple.bad.ts
type RangeObj = { start: number, end: number }
```

✔️good

```ts file=../../examples/tuple/standard/labeled-tuple.good.ts
type RangeTuple = [start: number, end: number]
```

> Why?

For simple type,
it is more convenient to use array instead of object.

```ts
type Position = [x: number, y: number]
add([0, 0], [100, 100])

type PositionObj = { x: number, y: number }
add({ x: 0, y: 0 }, { x: 100, y: 100 })
```

Another common use case is typing configuration like this:

```json
{
  "plugins": [
    "plugin-a",
    ["plugin-b", { "opt1": true }]
  ]
}
```

```ts
type Config = {
  plugins: Array<string | [name: string, option: { opt1: boolean }]>
}
```

---

You **should not** use labeled tuple for complex types.

❌ bad

```ts
type Complex = [id: string, rate: number, options: { a: string }]
function foo(...complex: Complex) {}
```

✔️ good

```ts
function foo(id: string, rate: number, option: { a: string }) {}

type Complex = { id: string, rate: number, options: { a: string } }
```

> Why?

Labeled tuple should be considered as a stop gap mechanism to type existing array type in JavaScript,
and for simple types as mentioned above.

The array type should not be used as a replacement of object type.
For one, array functions in tuple type such as `push()` make no sense to the tuple type.

## Declare from Constant

Introduced in: [TypeScript 3.4](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)

If the tuple can be initialized at declaration,
you **should** use `as const` to declare the type.

✔️ good

```ts file=../../examples/tuple/standard/as-const.ts
const obj = { a: 1 }

// [1, 2, { a: 1 }]
const tupleConst = [1, 2, obj] as const
```

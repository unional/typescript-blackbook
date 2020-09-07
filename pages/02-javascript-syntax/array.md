# Array

[`Array`][array] in JavaScript is a high-level, list-like objects.

## Array creation

You **should** use literal syntax to create array.

❌ bad

```ts file=../../examples/array/standard/declare-style.bad.ts
const arrayGeneric = new Array<string>()
```

✔️ good

```ts file=../../examples/array/standard/declare-style.good.ts
const arrayLiteral: string[] = []
const arrayCast = [] as string[]
```

> Why?

The literal syntax is more compact and the most common.

---

You **must** declare array type for empty array with `noImplicitAny` and `strictNullChecks`.

✔️ must

```ts file=../../examples/array/standard/empty-must-declare.ts
export const x: string[] = []
x.push('abc')
```

> Why?

When both `noImplicitAny` and `strictNullChecks` are turned on,
empty array literals will have type `never[]` and not widen.
This is a small price to pay for getting much better control-flow analysis.

- <https://github.com/microsoft/TypeScript/pull/8944>

## Type declaration

**Should** use `Array<T>` for complex array type.
**May** use literal syntax for primitive types and unions.

❌ bad

```ts file=../../examples/array/standard/declare-generic.bad.ts
let simpleGeneric: Array<string>

type Person = {}
let complexGeneric: { people: Person[] }[]
```

👌 either is fine

```ts file=../../examples/array/standard/declare-generic.ok.ts
let declareSimpleUnionArray: (string | string[])[]
let declareUnionArrayGeneric: Array<string | string[]>
```

✔️ good

```ts file=../../examples/array/standard/declare-generic.good.ts
let declareSimpleArray: string[]

type Car = {}
let declareComplexArray: Array<{ cars: Car[] }>
```

> Why?

The `Array<>` syntax is visually clear that your type is an array.
It also provides better focus on the internal type.

## Inserting

**Must** use `.push()` or `.unshift()` to add items to an array.

```ts
const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```

> Why?

Use direct assignment to add items at the end of an array is unconventional.
It hinders readability.

## Array spread

**Should** use array spread to copy arrays.

```ts
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

> Why?

It is easier to read, and there is a performance gain 😎!.

Performance comparison: <https://jsperf.com/spread-vs-copy>

---

**Should** use array spread to concat arrays.

```ts
// bad
a.concat(b)

// good
[...a, ...b]
```

> Why?

It is easier to read, and there is a performance gain 😎!.

Performance comparison: <https://jsperf.com/spread-vs-concat-vs-push>

(use `.push()` if you really need the performance).

Additional references:

- <https://stackoverflow.com/questions/48865710/spread-operator-vs-array-concat>

[array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

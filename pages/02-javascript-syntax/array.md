# Array

[`Array`][array] in JavaScript is a high-level, list-like objects.

## Array creation

You **should** use literal syntax to create array.

❌ bad

![../../examples/variables.ts]

❌ bad

```ts
const items = new Array<string>()
```

✔️ good

```ts
const items: string[] = []
const items = [] as string[]
```

```ts
// bad
const items = new Array<string>()

// good
const items: string[] = []

// good
const items = [] as string[]
```

> Why?

The literal syntax is more compact and the most common.

---

**May** not need to do `let x: any[] = []`.

> Why?

With both `noImplicitAny` and `strictNullChecks` turned on,
TypeScript can do a better control flow analysis and default `x` to be `any[]`.

## Type declaration

**Should** use `Array<T>` for complex array type.
**May** use literal syntax for primitive types and unions.

```ts
// bad
const items: Array<string>
const items: { people: Person[] }[]

// either is fine
const items: (string | string[])[]
const items: Array<string | string[]>

// good
const items: string[]
const items: Array<{ people: Person[] }>
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

[array]: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array>

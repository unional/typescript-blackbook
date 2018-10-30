# Union type

```ts
const x: string | string[] = []

function arr <T> (value?: T | T[]): T[] {
  return value as T[]
}

const y = arr<number | string>(x) // (number | string)[]
const p = arr(x) // string[]

// This does not work.
// @blakeembrey: if you keep them separate you can never coerce a type like string | string[] or number | string[].
// Because either the first or the second would match and you end up with a return type like (string | string[])[] instead of string[]
function arr2 <T> (value?: T[]): T[]
function arr2 <T> (value?: T): T[]
function arr2 <T> (value?: T | T[]): T[] {
  return value as T[]
}

const z = arr2(x)  // (string | string[])[]
```

<https://github.com/typed-typings/npm-lodash/pull/18#issuecomment-230015625>

## Discriminative union

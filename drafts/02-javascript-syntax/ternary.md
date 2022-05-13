# Ternary operator

You **should** keep the operator at the end of line when you write it in multiple lines.

⚠️ ok but be aware

```ts file=../../examples/ternary/standard/multi-lines.ok.ts
function squareIfEven(x: number) {
  return x % 2 === 0
    ? x * x
    : x
}
```

✔️ good

```ts file=../../examples/ternary/standard/multi-lines.good.ts
function squareIfEven(x: number) {
  return x % 2 === 0 ?
    x * x :
    x
}
```

> Why?

Placing the operator at the start of the new line does improve readability.
However, there is a slight chance that it could lead to incorrect result by commenting out lines:

```ts file=../../examples/ternary/standard/multi-lines.bad-example.ts
function isEvenThenSquare(x: number) {
  return x % 2 === 0 // now returns a boolean
    // ? x * x
    // : x
}
```

But given this is a very slim case,
you can choose the one you prefer.

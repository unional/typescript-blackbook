# Type Declaration

There are two ways to declare types: type annotation and type assertion.

> Type annotations in TypeScript are lightweight ways to record the intended contract of the function or variable.

- <https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#type-annotations>

> Type assertions are a way to tell the compiler “trust me, I know what I’m doing.”

- <https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions>

## When To Use

TypeScript is designed to focus of tooling support.
It can do type inference through its control-flow analysis in many situations.

So when to do type declaration is not a simple question to answer.

In general, you **should not** declare type unless it is necessary.

> Why?

At the end, it is all about coding efficiency.
Declaring the type of a dynamic language is not an easy task.
The types can get complicated very quickly.

Often time, TypeScript compiler and language service is hard at work to infer the types for you.
And a lot of times those inferred type just works.
So defining your own types may not be neccessary.

There are exceptions and we will go over those exceptions here.

---

You **must** declare types for function parameters in function declaration.

```ts
function fool(name: string) {
  reutnr `Hi ${name} fool`
}
```

> Why?

Well, TypeScript will spank you if you don't.
That's why 😆.

Note that if the function expression type is already defined,
you do not need to declare types for the parameters.
They are inferred.

```ts
type increment = (value: number) => number

// `value` is number by inference
const inc: increment = value => value + 1
```

---

You **must** declare type when you need to narrow or widen the type.

```ts
// type narrowing
const colorMap = { apple: 'red' as const }

// type widening
const stock: Record<string, number> = { apple: 2 }
```

---

You **must** declare type when you are using generics.

> Why?

This is kind of a no-brainer as type inference cannot create generics for you.
And geneics is also a form of type widening.
But mentioning it just for the sports 🏓.

---

You **should** declare types for your public API.

> Why?

For simple types, you may skip this guideline.
But for more complex types,
It is a good practice to define the types explicitly so that:

- Accidental breaking changes can be detected.
- Consumer can refer to the type you defined.

## Type Annotation vs Type Assertion

In general, you **may** prefer type annotation over type assertion.

```ts
// ok
function foo() {
  return { a: 1 } as Record<string, number>
}

// better
function foo(): Record<string, number> {
  return { a: 1 }
}
```

> Why?

Type assertion basically telling the compiler that
"hey, I know you think `x` is `X`, but I know it is actually `Y`, so let's treat it as `Y`.

For Type annotation, it is like
"hey, I think `x` is `Y`, let me know if you think otherwise".

Therefore, type assertion should be use sparsingly.
Only when you sure that the compiler is wrong or at location where you know you don't care (i.e. `as any`).

> Why not?

In practice, with the advance of type inference,
a lot of times when you need to do type annotation,
type assertion also works just as good, if not better.

```ts
// x: { a: number }
const x = { a: 1 }

// type annotation
const x: { a: 1 } = { a: 1 }

// type assertion
const x = { a: 1 as const }
```

If you try to do type assertion when it is clearly wrong,
TypeScript will actually point it out as error.

```ts
const a = 123

// error: Conversion of type 'number' to type 'string' may be a mistake
const b = a as string

// you have to do this
const b = a as unknown as string
```

This is a pretty loose guideline because while it does affect readability in some cases, e.g.:

```ts
function doSomething() {
  // 50 lines later...
  return abc as SomeType
}
```

In practice, you don't often go to the source code to figure out the type.
You would check the return value assigned in your code,
or check the code signature in the IDE.

```ts
// You see result is SomeType
const result = doSomething()
```

---

## Type Assertion

There are two ways to do type assertion.

```ts
let x = 1 as any
let y = <any>x
```

---

You **must** use the `as X` syntax for type assertion.

```ts
// bad
let x = <Partial<SomeType>>y

// good
let x = y as Partial<SomeType>
```

> Why?

The `<Y>` spelling is also used in generic as well as in JSX.
It is better to use the `as` syntax to avoid confusion.

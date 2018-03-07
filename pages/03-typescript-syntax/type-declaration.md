# Type Declaration

TypeScript is all about types.
In this section, we are going to talk about how to declare types.

There are two ways to declare types: [type annotation](#type-annotation) and [type assertion](#type-assertion).

## When To Use

TypeScript is designed to focus on tooling support.
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

Declaring function parameter types is required most of the time with `noImplicitAny`.
It is a small price to pay compare to the benefits you get from better control-flow analysis.

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

```ts
// bad
export function config(options: { level: string }) { ... }

// good
export type Options = { level: string }
export function config(options: Options) { ... }
```

> Why?

For simple types, you may skip this guideline.
But for more complex types,
It is a good practice to define the types explicitly so that:

- Accidental breaking changes can be detected.
- Consumer can refer to the type you defined.

---

You **should not** declare return type unless there is a need to.

> Why?

If the return type can be inferred, it is probably fine.
Let TypeScript do its job.

As you are writing tests and add more use cases,
TypeScript will notify you when things stop working.

That's a good time to add types.

> Why not?

There are a few exceptions to this guideline:

- When you are writing a public API, by all means add the types.
- Dealing with complex type and want to clarify your intent.
- Returning value from external library and want to do type narrowing.

## Type Annotation

[Type annotations][type-annotation] in TypeScript are lightweight ways to record the intended contract of the function or variable.

## Type Assertion

[Type assertions][type-assertion] are a way to tell the compiler “trust me, I know what I’m doing.”

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

[type-annotation]: <https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#type-annotations>
[type-assertion]: <https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions>

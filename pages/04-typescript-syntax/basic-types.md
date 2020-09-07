# Basic Types

## any

You **should** avoid asserting type as `any`.

> Why?

`as any` is a very powerful statement telling the compiler to turn off type checking.

> Why not?

There are times that the compiler cannot infer the type correctly,
or the type is specified by other libraries and is incorrect,
or the type is too complicate to create and does not worth the effort to fix.

For these cases, it is okey to use `as any`.
Make sure you make this decision consciously.

---

You **should** avoid annotating method parameters and callbacks as `any`.

> Why?

Annotating function parameters and callbacks as `any` has similar effect as asserting them as `any`.

The compiler might able to infer the type for you through inheritence or function type declaration.
Annotating parameter as `any` overrides that and you loose all benefits of using TypeScript.

---

You **may** use `as unknown`.

### References

- <https://github.com/Microsoft/TypeScript/pull/24439>
- <https://mariusschulz.com/blog/the-unknown-type-in-typescript>

## enum

> Enums allow us to define a set of named constants.

- <https://www.typescriptlang.org/docs/handbook/enums.html>
- <https://www.typescriptlang.org/docs/handbook/basic-types.html#enum>

There are a few special rules about `enum` type:

- values can be either `string` or `number`

```ts
enum map { a = 1, b = 'b' }
}
```

- it is nominal typed

```ts
enum JapanVocaloid { miku, luka }

enum ChinaVocaloid { miku, LuoTianyi, XingChen }

let myFavoriteVocaloid = ChinaVocaloid.miku

// error
myFavoriteVocaloid = JapanVocaloid.miku
```

---

You **should avoid** using `enum`. You **should** use `const` instead.

```ts
// bad
enum Color { Red, Green, Blue }

// good
const COLOR = {
  Red: 0,
  Green: 1,
  Blue: 2
} as const

// good
const COLOR_RED = 0
const COLOR_GREEN = 1
const COLOR_BLUE = 2
```

> Why?

While `enum` is more compact,
and provide additional nominal protection,
it is a TypeScript syntax.
It goes against our design principles.

The transpiled code can be different depends on the config options,
and it can get confusing as it may get erased (`const enum`).

## References

- <https://www.typescriptlang.org/docs/handbook/basic-types.html>

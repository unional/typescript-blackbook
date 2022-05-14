# enum

> Enums allow us to define a set of named constants.

- <https://www.typescriptlang.org/docs/handbook/enums.html>
- <https://www.typescriptlang.org/docs/handbook/basic-types.html#enum>

There are a few special rules about `enum` type:

- values can be either `string` or `number`

```ts
enum map { a = 1, b = 'b' }
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

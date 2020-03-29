# string

Don't need much explanation, don't we? 😇.

## String Constructor

**Should not** use `String(x)` when `x` supports `toString()`.

> Why?

In JavaScript,
using `String(x)` over `x.toString()` has the benefit that it will work with primitive types such as `number`, `null`, or `undefined`.

But in TypeScript,
the type of the variable should be clear in the first place.

Using `x.toString()` is easier (due to code completion),
and has the benefit of catching the error boldly,
instead of letting it slip through as in JavaScript.

---

**Should** use `String(x)` constructor over type cast (`x as string`).

> Why?

Type cast `x as string` only changes the type of the value at build time,
the value does not change in runtime.

```ts
const stringObject = String(123)
```

---

**Should** use `String(x)` over implicit conversion `'' + x`.

> Why?

Implicit conversion is harder to read,
while the string constructor is perfectly clear about your intent.

---

## String Literal

## Template Literals

## Tagged Tamplates

## Reference

- <https://www.javascript.com/learn/strings>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>

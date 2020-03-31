# string

> primitive string is a sequence of characters used to represent text.

- <https://developer.mozilla.org/en-US/docs/Glossary/String>

## String Constructor

> The `String` global object is a constructor for strings or a sequence of characters.

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>

It provides the string manipulation functions you use on the primitive strings.

99.9999% of the time,
you don't need to use `String` as a constructor or a function.

---

You **should not** use `String` to create `String` object.

```ts
// not much of a reason to do this
const str = new String('abc')
```

> Why?

JavaScript automatically converts primitive strings to String objects.
So you just don't need to do it yourself.

## Type Conversion

You **may not** use `String` (as a function) to convert value to a string.

```ts
// so so
const str = String(123)

// good
const str = '' + 123
```

> Why?

While `const str = String(123)` is easier to read,
`const str = '' + 123` is much more efficient.

<https://jsperf.com/string-vs-implicit>

---

You **should** convert value to string by `'' + value` and not `value + ''`.

```ts
// bad
const str = value + ''

// good
const str = '' + value
```

> Why?

We read from left to right.
Doing `'' + value` let us know immediately the resulting value is `string`.
We can miss the `+ ''` if the expression is long or when it is embedded in other expressions.

---

You **must not** use type assertion (`x as string`) to convert value to `string`.

```ts
// very bad
const num: any = 123
const str = num as string

// good
const str = '' + 123
```

> Why?

It does not work that way.
Type assertion `x as string` only changes the type at build time,
the value does not change in runtime.

---

You **should** use `toString()` instead of `'' + value` when the `value` has `toString()`.

> Why?

In JavaScript,
using `'' + x` over `x.toString()` has the benefit that it will work with primitive types such as `number`, `null`, or `undefined`.

But in TypeScript,
the type of the variable should be clear in the first place.

Using `x.toString()` is more clear,
and has the benefit of catching the error boldly,
instead of letting it slip through as in JavaScript.

---

## String Literal

## Template Literals

## Tagged Tamplates

## Reference

- <https://www.javascript.com/learn/strings>
- <https://developer.mozilla.org/en-US/docs/Glossary/String>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>
- <https://www.tutorialspoint.com/javascript/javascript_strings_object.htm>

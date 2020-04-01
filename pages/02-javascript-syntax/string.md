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

## String Literal

You **should** prefer to use single quotes `''` for strings.

```ts
// ok
const name = "Hatsune Miku"

// ok
const name = `Kagamine Rin`

// prefer
const name = 'Megurine Luka'
```

> Why?

Between double quotes `"` and single quotes `'`,
single quotes save a pinky 🤞.

---

You **should not** use linting rule to enforce quotes.

Turn off `eslint: quotes`.

> Why?

Don't fuzz over this.
Double quote or single quote and even template literals have their own benefits and use cases.

Use linting rule to enforce it just call for trouble and frustration.

- Single quotes are the easiest to use.
- Double quotes work well with JSON, especially you copy and paste from `.json` file.
- Template literal is useful when the content contains both single and double quotes.

Unless you have code formatter such as `prettier` or auto fix for `eslint` turned on,
the time you need to spend to adhere to the style just doesn't worth it 😉.

By the way, there are no measurable performance difference when using template literal:

- <https://jsperf.com/string-quotes>

---

You **should** enforce linting rule for specific situations.

> Why?

For example, if your code need to deal with Xml or Html strings.
Enforcing linting rule would be useful in this case.

```ts
// bad...example, but I think you get my point
const xml = '<div class="abc">' + "<br/>" + "<div class='xy" + '"></div></div>'
```

## Type Conversion

You **should not** use `String` (as a function) to convert value to a string.
You **should** use `'' + value` for primitive values.
You **should** use `.toString()` for object types.

```ts
const primitive = 12345
const obj = { a: 1 }

// bad
const primString = String(primitive)
const objectString = String(obj)

// good
const primString = '' + value
const objectString = obj.toString()
```

> Why?

For primitive values,
`const str = String(value)` is easier to read,
`const str = '' + value` is more efficient.

For object types,
`.toString()` is much more concise and more efficient than the other two.

In JavaScript,
using `'' + x` over `x.toString()` has the benefit that it will work with primitive types such as `number`, `null`, or `undefined`.

But in TypeScript,
the type of the variable should be clear in the first place.

Using `x.toString()` is more clear,
and has the benefit of catching the error boldly,
instead of letting it slip through as in JavaScript.

<https://jsperf.com/string-vs-implicit-vs-tostring>

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

## Template Literals

## Tagged Tamplates

## Reference

- <https://www.javascript.com/learn/strings>
- <https://developer.mozilla.org/en-US/docs/Glossary/String>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String>

# function

> A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions>

There are two ways to declare a function: function declaration and function expression.

---

You **should** prefer function declaration over function expression.

```ts
// bad
const foo = function () {}

// ok
const foo = function foo() {}

// best
function foo() {}
```

> Why?

Function declaration are hoisted.
While [some](https://github.com/airbnb/javascript#functions) finds that it harms readability and maintainability,
I have yet find a solid case to prove that.

The most important thing about hoisting is knowing the difference between load time and runtime.
And in all aspect of good designs and architecture, you should not perform work during load time.
As long as you follow this rule, hoisting or not is irrevelent.

Function declaration is more concise and clearly indicate it is a function. Rely on hoisting improves the readability of your code because it flows natually from top to bottom.

---

If you still want to use function expression, you **should** provide an explicit name.
And the name of the function and the variable it assigns to **should** be consistent.

```ts
// bad
const foo = function () {}

// ok
const foo = function longUniqueMoreDescriptiveLexicalFoo() {}

// good
const foo = function foo() {}
```

> Why?

Anonymous function is hard to debug because it does not give you a clue on where it comes from when looking at the call stack.

In recent years, modern browsers and babel adds the name for you based on the assigned variable name:

```js
const foo = function () {}

// becomes
const foo = function foo() {}
```

But TypeScript does not do that.
Also to support older browser,
it is better to add the name explicitly.

About creating a short alias to a long and description function name,
it sounds like a good idea but tt adds additional burden in maintaining a long name that you will not use in code,
in exchange for a easier to search name during debug.

I would stick to function declaration instead.

## Parameter alignment

There are several factors to consider:

- Easy to read
- Can easily formatted by hand
- Can be auto-formated by all IDE
- Work well during merge

```ts
// bad
// not easy to format by hand
// cannot be auto-formatted by all IDE
// does not work well against merge
function dontDoLikeThis(firstParam,
                        secondParam)
// not easy to read
// not easy to format automatically by all IDE
function dontDoLikeThis(
  firstParam, secondParam
)

// good
function doThis(firstParam, secondParam)
function doThis(
  firstParam,
  secondParam
)
```

## Reference

- <https://www.youtube.com/watch?v=ZsHMHukIlJY>

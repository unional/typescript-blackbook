# Variable Declarations

In JavaScript, there are four ways to declare a variable.

You can use the `var`, `let`, or `const` keyword,
or you can skip it altogether which means you will implicitly declare the variable globally.

In TypeScript, since the last one is very problematic and often a source of error,
it prohibits that syntax so you must always use `var`, `let`, or `const`.

`let` and `const` are block-scoped.
`var` is function-scoped.

```ts
// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
  var c = 1
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
console.log(c); // 1
```

## `var` declaration

`var` is the traditional way to declare a variable in JavaScript.
The variable declared with var is function-scoped and is hoisted to the top of the function.

- avoid using `var` and use `let` or `const` instead.

> Why?
> Due to its scoping rule and behavior, it is often a common source of error in JavaScript programs.
> Because of that, ES2015 introduced `let` and `const`, which are block-scoped.

## `let` declaration

`let` allows you to declare a variable and reassign it later.

- If you must reassign references, use `let` instead of `var`.

> Why?
> `let` is block-scoped rather than function-scoped like `var`.

```ts
// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}
```

- Prefer `const` over `let` whenever possible.

> Why?
> Reassignability is mostly unnecessary except for cases like doing a counter.
> Reassigning a variable introduces temporal coupling and makes your code harder to understand.

```ts
// bad
let item = getSomething();

if (someCondition) {
  item = getSomethingElse();
}

// what is in `item`?
```

## `const` declaration

`const` creates a variable that cannot be reassigned.

- Use `const` for most of your variables (98%+).

> Why?
> `const` ensures that you can't reassign your references.
> Reassigning a variable introduces temporal coupling and makes your code harder to understand.
> It is better to use `const` to create multiple variables and give them better namings.
> It is also encourage you to break your code to smaller pieces name making it easier to understand.

```typescript
// bad
var a = 1
let b = 2

// good
const a = 1
const b = 2
```

```ts
// bad
let result
try {
  result = getData()
}
catch {
  result = someDefaultValue
}

// better
const result = getDataOrDefault()

function getDataOrDefault() {
  try {
    return getData()
  }
  catch {
    return someDefaultValue
  }
}
```

## Declaration Statement

TypeScript and JavaScript allows you to create multiple variables in a single declaration statement.

- Use one declaration per variable.

> Why?
> It is easier for refactoring and will not introduce punctuation-only diffs.
> You can also step through each declaration with the debugger,
> instead of jumping through all of them at once.
> <https://github.com/airbnb/javascript#variables--one-const>

```js
// bad
const items = getItems(),
  goSportsTeam = true,
  dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
// Note that this will be caught by TypeScript.
const items = getItems(),
  goSportsTeam = true;
  dragonball = 'z';

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
```

- Declare variable close to where it is going to be used.

## Reference

- Handbook: <https://www.typescriptlang.org/docs/handbook/variable-declarations.html>
- Airbnb Javascript Style Guide: <https://github.com/airbnb/javascript>

# Assignment Operators

> An assignment operator assigns a value to its left operand based on the value of its right operand.

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators>

---

You **may** do chain assignment.

```ts
// ok
const a = b = 1
```

> Why?

In JavaScript,
chain assignment is not a good idea because you might introduce global variable if you are not careful.

However, in TypeScript you don't have this problem because the compilier will spot the error for you 😎.

---

You **should not** have linebreaks before or after `=` in an assignment.

```ts
// bad
const foo =
  'foo'

// bad
const foo
  = 'foo'

// good
const foo = 'foo'
```

> Why?

These incidental linebreaks would throw off tools that rely on comments.

```ts
// bad, broke tooling
// istanbul ignore next
// tslint:disable-next-line
const foo =
  somethingToIgnore()

// good
// istanbul ignore next
// tslint:disable-next-line
const foo = somethingToIgnore()
```

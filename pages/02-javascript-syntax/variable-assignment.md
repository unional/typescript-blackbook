# Variable Assignment

- It is ok to do chain assignment.

> Why?
> In JavaScript, chain assignment is not a good idea because you might introduce global variable if you are not careful.
> However, in TypeScript you don't have this problem because the compilier will spot the error for you.

```ts
// [ts] Cannot find name 'b'.
let a = b = 1
```

- avoid linebreaks before or after `=` in an assignment.

> Why?
> These incidental linebreaks would throw off tools that rely on comments.

```ts
// bad, broke toolings
// istanbul ignore next
// tslint:disable-next-line
const foo =
  somethingToIgnore()

// good
// istanbul ignore next
// tslint:disable-next-line
const foo = somethingToIgnore()
```

## References

In TypeScript and ES2015, you have three choice for references: `var`, `let`, and `const`.

`let` and `const` are block-scoped.

`var` is function-scoped.

```typescript
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

##### Use `const`
- Use `const` for all of your references; avoid using `var`. eslint: [`prefer-const`](http://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign.html)

> Why? This ensures that you can't reassign your references, which can lead to bugs and difficult to comprehend code.

```typescript
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```

##### Use `let`
- If you must reassign references, use `let` instead of `var`. eslint: [`no-var`](http://eslint.org/docs/rules/no-var.html) jscs: [`disallowVar`](http://jscs.info/rule/disallowVar)

> Why? `let` is block-scoped rather than function-scoped like `var`.

```typescript
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

##### Avoid `var`
- Before ES2015, `var` is the only reference option. Avoid using `var` in later code because it would lead to unexpected results.
+ Use `var` if your application needs to be very sensitive on memory consumption. But most of the time this is not an issue

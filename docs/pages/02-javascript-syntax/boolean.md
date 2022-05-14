# Boolean

The type of boolean in TypeScript is `boolean`.
It also have boolean literal types `true` and `false`

---

Predicate functions **should** return `boolean`.

```ts
// bad
function hasValue(value: any) {
  return value
}

// good
function hasValue(value: any) {
  return value !== undefined
}
```

> Why?

Relying on implicit conversion is dangerous.
Always be explicit.

```ts
hasValue(0) ? true : false // false
hasValue(false) ? true : false // false
hasValue('') ? true : false // false
hasValue(Symbol()) ? true : false // false
hasValue(Infinity) ? true : false // false
// but
new Boolean(Infinity) // true !!
```

---

When converting value to boolean, you **should** use double not (`!!`) operator.

```ts
const value = false
// bad
const b = new Boolean(value)
if (b) { /* executed! */ }

// so so
const c = Boolean(value)
if (c) { /* not executed */ }

// good
const d = !!value
if (d) { /* not executed */ }
```

> Why?

In 99.99999% of the time,
you do not even know the existence of the boolean object wrapper `Boolean`.
It is different then the `boolean` you use days in days out.

So don't confuse yourself and your reader by mentioning it in your code when not necessary.

## References

- <https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean>

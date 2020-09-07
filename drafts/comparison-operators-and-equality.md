# Comparison Operators & Equality

## Equality comparison

- Use `===` and `!==` over `==` and `!=`.

tslint:

```js
"triple-equals": [true]
```

## Conditional statments

- Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:

- **Objects** evaluate to **true**

- **Undefined** evaluates to **false**

- **Null** evaluates to **false**

- **Booleans** evaluate to **the value of the boolean**

- **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**

- **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

```typescript
if ([0] && []) {
  // true
  // an array (even an empty one) is an object, objects will evaluate to true
}
```

## Shortcuts

- Use shortcuts.

```typescript
// bad
if (name !== '') {
  // ...stuff...
}

// good
if (name) {
  // ...stuff...
}

// bad
if (collection.length > 0) {
  // ...stuff...
}

// good
if (collection.length) {
  // ...stuff...
}
```

## Ternaries

- Ternaries should not be nested and generally be single line expressions.

eslint rules: [`no-nested-ternary`](http://eslint.org/docs/rules/no-nested-ternary.html).

```typescript
// bad
const foo = maybe1 > maybe2
  ? "bar"
  : value1 > value2 ? "baz" : null;

// better
const maybeNull = value1 > value2 ? 'baz' : null;

const foo = maybe1 > maybe2
  ? 'bar'
  : maybeNull;

// best
const maybeNull = value1 > value2 ? 'baz' : null;

const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
```

- Avoid unneeded ternary statements.

eslint rules: [`no-unneeded-ternary`](http://eslint.org/docs/rules/no-unneeded-ternary.html).

```typescript
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```

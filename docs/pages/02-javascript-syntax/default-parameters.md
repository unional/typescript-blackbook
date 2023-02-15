# Default Parameters

> Default function parameters allow formal parameters to be initialized with default values if no value or `undefined` is passed.

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters>

## When To Use

You **should not** use default parameters in internal functions and methods.

```ts
// bad
function cook(food: Food, doneness = 'medium') { ... }
cook('chicken')

// good
function cook(food: Food, doneness: Doneness) { ... }
cook('chicken', 'well-done')
```

> Why?

Default parameters introduce an implicit assumption on the value of the parameters.
While it seems to make it easier to use,
it actually hinders readability at the call site.

Using default parameters means you provide an assumption on how the code should be used.
For internal code, you do not need to assume, you should already know.

Also, these assumption are often application logics,
which internal functions should not be aware of.

```ts
// bad
function set(name: string, value = undefined) {
  store[name] = value
}

set('abc')

// good
function set(name: string, value: any) {
  store[name] = value
}

set('abc', undefined)
```

In the above example, there is no indication at the call site that calling `set()` without value would clear the value.

## Default Parameters order

**Must not** put default parameters in the middle, before parameters without defaults.

```ts
// bad
function foo(x = 1, y) { ... }

// good
function foo(y, x = 1) { ... }
```

> Why?

While ECMAScript spec allows parameters without defaults after default parameters,
it easily creates confusion and TypeScript prohibit such declaration.

Also, this syntax does not work in Gecko 33 (Firefox 33 / Thunderbird 33 / SeaMonkey 2.30).

### References

- <https://github.com/airbnb/javascript#functions--defaults-last>

## Side effects

Default parameters **should not** create side effects.

```js
// bad
let b = 1
function count(a = b++) { ... }

// good - sort of
@increment(b)
function count(a = b) { ... }
```

> Why?

Adding side effects with default parameters creates implicit state changes,
making it hard to reason and debug.

If you want to have side effect during function invocation, use decorator.

### References

- <https://github.com/airbnb/javascript#functions--default-side-effects>

## Variables

You **should not** use variables in default parameters (except `const`).

```js
// bad
let b = 1
function count(a = b) { ... }

// ok
function createCounter(b) {
  // only if `b` is primitive, e.g. number.
  return function count(a = b) { ... }
}

// ok
function createCounter(obj) {
  const b = obj.b
  return function count(a = b) { ... }
}

// good
function count(a = 1) { ... }
```

> Why?

Using variables in default parameters effectively means you are using global state relatively to the function.
Since default parameters are hidden from the consumer,
it is hard to reason and makes the function not pure.

If you need such state, it is better to use object, class, or closure to contain such state.

## Complex Default Parameters

You **may** use array as default parameters.

---

You **should not** use object as default parameters.

## Related Topics

- [optional parameters](/docs/pages/03-typescript-syntax/optional-parameters.md)

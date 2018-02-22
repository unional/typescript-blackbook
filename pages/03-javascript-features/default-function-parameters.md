# Default Function Parameters

Default function parameters allow formal parameters to be initialized with default values or `undefined` is passed.

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters>

## Always put default parameters last

ECMAScript spec allows parameters without defaults after default parameters.

> Why? This easily creates confusion and TypeScript prohibit such declaration.
Also, this syntax does not work in Gecko 33 (Firefox 33 / Thunderbird 33 / SeaMonkey 2.30).

```js
// bad
function foo(x = 1, y) { ... }

// good
function foo(y, x = 1) { ... }
```

- <https://github.com/airbnb/javascript#functions--defaults-last>

## Avoid side effects with default parameters

> Why? Adding side effects with default parameters creates implicit state changes,
making it hard to reason and debug.

If you want to have side effect during function invocation, use decorator.

```js
// bad
let b = 1
function count(a = b++) { ... }

// good - sort of
@increment(b)
function count(a = b) { ... }
```

## Avoid using variables in default parameters

> Why? Using variables in default parameters effectively means you are using global state relatively to the function.
Since default parameters are hidden from the consumer, it is hard to reason and make the function not pure.

If you need such state, it is better to use object, class, or closure to contain such state.

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

## Prefer default parameter syntax over mutating function arguments

> Why? Default parameter is added to the language to address the pitfalls of mutating function arguments.
Take benefit of the new syntax.

```js
// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```

- <https://github.com/airbnb/javascript#es6-default-parameters>

## Restrain usage of default parameters only to public API

Public API mostly means the public APIs of a module or package.
i.e. the API that your consumer will use.

Avoid using default parameters for internal classes and functions.

> Why? Default parameters introduce an implicit assumption on the value of the parameters.
While it seems to make it easier to use, it actually hinders readability at the call site.

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

> Why? Using default parameters effective means your function is doing two things:
one with actual parameter and on with default parameters.
>
> Why? Using default parameters means you pre-defined a perception on how the code should be used,
or should be used with certain context.
For internal code, you should not need to assume, you should already know.

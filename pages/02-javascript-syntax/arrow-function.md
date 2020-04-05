# Arrow Function

> An arrow function expression is a syntactically compact alternative to a regular function expression,
> although without its own bindings to the `this`, `arguments`, `super`, or `new.target` keywords.

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions>

Arrow function, sometimes also refered as fat-arrow function,
is one of the favorite features introduced in ES2015.

It makes the code easier to read most of the time.

The most significant difference between arrow function and function declaration and expression is that the `this` value is lexically binded at the declaration site.

## When To Use

You **must** use arrow function when there is no involvement of `this`.

```ts
// ok
[1, 2, 3].map(function (x) { return x + 1 })

// ok
function closure() {
  const name = 'bunny'
  return function () {
    return name
  }
}

// best
[1, 2, 3].map(x => x + 1)

// best
function closure() {
  const name = 'bunny'
  return () => name
}
```

> Why?

You can see arrow function is much more compact and easier to read.

Also, when there is no access to `this`,
there is no performance difference between the two:

- <https://jsperf.com/function-vs-arrow-function>
- <https://jsperf.com/closure-function-vs-arrow>

So there is no reason to not using it.

---

You **must** use arrow function when you need to bind to the current `this`.

```ts
type Owner = { on: (action: string, handler: () => void) => void }

// bad
class Bunny {
  slapped = 0
  owner(cruelOwner: Owner) {
    cruelOwner.on('slap', function () {
      this.slapped++
    }.bind(this))
  }
}
// ok but still bad
class Bunny {
  slapped = 0
  owner(cruelOwner: Owner) {
    const self = this
    cruelOwner.on('slap', function () { self.slapped++ })
  }
}

// best but still bad!!!
class Bunny {
  slapped = 0
  owner(cruelOwner: Owner) {
    cruelOwner.on('slap', () => { this.slapped++ })
  }
}
```

> Why?

This is one of the primary use case arrow function is designed for.
The JavaScript engine do the lifting for you so that `this` is binded to the lexical context.

Because of that, you code is more compact and also more efficient at the same time.

- <https://jsperf.com/bind-vs-arrow-bunny>

---

You **should** use arrow function for callbacks.

```ts
// bad
boringLiterature.iterate(function (line) { forget(line) });

// good
boringLiterature.iterate(line => forget(line));

// even better
boringLiterature.iterate(forget);
```

> Why?

When writing callback,
typically you don't need to access `this`.
Even if you want to, you are probably referring to the `this` in the current lexical context.

That is what the arrow function provides.

> Why not?

If the callback has its own concept of `this` (usually this indicates a bad design, e.g. `$.each()`) AND you need to access it, then you don't have other choices.

If your callback is complicated, move it out to its own function declaration. Large callback makes the code harder to understand since it obstructs the main flow of the code.

---

You **should** use function declaration to declare function,
instead of function expression or arrow function.

```ts
// bad
const foo = function() { return 'foo' }

// bad
const foo = () => 'foo'

// good
function foo() { return 'foo' }
```

> Why?

Arrow function is a function expression.
The formal name is `arrow function expression`.
It subjects to the same hoisting problem inherited from function expression.

When declaring file scoped function, use function declaration to avoid hoisting suprise.

Also, function declaration can be recognized by the langauge service as callable function,
so you will get the right hint from your IDE.

---

You **should** use arrow function to define higher-order function and benefit from its compact form.

```ts
// good
export function high(store: Store) {
  return function (next: (action) => void) {
    return function (action: string) {
      next(action)
    }
  }
}

// good
export const high = (store: Store) => (next: (action) => void) => (action: string) => next(action)

// best, if you want to add and reuse the types
type Store = { ... }
type Next = (action: string) => void
type SomeFunc = (store: Store) => (next: Next) => (action: string) => void
export const high: SomeFunc = store => next => action => next(action)
```

> Why?

Although this contradicts with the last guideline,
higher-order function are typically used as argument or exported to be used elsewhere.

Therefore, you can justify to use array function syntax for this purpose.

## Single Expression

When the function contains a single expression,
you **should** use concise body over block body.

```ts
// bad
[1, 2, 3].map(number => { return `A string containing the ${number}.` });

// good
[1, 2, 3].map(number => `A string containing the ${number}.`);

// good
const objectify = (value: string) => ({ value })
```

> Why?

It reads well especially when multiple functions are chained together.

## Other References

- <https://stackoverflow.com/questions/22939130/when-should-i-use-arrow-functions-in-ecmascript-6>
- <https://jsperf.com/arrow-function-vs-bind-vs-context-argument/4>

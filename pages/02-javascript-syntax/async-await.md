# Async await

`async/await` is a JavaScript syntactic sugar combining `Promise` and `generator` to create a powerful asynchronous mechanism.

You have to declare a function to be `async` before you can use `await` within the function.

```ts
// error
function foo() {
  return await doSomeAsyncWork()
}
```

when you add `await` to a statement, it will check if the result of the statement is an `Promise`.
If it is, then the code will be blocked and wait for the promise to resolve.

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function>

## Concurrent execution

Using `async/await` **may** negatively impact your code performance.

> Why?

`await` will block the call until the `Promise` is resolved,
it may slow down your code.

```ts
// bad, this function will not return until `p1` and `p2` are resolved
async function doMultipleThings() {
  const p1 = doSomeAsyncWork()
  const p2 = doSomeOtherAsyncWork()
  return await p1 + await p2 + 1
}

// good, no blocking
function doMultipleThings() {
  const p1 = doSomeAsyncWork()
  const p2 = doSomeOtherAsyncWork()
  return Promise.all([p1, p2]).then(([x, y]) => x + y + 1)
}
```

## Return await

**Should** void `return await`.

> Why?

`return await` will cause your code to wait for the promise instead of propagating the promise to the caller.
This is a common mistake made by novice and most likely is a mistake.

> Why Not?

Sometimes you do want to wait for the promise.
For example, you want to `try-catch` the rejected promise.

```ts
// bad
async function foo() {
  return await doSomethingAsync()
}

// good
async function foo() {
  return doSomethingAsync()
}

// also good
async function tryDo() {
  try {
    return await doSomethingAsync()
  }
  catch (e) {
    // process the rejected value
  }
}
```

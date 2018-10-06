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

## Concurrent execution

- Be aware that over-using `async/await` may negatively impact your code performance.

  ```ts
  // bad
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

- avoid `return await`.

  tslint: ['no-return-await'](../default/tslint.md#no-return-await)

  > Why?
  > `return await` will cause your code to wait for the promise instead of propagating the promist to the caller.
  > This is a common mistake made by novice and most likely is a mistake.
  >
  > Why Not?
  > In very rare case, you might actually want this behavior.
  > In that case, supress the warning.

  ```ts
  // bad
  async function foo() {
    return await doSomethingAsync()
  }

  // good
  async function foo() {
    return doSomethingAsync()
  }
  ```
